const { fetchJson } = require('../lib/functions');

module.exports = {
  name: 'ping',
  category: 'general',
  description: 'Checks the bot\'s response time.',
  async execute(conn, chat, args, msg) {
    const startTime = Date.now();
    const message = await conn.sendMessage(chat.key.remoteJid, { text: '🏓 Pinging...' });
    const endTime = Date.now();
    const ping = endTime - startTime;
    await conn.sendMessage(chat.key.remoteJid, { text: `🏓 Pong!\n⏱️ Latency: ${ping}ms`, edit: message.key });
  }
};
