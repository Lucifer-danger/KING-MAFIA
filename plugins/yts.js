const { cmd } = require("../command");
const yts = require("yt-search");

cmd(
  {
    pattern: "yt",
    alias: ["yts", "youtubesearch"],
    react: "⭕",
    desc: "Search YouTube videos",
    category: "search",
    filename: __filename,
  },
  async (
    king,
    mek,
    m,
    {
      from,
      quoted,
      q,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("*Please provide a search query!* 🔍");

      reply("*Searching YouTube for you...* ⌛");

      const search = await yts(q);

      if (!search || !search.all || search.all.length === 0) {
        return reply("❌ *No results found on YouTube.*");
      }

      const results = search.videos.slice(0, 5); 
      let formattedResults = results.map((v, i) => (
        `🎬 *${i + 1}. ${v.title}*\n📅 ${v.ago} | ⌛ ${v.timestamp} | 👁️ ${v.views.toLocaleString()} views\n🔗 ${v.url}`
      )).join("\n\n");

      const caption = `  
Your youtube search results
─────────────────────────
🔎 *Query*: ${q}
${formattedResults}
   `;

      await king.sendMessage(
        from,
        {
          image: {
            url: "https://github.com/Lucifer-danger/KING-MAFIA/blob/main/images/IMG-20251207-WA0008.jpg",
          },
          caption,
        },
        { quoted: mek }
      );
    } catch (err) {
      console.error(err);
      reply("*An error occurred while searching YouTube.* ❌");
    }
  }
);
