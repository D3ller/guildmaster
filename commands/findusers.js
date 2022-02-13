const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let users = bot.users;

    let searchTerm = args.join(" ")

    let NoTerms = new Discord.MessageEmbed()
    .setColor("#F44444")
    .setDescription("Veuillez saisir un termes à pour rechercher un utilisateur.")

    if(!searchTerm) return message.channel.send(NoTerms);
    
    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let embed = new Discord.MessageEmbed()
    .setColor("#4c4cff")
    .setAuthor(`Utilisateur contenant \"${searchTerm}\"`, message.author.avatarURL)
    .setDescription(matches.map(u => u.tag).join("\n"))
    message.channel.send(embed)

    message.delete();
}

module.exports.config = {
  name: "findusers",
  aliases: [],
  description: "Permet de détecter les utilisateur dans plusieurs serveurs différents."
}