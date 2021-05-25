module.exports={
    name:'leave',
    description:'lelép lol',
    async execute(message, args){
        message.channel.bulkDelete(1);
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Legyél benne egy hancsevegésben, hogy lelépjek  ಠ_ಠ');
        await voiceChannel.leave();
        await message.reply('Akkó csácsumi csőtétta :woozy_face:')
    }
}