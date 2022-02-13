const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("vous n'avez pas la permission de `Gérer les emojis`, impossible de supprimer un emoji.")
    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("je n'ai pas la permission `Gérer les emojis`, je ne peut donc pas supprimer un emoji.")


    let emote = args[0]
    if (!emote || !emote[1]) return message.reply('veuillez saisir un emoji à supprimer.')

    let emoteName = emote.split(":")[2]
    if(!emoteName) return message.reply('veuillez saisir un emoji valide à supprimer.')

    let emote2 = emoteName.split(">")[0]
    const emoji = message.guild.emojis.cache.find(e => e.id === emote2)
    if(!emoji) return message.reply("veuillez saisir un emoji de votre serveur supprimer.")
    message.guild.emojis.resolve(emoji).delete().then(emoji => {
        let emojiEmbed = new Discord.MessageEmbed()   
        .ssetColor("#4c4cff")
        .ssetAuthor(`Suppresion d'emoji`, message.guild.iconURL)
        .ssetDescription(`L'emoji à été supprimée avec succés.`)
        mmessage.channel.send(emojiEmbed)    
    });
};
  
    

    

module.exports.config = {
name: "emojiremove",
aliases: ["er"],
description: "Supprimer un emojis sur votre serveur."
}
    