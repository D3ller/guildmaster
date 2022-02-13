const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permission de `Gérer les messages`, impossible de désépinglée un message.")
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("je n'ai pas la permission `Gérer les messages`, je ne peut donc pas désépinglée un message.")

let channel = message.mentions.channels.first();
if(!channel) return message.reply("veuillez mentionnez un salon dans lequel vous voulez désépinglée le message.")
var id = args.join(" ").slice(22)
if(!id) return message.reply("veuillez saisir l'identifiant du message que vous voulez désépinglée.")

channel.fetchMessage(id).then((m) => {
    m.unpin().then(() => {
        let PinEmbed = new Discord.MessageEmbed()
        .setColor("#DE2E43")
        .setAuthor(`Message désépinglée`, message.author.displayAvatarURL)
        .setDescription(`Le message que vous avez cité à été désépinglée avec succés.`)
        channel.send(PinEmbed);
    });
}).catch(() => {
    message.reply("le message que vous avez essayé de désépinglée est soit inexistant ou vous avez mentionné le mauvais salon");
})
}
module.exports.config = {
    name: "unpin",
    aliases: [],
    description: "Pin a message on a guild."
    }