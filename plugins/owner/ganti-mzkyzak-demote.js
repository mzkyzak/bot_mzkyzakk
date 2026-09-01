import fs from 'fs'
import path from 'path'
import te from '../../src/lib/mzkyzak-error.js'
import { updateAssetUrl } from '../../src/lib/mzkyzak-uploader.js'
const pluginConfig = {
    name: 'ganti-mzkyzak-demote.jpg',
    alias: ['gantimzkyzakdemote', 'setmzkyzakdemote'],
    category: 'owner',
    description: 'Ganti gambar mzkyzak-demote.jpg',
    usage: '.ganti-mzkyzak-demote.jpg (reply/kirim gambar)',
    example: '.ganti-mzkyzak-demote.jpg',
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
    if (!isImage) return m.reply(`🖼️ *ɢᴀɴᴛɪ MZKYZAK-DEMOTE.JPG*\n\n> Kirim/reply gambar untuk mengganti\n> File: assets/images/mzkyzak-demote.jpg`)
    try {
        let buffer = m.quoted && m.quoted.isMedia ? await m.quoted.download() : await m.download()
        if (!buffer) return m.reply('❌ Gagal mendownload gambar')
        await m.reply(`⏳ Sedang mengupload gambar...`)
        try {
            const newUrl = await updateAssetUrl('mzkyzak-demote', buffer, 'mzkyzak-demote.jpg')
            m.reply(`✅ *ʙᴇʀʜᴀsɪʟ*\n\n> Gambar mzkyzak-demote.jpg telah diganti ke URL baru:\n> ${newUrl}\n> Config telah diupdate secara realtime!`)
        } catch (e) {
            m.reply(`❌ Gagal mengupload gambar: ${e.message}`)
        }
    } catch (error) {
        await m.reply(te(m.prefix, m.command, m.pushName))
    }
}

export { pluginConfig as config, handler }