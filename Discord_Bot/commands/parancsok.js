const Discord = require('discord.js')


module.exports = {
    name:'parancsok',
    description:'Parancsok dokumantációja',
    execute(message, args){
        message.channel.bulkDelete(1)
        const embeda = new Discord.MessageEmbed()
        .setTitle('Parancsok', "egyes parancsok rövid leírása")
        .addField("PREFIX", "Kezdj minden parancsot a _ prefixxel ;)")
        .addField("törölj x ", "Töröl annyi üzenetet, amennyit az x helyére írsz")
        .addField("infó ", "Aktuális információ a BOT-ról")
        .addField("parancsok", "Éppen azokat nézegeted ;)")
        .addField("ajtpórarend", "Az AJTP órarendje")
        .addField("nyekórarend", "A NYEK órarendje")
        .addField("insta", "Breakmemebattery instája")
        .addField("avatar", "A jelenlegi profilképed")
        .setColor('#00cc00')
        message.channel.send(embeda);
    }
}

