const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nhoEkIhC#9MqD_vYIbnQvdF4ZJyHMtDAXXC0kOj1iV4Opwayi_9w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Lucifer-danger/KING-MAFIA/blob/main/images/IMG-20251207-WA0004.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KING_MAFIA-MD Is Alive Now*\n\n*Version:* ${settings.version} \n*Status:* Online\n*Mode:* Public\n\n*🌟 Features:*\n• Group management\n• Antilink Protection\n• Fun Commands\n• And more!\n\nType *.menu* for full command list",
BOT_OWNER: '94762183275',  // Replace with the owner's phone number



};
