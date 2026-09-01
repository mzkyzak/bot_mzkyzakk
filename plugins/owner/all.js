import config from '../../config.js'
import te from '../../src/lib/mzkyzak-error.js'

const pluginConfig = {
    name: 'all',
    alias: ['allmode', 'public'],
    category: 'owner',
    description: 'Mengaktifkan mode All Chats (bot merespon di grup maupun chat pribadi)',
    usage: '.all',
    example: '.all',
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
        const currentMode = config.mode;
        if (currentMode === 'all') {
            return await m.reply('ℹ️ Bot sudah dalam mode *All Chats (all)*');
        }
        config.mode = 'all';
        const { getDatabase } = await import('../../src/lib/mzkyzak-database.js');
        const db = getDatabase();
        db.setting('botMode', 'all');
        db.save();
        
        const responseText = `🌐 *ᴍᴏᴅᴇ ᴀʟʟ ᴄʜᴀᴛs ᴀᴋᴛɪꜰ*\n\n` +
            `> Bot sekarang merespon di semua obrolan (grup dan chat pribadi)!\n\n` +
            `_Gunakan .gc atau .private untuk mengubah mode_`;
        await m.reply(responseText);
        console.log(`[Mode] Changed to ALL by ${m.pushName} (${m.sender})`);
    } catch (error) {
        console.error('[All Command Error]', error);
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
