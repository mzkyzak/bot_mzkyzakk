import axios from 'axios'
import { getParticipantJid, resolveAnyLidToJid } from '../../src/lib/mzkyzak-lid.js'
import * as timeHelper from '../../src/lib/mzkyzak-time.js'
import te from '../../src/lib/mzkyzak-error.js'
const pluginConfig = {
    name: 'groupinfo',
    alias: ['infogroup', 'gcinfo', 'infogc', 'gc'],
    category: 'group',
    description: 'Menampilkan informasi lengkap grup',
    usage: '.groupinfo',
    example: '.groupinfo',
    isOwner: false,
    isPremium: false,
    isGroup: false, // Changed to false to allow '.groupinfo all' in private chat
    isPrivate: false,
    cooldown: 10,
    energi: 0,
    isEnabled: true,
    isAdmin: false,
    isBotAdmin: false
}

function featureStatus(val) {
    if (val === true || val === 'on') return '✅'
    return '❌'
}

async function handler(m, { sock, db }) {
    try {
        const args = m.args || [];
        if (args[0] === 'all' || args[0] === 'list') {
            if (!m.isOwner) {
                return await m.reply('🚫 *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\n\n> Hanya owner yang bisa melihat daftar semua grup!');
            }
            const groupsObj = await sock.groupFetchAllParticipating();
            const groups = Object.values(groupsObj);
            
            if (!groups || groups.length === 0) {
                return await m.reply('ℹ️ Bot belum bergabung ke grup manapun.');
            }
            
            let text = `📋 *DAFTAR GRUP BOT*\n\n`;
            text += `> Total Grup: ${groups.length}\n\n`;
            
            groups.forEach((g, i) => {
                text += `${i + 1}. *${g.subject || 'Tanpa Nama'}*\n`;
                text += `   ID: \`${g.id}\`\n`;
                text += `   Member: ${g.participants?.length || 0}\n\n`;
            });
            text += `_Gunakan \`.gc private [ID]\` atau \`.gc public [ID]\`_`;
            
            return await m.reply(text);
        }

        if (!m.isGroup) {
            return await m.reply('👥 Command ini hanya bisa digunakan di dalam grup (kecuali `.groupinfo all` untuk Owner).');
        }

        const groupMeta = m.groupMetadata
        const participants = groupMeta.participants || []
        const admins = participants.filter(p => p.admin)

        let ownerJid = null
        if (groupMeta.owner) ownerJid = resolveAnyLidToJid(groupMeta.owner, participants)
        if (!ownerJid || ownerJid.includes('@lid')) {
            const superAdmin = participants.find(p => p.admin === 'superadmin')
            if (superAdmin) ownerJid = getParticipantJid(superAdmin)
        }
        if (!ownerJid || ownerJid.includes('@lid')) {
            const firstAdmin = admins[0]
            if (firstAdmin) ownerJid = getParticipantJid(firstAdmin)
        }

        const group = db.getGroup(m.chat) || {}

        const createdDate = groupMeta.creation
            ? timeHelper.fromTimestamp(groupMeta.creation * 1000, 'D MMMM YYYY')
            : 'Tidak diketahui'

        const ownerNumber = ownerJid ? ownerJid.split('@')[0] : null
        const ownerDisplay = ownerNumber && !ownerNumber.includes(':')
            ? `@${ownerNumber}`
            : 'Tidak diketahui'

        let ppUrl = null
        try {
            ppUrl = await sock.profilePictureUrl(m.chat)
        } catch {}

        const isOpen = groupMeta.announce === false || !groupMeta.announce

        let text = `👥 *INFO GRUP*\n\n`
        text += `Nama: *${groupMeta.subject}*\n`
        text += `ID: ${m.chat}\n`
        text += `Owner: ${ownerDisplay}\n`
        text += `Dibuat: ${createdDate}\n`
        text += `Status: ${isOpen ? '🔓 Terbuka' : '🔒 Tertutup'}\n\n`

        text += `📊 *MEMBER*\n`
        text += `Total: ${participants.length}\n`
        text += `Admin: ${admins.length}\n`
        text += `Member: ${participants.length - admins.length}\n\n`

        text += `🔧 *FITUR AKTIF*\n`
        text += `Welcome: ${featureStatus(group.welcome)}\n`
        text += `Goodbye: ${featureStatus(group.goodbye)}\n`
        text += `Autoreply: ${featureStatus(group.autoreply)}\n`
        text += `AutoAI: ${featureStatus(group.autoai)}\n`
        text += `AutoDL: ${featureStatus(group.autodl)}\n`
        text += `AutoSticker: ${featureStatus(group.autosticker)}\n`
        text += `AutoMedia: ${featureStatus(group.automedia)}\n\n`

        text += `🛡️ *PROTEKSI*\n`
        text += `AntiLink: ${featureStatus(group.antilink)}\n`
        text += `AntiBot: ${featureStatus(group.antibot)}\n`
        text += `AntiToxic: ${featureStatus(group.antitoxic)}\n`
        text += `AntiRemove: ${featureStatus(group.antiremove)}\n`
        text += `AntiHidetag: ${featureStatus(group.antihidetag)}\n`
        text += `AntiSticker: ${featureStatus(group.antisticker)}\n`
        text += `AntiMedia: ${featureStatus(group.antimedia)}\n`
        text += `AntiDocument: ${featureStatus(group.antidocument)}`

        if (groupMeta.desc) {
            text += `\n\n📝 *DESKRIPSI*\n${groupMeta.desc}`
        }

        const mentions = ownerJid && !ownerJid.includes(':') ? [ownerJid] : []

        if (ppUrl) {

            try {
                const ppBuffer = Buffer.from((await axios.get(ppUrl, { responseType: 'arraybuffer', timeout: 10000 })).data)
                await sock.sendMessage(m.chat, {
                    image: ppBuffer,
                    caption: text,
                    mentions
                }, { quoted: m })
            } catch {
                await m.reply(text, { mentions })
            }
        } else {
            await m.reply(text, { mentions })
        }
    } catch (error) {
        m.reply(te(m.prefix, m.command, m.pushName))
    }
}

export { pluginConfig as config, handler }