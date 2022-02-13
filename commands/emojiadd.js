const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("vous n'avez pas la permission de `Gérer les emojis`, impossible d'ajouter un émoji.")
    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("je n'ai pas la permission `Gérer les emojis`, je ne peut donc pas ajouter un émoji.")

    var str = args[0]
    if(!str) return mmessage.reply("veuillez saisir un lien pour votre emoji.")

    var name = args[1]
    if(!name) return message.reply("veuillez saisir un nom pour votre emoji.")

    const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg|gif)/gi;
    if (!linkCheck.test(str)) return message.reply("veuillez saisir un lien valide.");

    message.guild.emojis.create(str, name).then(emoji => {
        let emojiEmbed = new Discord.MessageEmbed()          
        .setColor("#4c4cff")
        .setAuthor(`Création d'emoji`, str)
        .setDescription(`L'emoji **${emoji.name}** à été crée avec succés.`)
        message.channel.send(emojiEmbed)
    })

    }

module.exports.config = {
name: "emojiadd",
aliases: [],
description: "Ajouter un emoji sur votre serveur."
}
