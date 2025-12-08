const { fetchBuffer } = require('../lib/functions');
const { Sticker } = require('wa-sticker-formatter');

module.exports = {
  name: 'sticker',
  category: 'converter',
  description: 'Converts an image, video, or text to a sticker.',
  async execute(conn, chat, args, msg) {
    let mediaBuffer;

    if (msg.message.imageMessage) {
      // Reply to an image
      const stream = await conn.downloadMediaMessage(msg);
      mediaBuffer = await stream.toBuffer();
    } else if (msg.message.extendedTextMessage && msg.message.extendedTextMessage.text) {
      // Create a sticker from quoted text
      const text = msg.message.extendedTextMessage.text;
      if (!text) {
        return conn.sendMessage(chat.key.remoteJid, { text: '❌ Please reply to a message with text or an image to create a sticker.' });
      }
      // Note: Creating a sticker from text requires an external API or a canvas library.
      // For simplicity, this example will just use the quoted text.
      // A more advanced implementation would use something like `canvacord` or an API.
      return conn.sendMessage(chat.key.remoteJid, { text: `✅ Text sticker feature not fully implemented, but your text was: "${text}"` });
    } else {
      return conn.sendMessage(chat.key.remoteJid, { text: '❌ Please reply to an image to convert it to a sticker.' });
    }

    try {
      const sticker = new Sticker(mediaBuffer, {
        pack: 'KING-MAFIA',
        author: 'IMESH',
        type: 'default',
        quality: 70,
      });
      const buffer = await sticker.toBuffer();
      await conn.sendMessage(chat.key.remoteJid, { sticker: buffer }, { quoted: chat });
    } catch (error) {
      console.error(error);
      await conn.sendMessage(chat.key.remoteJid, { text: '❌ Failed to create sticker.' });
    }
  }
};
