const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible de changer le bitrate de ce salon.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas changer le bitrate de ce salon.")

    let id = args[0]
    if(!id) return message.reply("veuillez saisir l'identifiant d'un salon vocazl auquel vous voulez changer le bitrate.")
    if (/[a-zA-Z]/.test(id)) return message.reply("veuillez saisir l'identifiant d'un salon valide.")
    if(id.length > 18) return message.reply("veuillez saisir un identifiant contenant 18 caractères")
    if(id.length < 18) return message.reply("veuillez saisir un identifiant contenant 18 caractères")

    let voiceChannel = message.guild.channels.cache.find(channel => channel.id === args[0])
    if(!voiceChannel) return message.reply("veuillez un saisir un identifiant d'un salon vocal.")
    if(voiceChannel.type === "text") return message.reply("veuillez saisir l'identifiant d'un salon vocal, car vous avez saisie l'identifiant d'un salon textuel.")
    if(voiceChannel.type === "category") return message.reply("veuillez saisir l'identifiant d'un salon vocal, car vous avez saisie l'identifiant d'une catégorie.")

    let bit = args[1]
    if(!bit) return message.reply("veuillez saisir un nombre du niveau de bitrate entre 8-96.")
    if (/[a-zA-Z]/.test(bit)) return message.reply("veuillez saisir un nombre de bitrade ne contenant pas de lettre.")
    if(bit > 96) return message.reply("veuillez saisir un nombre du niveau de bitrate entre 8-96.")
    if(bit < 8) return message.reply("veuillez saisir un nombre du niveau de bitrate entre 8-96.")

    voiceChannel.setBitrate(bit)
    message.reply(`le salon\`${voiceChannel.name}\` à changer de bitrate en \`${bit}\`kbs`)
}
module.exports.config = {
    name: "channel-bitrate",
    aliases: ["cb"],
    description: ""
    }
//✅