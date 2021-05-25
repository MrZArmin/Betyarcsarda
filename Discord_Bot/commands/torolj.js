module.exports = {
    name:'torolj',
    description:'Töröl annyi üzenetet, amennyit a parancs mögé írsz!',
    execute(message, args){
        message.channel.bulkDelete(1)
        if (!args[1]) return message.reply('HIBAA! Add meg, hogy hány üzenetet töröljek')
    
        message.channel.bulkDelete(args[1]); 
    }
}
