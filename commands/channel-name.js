const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible de changer le nom de ce salon.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas changer le nom de ce salon.")

    let channel = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.id === args[0])
    if(!channel) return message.reply("veuillez mentionner un salon auquel vous voulez changer le nom.")

    if(channel === message.mentions.channels.first()) {
        name = args.join(" ").slice(22)
        if(!name) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
        if(name.length > 100) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
        if(name.length < 1) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
    
        channel.setName(name)
        message.reply("le salon" + " `" + channel.name + "` à changée de nom en " + "`" + name.replace(/\s/g, '-') + "`")
        } else {
            name2 = args.join(" ").slice(18)
            if(!name2) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
            if(name2.length > 100) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
            if(name2.length < 1) return message.reply("veuillez saisir un nom pour votre channel entre 1 et 100 caractère.")
        
            channel.setName(name2)
            message.reply("le salon" + " `" + channel.name + "` à changée de nom en " + "`" + name2.replace(/\s/g, '-') + "`")
        }

}
module.exports.config = {
    name: "channel-name",
    aliases: [],
    description: ""
    }