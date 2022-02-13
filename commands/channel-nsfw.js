const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible de changer le salon en nsfw.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas changer le salon en nsfw.")

    let channel = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.id === args[0])
    if(!channel) return message.reply("veuillez mentionner un salon à transormer en salon nsfw.")

    if(!args[0]) return message.reply("veuillez mentionner un salon valide pour transformer le salon en nsfw.")
    if(channel.type === "category") return message.reply("veuillez mentionner un salon textuel, car vous avez mentionner une catégorie.")
    if(channel.type === "voice") return message.reply("veuillez mentionner un salon textuel, car vous avez mentionner un salon vocal.")

    if(channel.nsfw === true) {
        return message.reply("le salon que vous avez mentionné est deja un salon nsfw.")
      } else {
        channel.setNSFW(true)
        message.reply(`Le salon \`${channel.name}\` à été trnasformer en salon **nsfw**.`)
    }

}
module.exports.config = {
    name: "channel-nsfw",
    aliases: [],
    description: ""
    }