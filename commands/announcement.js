const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible pour vous de faire une annonce.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas faire une annonce.")
  
    let channel = message.mentions.channels.first();
    if(!channel) return message.reply("veuillez mentionner un salon dans lequel vous voulez faire l'annonce.")
    let msg = args.join(" ").slice(22)
    if(!msg) return message.reply("veuillez saisir un message à saisir dans votre annonce.")
    if(msg.length > 1052) return message.reply("veuillez saisir un message contenant entre 1 et 1052 caractères.")

    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Annonce de " + message.author.username, message.author.displayAvatarURL)
    .setDescription(msg)
    channel.send(embed)
}
module.exports.config = {
    name: "announcement",
    aliases: ["announce"],
    description: "Envoyer un message de type annonce dans un salon spécial",
    usage: "g.announcement #salon <msg>"
    }
//✅