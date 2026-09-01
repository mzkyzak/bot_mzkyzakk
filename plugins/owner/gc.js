import config from '../../config.js'
import te from '../../src/lib/mzkyzak-error.js'

const pluginConfig = {
    name: 'gc',
    alias: ['gcmode'],
    category: 'owner',
    description: 'Mengelola mode bot di grup: private (diam) atau public (respon)',
    usage: '.gc private [id|all] | .gc public [id|all] | .gc list',
    example: '.gc private all',
    isOwner: true,
    isPremium: false,
    isGroup: false,
    isPrivate: false,
    cooldown: 3,
    energi: 0,
    isEnabled: true
};

async function handler(m, { sock }) {
    try {
        const isRealOwner = validateOwner(m);
        if (!isRealOwner) {
            return await m.reply('🚫 *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ*\n\n> Hanya owner yang bisa mengubah mode bot!');
        }

        const { getDatabase } = await import('../../src/lib/mzkyzak-database.js');
        const db = getDatabase();

        const args = m.args || [];
        const subCmd = args[0]?.toLowerCase();

        // ─── .gc (tanpa argumen) ─── tampilkan info
        if (!subCmd) {
            const selfGroups = db.setting('selfGroups') || [];
            const publicGroups = db.setting('publicGroups') || [];
            const gcPrivateAll = db.setting('gcPrivateAll') || false;

            let text = `🏘️ *ɪɴꜰᴏ ᴍᴏᴅᴇ ɢʀᴜᴘ*\n\n`;
            text += `╭┈┈⬡「 📊 *sᴛᴀᴛᴜs* 」\n`;
            text += `┃ 🔕 GC Private All: *${gcPrivateAll ? 'Aktif ✅' : 'Nonaktif ❌'}*\n`;
            text += `┃ 🔇 Grup Diam: *${selfGroups.length}* grup\n`;
            text += `┃ 🔔 Grup Public: *${publicGroups.length}* grup\n`;
            text += `╰┈┈⬡\n\n`;
            text += `*CARA PAKAI:*\n`;
            text += `> \`.gc private all\` — Bot diam di SEMUA grup\n`;
            text += `> \`.gc private\` — Bot diam di grup ini\n`;
            text += `> \`.gc public all\` — Bot respon di SEMUA grup\n`;
            text += `> \`.gc public\` — Bot respon di grup ini\n`;
            text += `> \`.gc list\` — Lihat daftar grup yg diam\n`;
            return await m.reply(text);
        }

        // ═══════════════════════════════════════════
        // .gc private [id|all]
        // ═══════════════════════════════════════════
        if (subCmd === 'private') {
            const target = args[1]?.toLowerCase()?.trim();

            // .gc private all → bot diam di SEMUA grup
            if (target === 'all') {
                db.setting('gcPrivateAll', true);
                // Juga hapus publicGroups supaya benar-benar diam semua
                db.setting('publicGroups', []);
                db.save();

                await m.reply(
                    `🔕 *ʙᴏᴛ ᴅɪᴀᴍ ᴅɪ sᴇᴍᴜᴀ ɢʀᴜᴘ*\n\n` +
                    `> Bot tidak akan merespon apapun di semua grup.\n` +
                    `> Bot tetap merespon di chat pribadi owner.\n\n` +
                    `_Gunakan \`.gc public all\` untuk mengaktifkan kembali_`
                );
                console.log(`[GC] Private ALL by ${m.pushName} (${m.sender})`);
                return;
            }

            // .gc private (tanpa id) → pakai grup saat ini
            // .gc private <id> → pakai id yang diberikan
            let targetId;
            if (!target) {
                if (!m.isGroup) {
                    return await m.reply('❌ Gunakan di dalam grup, atau berikan ID grup.\n\n> Contoh: `.gc private 120363xxx@g.us`');
                }
                targetId = m.chat;
            } else {
                targetId = target.endsWith('@g.us') ? target : `${target}@g.us`;
            }

            let selfGroups = db.setting('selfGroups') || [];
            if (selfGroups.includes(targetId)) {
                return await m.reply(`ℹ️ Grup \`${targetId}\` sudah diam (private).`);
            }

            selfGroups.push(targetId);
            db.setting('selfGroups', selfGroups);
            db.save();

            await m.reply(
                `🔕 *ʙᴏᴛ ᴅɪᴀᴍ ᴅɪ ɢʀᴜᴘ*\n\n` +
                `> ID: \`${targetId}\`\n` +
                `> Bot tidak akan merespon apapun di grup tersebut.\n\n` +
                `_Gunakan \`.gc public ${targetId}\` untuk mengaktifkan kembali_`
            );
            console.log(`[GC] Group ${targetId} set to PRIVATE by ${m.pushName} (${m.sender})`);
            return;
        }

        // ═══════════════════════════════════════════
        // .gc public [id|all]
        // ═══════════════════════════════════════════
        if (subCmd === 'public') {
            const target = args[1]?.toLowerCase()?.trim();

            // .gc public all → bot respon di SEMUA grup
            if (target === 'all') {
                db.setting('gcPrivateAll', false);
                db.setting('selfGroups', []);
                db.save();

                await m.reply(
                    `🔔 *ʙᴏᴛ ᴀᴋᴛɪꜰ ᴅɪ sᴇᴍᴜᴀ ɢʀᴜᴘ*\n\n` +
                    `> Bot akan merespon di semua grup kembali!\n\n` +
                    `_Gunakan \`.gc private all\` untuk mendiamkan semua_`
                );
                console.log(`[GC] Public ALL by ${m.pushName} (${m.sender})`);
                return;
            }

            // .gc public (tanpa id) → pakai grup saat ini
            // .gc public <id> → pakai id yang diberikan
            let targetId;
            if (!target) {
                if (!m.isGroup) {
                    return await m.reply('❌ Gunakan di dalam grup, atau berikan ID grup.\n\n> Contoh: `.gc public 120363xxx@g.us`');
                }
                targetId = m.chat;
            } else {
                targetId = target.endsWith('@g.us') ? target : `${target}@g.us`;
            }

            // Hapus dari selfGroups jika ada
            let selfGroups = db.setting('selfGroups') || [];
            selfGroups = selfGroups.filter(id => id !== targetId);
            db.setting('selfGroups', selfGroups);

            // Jika gcPrivateAll aktif, tambahkan ke publicGroups sebagai exception
            const gcPrivateAll = db.setting('gcPrivateAll') || false;
            if (gcPrivateAll) {
                let publicGroups = db.setting('publicGroups') || [];
                if (!publicGroups.includes(targetId)) {
                    publicGroups.push(targetId);
                    db.setting('publicGroups', publicGroups);
                }
            }

            db.save();

            await m.reply(
                `🔔 *ʙᴏᴛ ᴀᴋᴛɪꜰ ᴅɪ ɢʀᴜᴘ*\n\n` +
                `> ID: \`${targetId}\`\n` +
                `> Bot akan merespon kembali di grup tersebut.\n\n` +
                `_Gunakan \`.gc private ${targetId}\` untuk mendiamkan lagi_`
            );
            console.log(`[GC] Group ${targetId} set to PUBLIC by ${m.pushName} (${m.sender})`);
            return;
        }

        // ═══════════════════════════════════════════
        // .gc list — lihat daftar grup yg diam
        // ═══════════════════════════════════════════
        if (subCmd === 'list' || subCmd === 'privatelist') {
            const selfGroups = db.setting('selfGroups') || [];
            const publicGroups = db.setting('publicGroups') || [];
            const gcPrivateAll = db.setting('gcPrivateAll') || false;

            let text = `🔕 *ᴅᴀꜰᴛᴀʀ sᴛᴀᴛᴜs ɢʀᴜᴘ*\n\n`;
            text += `> GC Private All: *${gcPrivateAll ? 'Aktif ✅' : 'Nonaktif ❌'}*\n\n`;

            if (gcPrivateAll && publicGroups.length > 0) {
                text += `🔔 *Grup Exception (tetap aktif):*\n`;
                publicGroups.forEach((id, i) => {
                    text += `${i + 1}. \`${id}\`\n`;
                });
                text += `\n`;
            }

            if (selfGroups.length > 0) {
                text += `🔇 *Grup Diam (private):*\n`;
                selfGroups.forEach((id, i) => {
                    text += `${i + 1}. \`${id}\`\n`;
                });
            } else if (!gcPrivateAll) {
                text += `ℹ️ Tidak ada grup yang di-diamkan.`;
            }

            return await m.reply(text);
        }

        // ─── Subcommand tidak dikenal ───
        return await m.reply(
            `❌ *Sub-command tidak dikenal:* \`${subCmd}\`\n\n` +
            `> Gunakan: \`.gc private all\`, \`.gc public all\`, \`.gc list\``
        );

    } catch (error) {
        console.error('[GC Command Error]', error);
        await m.reply(te(m.prefix, m.command, m.pushName));
    }
}

function validateOwner(m) {
    if (!m.isOwner) return false;
    if (m.fromMe) return true;
    const senderNumber = m.sender?.replace(/[^0-9]/g, '') || '';
    const ownerNumbers = config.owner?.number || [];
    
    const isInOwnerList = ownerNumbers.some(owner => {
        const cleanOwner = owner.replace(/[^0-9]/g, '');
        return senderNumber.includes(cleanOwner) || cleanOwner.includes(senderNumber);
    });
    if (!isInOwnerList) return false;
    if (!m.sender || !m.sender.includes('@')) return false;
    return true;
}

export { pluginConfig as config, handler }
