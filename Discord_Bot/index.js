// Csatlakoztatja a Discordhoz
const Discord = require("discord.js");
const { Client, MessageAttachment } = require("discord.js");
const bot = new Discord.Client();
const token = "Njg5NDg3MjMyOTU2MTA0NzEz.XnDlVg.q71Xata3tJheQvmRU0UwNm5KdMA";
const { badwords } = require("./csunyaszavak.json");

const fs = require("fs");

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot, Discord);
});

//COMMAND HANDLER--------------------------------------------------------------------------------------
/*const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

//Változók, editelgetem őket szépen--------------------------------------------------------------------

const PREFIX = "_";

var szerverek = {};
const ytdl = require("ytdl-core");
const { Server } = require("http");

//működik-e a BOT
bot.on("ready", () => {
  console.log("Ez a BOT aktív!");
  bot.user
    .setActivity("  _parancsok", { type: "LISTENING" })
    .catch(console.error);
});

bot.on("voiceStateUpdate", (oldMember, newMember) => {
  let newUserChannel = newMember.channelID;
  let oldUserChannel = oldMember.channelID;

  epicadmin = bot.channels.cache.get("337540224865402890");
  if (
    newUserChannel === "626765305380601857" &&
    newMember.id === "398180346375569408"
  ) {
    epicadmin.send("Itt a faszagyerek.. Köszöntsétek Attilát!!!!");
  } else {
    return 0;
  }
});

// Parancsok innen futnak, új parancs, új "case".
bot.on("message", (message) => {
  //csúnyaszószelektor

  let confirm = false;
  var i;
  if (!message.author.bot)
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }

  if (confirm) {
    message.delete();
    return message.channel.send(`Nem beszélünk csúnyán, ${message.author}!`);
  }
  //vége

  if (message.content === "kutya") {
    message.channel.send("Wauuu");
  }

  if (message.content === "!p bad guy") {
    message.channel.bulkDelete(1);
    message.reply("Neeeem itt ezt neem");
  }
  if (message.content === "bocsi") {
    for (var counter = 1; counter <= 100; counter++) {
      message.channel.send("A pontosság a királyok udvariassága");
    }
  }
  if (!message.content.startsWith(PREFIX)) return;

  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "törölj":
      bot.commands.get("torolj").execute(message, args);
      break;

    case "infó":
      bot.commands.get("info").execute(message, args);
      break;

    case "parancsok":
      bot.commands.get("parancsok").execute(message, args);
      break;

    case "insta":
      bot.commands.get("insta").execute(message, args);
      break;

    case "nyekórarend":
      message.channel.bulkDelete(1);
      const attachment2 = new MessageAttachment("./NYEKÓRAREND.png");
      message.channel.send(attachment2);

      break;

    case "ajtpórarend":
      message.channel.bulkDelete(1);
      const attachment3 = new MessageAttachment("./AJTPÓRAREND.png");
      message.channel.send(attachment3);

      break;

    case "avatar":
      bot.commands.get("avatar").execute(message, args);
      break;

    case "óra":
      bot.commands.get("óra").execute(message, args);
      break;

    case "p":
      bot.commands.get("play").execute(message, args);
      break;

    case "play":
      bot.commands.get("play").execute(message, args);
      break;

    case "dc":
      bot.commands.get("leave").execute(message, args);
      break;
  }
});
*/
//ez az, ami elindítja az egészet
bot.login(token);
