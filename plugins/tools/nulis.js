import * as _canvas from "@napi-rs/canvas";
import path from "path";
import fs from "fs";
import * as timeHelper from "../../src/lib/mzkyzak-time.js";
import te from "../../src/lib/mzkyzak-error.js";
import { saluranCtx } from "../../src/lib/mzkyzak-context.js";
import axios from "axios";
import config from "../../config.js";
import { getAssetBuffer } from "../../src/lib/mzkyzak-asset-manager.js";
const pluginConfig = {
  name: "nulis",
  alias: ["tulis", "write"],
  category: "tools",
  description: "Generate tulisan tangan di kertas",
  usage: ".nulis <teks>",
  example: ".nulis Aku cinta kamu selamanya",
  isOwner: false,
  isPremium: false,
  isGroup: false,
  isPrivate: false,
  cooldown: 10,
  energi: 1,
  isEnabled: true,
};
const fontUrl = getAssetBuffer("mzkyzak-font");
let _fontRegistered = false;
function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";
  for (const word of words) {
    const testLine = currentLine + (currentLine ? " " : "") + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}
async function handler(m, { sock }) {
  const text = m.args?.join(" ");
  if (!text) {
    return m.reply(
      `⚠️ *ᴄᴀʀᴀ ᴘᴀᴋᴀɪ*\n\n` +
      `> \`${m.prefix}nulis <teks>\`\n\n` +
      `> Contoh:\n` +
      `> \`${m.prefix}nulis Aku cinta kamu selamanya\``,
    );
  }
  if (text.length > 3000) {
    return m.reply(`❌ *ᴛᴇᴋs ᴛᴇʀʟᴀʟᴜ ᴘᴀɴᴊᴀɴɢ*\n\n> Maksimal 3000 karakter agar tidak spam bot`);
  }
  const inputUrl = getAssetBuffer("mzkyzak-kertas");
  if (!inputUrl) {
    return m.reply(
      `❌ *ᴛᴇᴍᴘʟᴀᴛᴇ ᴛɪᴅᴀᴋ ᴀᴅᴀ*\n\n> File template kertas tidak ditemukan di config.assets`,
    );
  }
  await m.react("🕕");
  await m.reply(`🕕 *ᴍᴇᴍᴘʀᴏsᴇs...*\n\n> Membuat tulisan tangan...`);
  try {
    const { createCanvas, loadImage, GlobalFonts } = _canvas;
    if (!_fontRegistered) {
      try {
        const fontBuf = getAssetBuffer("mzkyzak-font");
        if (fontBuf) {
          GlobalFonts.register(fontBuf, "Zahraaa");
        }
      } catch (err) {
        console.error("Gagal load font:", err);
      }
      _fontRegistered = true;
    }
    const bgBuf = getAssetBuffer("mzkyzak-kertas");
    const bgImage = await loadImage(bgBuf);

    // Create a temporary canvas just to calculate wrapped lines
    const canvasForMetrics = createCanvas(bgImage.width, bgImage.height);
    const ctxMetrics = canvasForMetrics.getContext("2d");
    ctxMetrics.font = "20px Zahraaa, Arial";

    const maxWidth = 600;
    const lineHeight = 22.5; // Aligned perfectly with notebook lines
    const startX = 344;
    const startY = 147; // Aligned perfectly with the first notebook line (150px baseline)

    const lines = wrapText(ctxMetrics, text, maxWidth);

    const MAX_LINES_PER_PAGE = 26; // Maximum lines that fit on one page
    const totalPages = Math.ceil(lines.length / MAX_LINES_PER_PAGE);

    for (let page = 0; page < totalPages; page++) {
      const canvas = createCanvas(bgImage.width, bgImage.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bgImage, 0, 0);

      const tgl = timeHelper.formatDate("DD/MM/YYYY");
      const hari = timeHelper.formatFull("dddd");

      ctx.font = "20px Zahraaa, Arial";
      ctx.fillStyle = "#1a1a2e";
      ctx.fillText(hari, 806, 78);

      ctx.font = "18px Zahraaa, Arial";
      ctx.fillText(tgl, 806, 102);

      ctx.font = "20px Zahraaa, Arial";
      const chunk = lines.slice(page * MAX_LINES_PER_PAGE, (page + 1) * MAX_LINES_PER_PAGE);
      chunk.forEach((line, i) => {
        ctx.fillText(line, startX, startY + i * lineHeight);
      });

      const buffer = canvas.toBuffer("image/jpeg");

      const caption = totalPages > 1
        ? `✅ *ʟᴜʟɪsᴀɴ mzkyzak pakai ᴛᴀɴɢᴀɴ (Halaman ${page + 1}/${totalPages})*\n\n> Hatihati ketahuan! 📖`
        : `✅ *ʟᴜʟɪsᴀɴ mzkyzak pakai ᴛᴀɴɢᴀɴ*\n\n> Hatihati ketahuan! 📖`;

      await sock.sendMedia(
        m.chat,
        buffer,
        caption,
        m,
        { type: "image", contextInfo: saluranCtx() },
      );

      // Brief delay to ensure order in WhatsApp chat
      if (totalPages > 1) {
        await new Promise(resolve => setTimeout(resolve, 800));
      }
    }
    await m.react("✅");
  } catch (error) {
    console.error(error);
    await m.react("☢");
    m.reply(te(m.prefix, m.command, m.pushName));
  }
}
export { pluginConfig as config, handler };

