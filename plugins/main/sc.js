import { getAssetBuffer } from "../../src/lib/mzkyzak-asset-manager.js";
import config from "../../config.js"

const pluginConfig = {
    name: "sc",
    alias: ["script"],
    category: "main",
    description: "Link script bot wa terbaru",
    usage: ".sc",
    example: ".sc",
    isPremium: false,
    isOwner: false,
    isBanned: false,
    isAdmin: false,
    cooldown: 10,
    energi: 0,
    isBotAdmin: false,
    isEnabled: true
}

async function handler(m, { sock }) {
    return await sock.sendMessage(m.chat, {
        image: getAssetBuffer("mzkyzak"),
        caption: `🌾 Halo kak *${m.pushName}*
        
Untuk asli dari bot ini, kamu bisa dapatkan melalui link, nanti kamu tinggal cari kata kunci *MZKYZAK MD*`,
        footer: "💬 Link Download Disini YGY , JANGAN LUPA SUBSCRIBE",
        interactiveButtons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "🥐 Script Mzkyzak MD Deluxe V3.3 NO ENC",
                    url: "https://youtu.be/iEullsLragQ?si=dvucnZZH7-T4lFon",
                    merchant_url: "https://youtu.be/iEullsLragQ?si=dvucnZZH7-T4lFon"
                })
            }
        ]

    }, { quoted: m })
}

export { pluginConfig as config, handler }