const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("vous n'avez pas la permission de `Gérer le serveur`, impossible pour vous de changer le salon de message système.")
    if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.reply("je n'ai pas la permission `Gérer le serveur`, je ne peut donc pas changer le salon de message système.")

let channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.id === args[0])
if(!channel) return message.reply("veuillez saisir un salon ou les messages systèmes seront envoyées.")

if(channel.type === "voice") return message.reply("veuillez saisir mentionner un salon textuel et non un salon vocal.")
if(channel.type === "category") return message.reply("veuillez saisir mentionner un salon textuel et non une catégorie.")

if(message.guild.systemChannelID === channel.id) return message.reply("veuillez saisir un salon qui n'est pas déjà le salon système.")
message.guild.setSystemChannel(channel.id)
message.reply(`le salon \`${channel.name}\` à été mis en tant que \`salon de message système\`.`)
}
module.exports.config = {
    name: "set-systemsg",
    aliases: ["set-smsg","smsg"],
    description: ""
    }