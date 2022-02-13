const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible de changer la catégorie de votre salon.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas changer la catégorie de votre salon.")

    let channel = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.id === args[0])
    if(!channel) return message.reply("veuillez mentionner un salon auquel vous voulez changer sa catégorie.")
    if(channel.type === "category") return message.reply("vous ne pouvez pas déplacer une catégorie.")

    let category = message.mentions.channels.last() || message.guild.channels.cache.find(channel => channel.id === args[1])
    if(!category) return message.reply("veuillez mettre l'id d'une catégorie ou vous voulez mettre votre salon.")
    if(category.type === "voice") return message.reply("vous devez mettre l'identifiant d'une catégorie ou vous voulez déplacer votre salon.")
    if(category.type === "text") return message.reply("vous devez mettre l'identifiant d'une catégorie ou vous voulez déplacer votre salon.")

    if(channel.parent.id === category.id) return message.reply("vous ne pouvez pas déplacer un salon dans une catégorie ou il est deja.")
    channel.setParent(category.id)
}
module.exports.config = {
    name: "channel-parents",
    aliases: [],
    description: ""
    }