const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("vous n'avez pas la permission de `Gérer le serveur`, impossible pour vous de changer le nom du serveur.")
    if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.reply("je n'ai pas la permission `Gérer le serveur`, je ne peut donc pas changer le nom du serveur.")

    let name = args.join(" ")
    if(!name) return message.reply("veuillez saisir un nom pour votre serveur.")
    if(name.length > 100) return message.reply("veuillez saisir un nom contenant entre 2 et 100 caractères.")
    if(name.length < 2) return message.reply("veuillez saisir un nom contenant entre 2 et 100 caractères.")
    if(name === message.guild.name) return message.reply("veuillez saisir un nom qui n'est pas le meme que le nom actuel.")

    message.guild.setName(name)
    message.reply("le nom de votre serveur est maintenant " + "`" + name + "`")
}
module.exports.config = {
    name: "setname",
    aliases: ["sn"],
    description: ""
    }
