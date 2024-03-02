const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.KEY);




const portfolio = () => {
  `portfolio`;
};
const ecommerce = async () => {
  const res = await fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
  console.log(res);
  return res;
};

try {
  bot.start((ctx) => ctx.reply("Welcome to Harsh's Algo bot")); // /start

  bot.command("toplinuxcommands", (ctx) => ctx.reply("ls cd pwd grep rm"));

  bot.on("sticker", (ctx) => ctx.reply("❤️"));

  bot.command("portfolio", async (ctx) => {
    const response = await axios.get("https://fakestoreapi.com/products/1");
    ctx.reply(response.data);
  });

  // bot.command('quit', async (ctx) => {
  //     // Explicit usage
  //     await ctx.telegram.leaveChat(ctx.message.chat.id);

  //     // Using context shortcut
  //     await ctx.leaveChat();
  // });

  bot.on("text", (ctx) => {
    console.log(ctx.update.message);
    if (ctx.update.message.text == "I love you") {
      ctx.reply("love you too broo");
    } else {
      ctx.reply("i don't understand humans");
    }
  });
  bot.launch();
} catch {
  console.log("unexpected command");
}
