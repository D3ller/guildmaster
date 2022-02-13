const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("vous n'avez pas la permission de `Gérer les emojis`, impossible de changer le nom d'un emoji.")
    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("je n'ai pas la permission `Gérer les emojis`, je ne peut donc pas changer le nom d'un emoji.")

    let emote = args[0]
    if (!emote) return message.reply('veuillez saisir un emoji à supprimer.')

    let emoteName = emote.split(":")[2]
    if(!emoteName) return message.reply('veuillez saisir un emoji valide à supprimer.')

    let emote2 = emoteName.split(">")[0]
    const emoji = message.guild.emojis.cache.find(e => e.id === emote2)
    if(!emoji) return message.reply("veuillez saisir un emoji de votre serveur supprimer.")

    let name = args[1]
    if(!name) return message.reply("veuillez saisir un nouveau nom pour votre emoji")
    if(name.length > 32) return message.reply("veuillez saisir un nouveau contenant entre 1 et 32 caractère.")
    if(name.length < 1) return message.reply("veuillez saisir un nouveau contenant entre 1 et 32 caractère.")
    if(/[!@#$%^&*(),.?":{}|<>]/.test(name)) return message.reply("veuillez saisir un nom ne contenant pas caractère spéciaux.")
    if(emoji.name === name) return message.reply("veuillez saisir un nom qui n'ait pas le meme que l'ancien.")

    let emotes = emoji.setName(name)
    message.reply(`l'emoji est passée du nom \`${emoji.name} => ${name.replace(/\s/g, '')}\` avec succés.`)
}
module.exports.config = {
    name: "emoji-name",
    aliases: [],
    description: ""
    }