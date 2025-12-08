// plugins/main/ping.js
module.exports = {
    name: 'ping',
    description: 'Checks bot latency.',
    category: 'main',
    async execute(sock, msg) {
        const start = Date.now();
        const sentMsg = await sock.sendMessage(msg.key.remoteJid, { text: 'Pinging...' });
        const latency = Date.now() - start;
        await sock.sendMessage(msg.key.remoteJid, { text: `Pong! Latency: ${latency}ms`, edit: sentMsg.key });
    }
};
