// plugins/ping.js

/**
 * @param {import('@adiwajshing/baileys').WASocket} sock The socket connection of the bot.
 * @param {import('@adiwajshing/baileys').proto.IWebMessageInfo} msg The message object that triggered the command.
 * @param {string[]} args The arguments passed along with the command.
 * @param {import('../config.js').Config} config The bot's configuration object.
 */
async function execute(sock, msg, args, config) {
    const startTime = Date.now();

    // Send a temporary message first
    const sentMsg = await sock.sendMessage(
        msg.key.remoteJid, 
        { text: '🏓 Pinging...' }, 
        { quoted: msg }
    );

    // Calculate the round-trip latency
    const latency = Date.now() - startTime;

    // Edit the temporary message with the final result
    await sock.sendMessage(
        msg.key.remoteJid, 
        { 
            text: `*Pong!*\n\n⚡ Latency: ${latency}ms`,
            edit: sentMsg.key 
        }
    );
}

module.exports = {
    name: 'ping',
    description: 'Checks the bot\'s response latency.',
    category: 'main', // Optional: for organizing commands in a menu
    execute: execute
};
