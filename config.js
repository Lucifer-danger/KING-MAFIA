const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nhoEkIhC#9MqD_vYIbnQvdF4ZJyHMtDAXXC0kOj1iV4Opwayi_9w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KING_MAFIA-MD Is Alive Now😍*",
BOT_OWNER: '94762183275',  // Replace with the owner's phone number



};
