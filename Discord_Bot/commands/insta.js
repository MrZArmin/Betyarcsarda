const Discord = require('discord.js')

module.exports = {
    name:'insta',
    description:'Breakmemebattery instája',
    execute(message, args){
        const embeda = new Discord.MessageEmbed()
            .addField('Legjobb instagramoldal valaha', "https://www.instagram.com/breakmemebattery/?hl=hu")
            .setColor('#00cc00')


        message.channel.bulkDelete(1)
        message.channel.send(embeda)
   

    }
}