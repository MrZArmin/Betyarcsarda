const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const { executionAsyncResource } = require("node:async_hooks");

module.exports = {
  name: "play",
  aliases: ["skip", "stop"],
  cooldown: 0,
  description: "Zenebona dáridó",
  async executionAsyncResource(message, args, cmd, client, Discord)
};
