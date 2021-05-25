module.exports = {
    name:"avatar",
    description: "A megemlített személy profilképe",
    execute(message, args){
        message.channel.bulkDelete(1);
        if (!args[1]) return message.channel.send(message.author.displayAvatarURL());
        megemlített = message.mentions.users.first();
        message.channel.send(megemlített.displayAvatarURL());
        
    }
}
