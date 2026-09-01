import fs from 'fs'
import path from 'path'
import te from '../../src/lib/mzkyzak-error.js'
import { updateAssetUrl } from '../../src/lib/mzkyzak-uploader.js'
const pluginConfig = {
    name: 'ganti-mzkyzak2.jpg',
    alias: ['gantimzkyzak2', 'setmzkyzak2'],
    category: 'owner',
    description: 'Ganti gambar mzkyzak2.jpg',
    usage: '.ganti-mzkyzak2.jpg (reply/kirim gambar)',
    example: '.ganti-mzkyzak2.jpg',
    isOwner: true,
    isPremium: false,
    isGroup: false,
    isPrivate: false,
    cooldown: 5,
    energi: 0,
    isEnabled: true
}

async function handler(m, { sock }) {
    const isImage = m.isImage || (m.quoted && m.quoted.type === 'imageMessage')
    
    if (!isImage) {
        return m.reply(`🖼️ *ɢᴀɴᴛɪ ᴏᴜʀɪɴ2.ᴊᴘɢ*\n\n> Kirim/reply gambar untuk mengganti\n> File: assets/images/mzkyzak2.jpg`)
    }
    
    try {
        let buffer
        if (m.quoted && m.quoted.isMedia) {
            buffer = await m.quoted.download()
        } else if (m.isMedia) {
            buffer = await m.download()
        }
        
        if (!buffer) {
            return m.reply(`❌ Gagal mendownload gambar`)
        }
        
        await m.reply(`⏳ Sedang mengupload gambar...`)
        try {
            const newUrl = await updateAssetUrl('mzkyzak2', buffer, 'mzkyzak2.jpg')
            m.reply(`✅ *ʙᴇʀʜᴀsɪʟ*\n\n> Gambar mzkyzak2.jpg telah diganti ke URL baru:\n> ${newUrl}\n> Config telah diupdate secara realtime!`)
        } catch (e) {
            m.reply(`❌ Gagal mengupload gambar: ${e.message}`)
        }
    } catch (error) {
        await m.reply(te(m.prefix, m.command, m.pushName))
    }
}

export { pluginConfig as config, handler }