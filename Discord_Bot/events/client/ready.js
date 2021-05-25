module.exports = () => {
  console.log("Ez a BOT aktív!");
  bot.user
    .setActivity("  _parancsok", { type: "LISTENING" })
    .catch(console.error);
};
