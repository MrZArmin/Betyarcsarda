const Discord = require('discord.js')


module.exports = {
    name:'info',
    description:'Aktuális információ a botról',
    execute(message, args){
		message.channel.bulkDelete(1)
		let szerver = message.guild.name
		let tulaj = message.guild.owner
        const embed = new Discord.MessageEmbed()
        .setColor('#00cc00')
		.setTitle('Kukubot információ')
		.addField('Fejlesztő', 'Zrinszki Ármin')
		.addField('-------------------------------------------------------', '\u200B')
	    .addFields(
			{ name: 'Használt nyelv', value: 'Javascript' },
			{ name: 'Discord modul', value: 'Discord.js', inline: true },
			{ name: 'Javascript runtime', value: 'Node.js', inline: true },
		)
		.addFields(
			{ name: '-------------------------------------------------------' , value: '\u200B' },
			{ name:	'Jelenlegi szervere', value: szerver, inline: true},
			{ name:'Szerver tulajdonosa', value: tulaj, inline: true}
		)
		
	    .setTimestamp()
	    .setFooter('Kukubot egy isten!!!');

        message.channel.send(embed);
    }
}

 