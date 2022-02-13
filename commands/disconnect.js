const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez pas la permission de `Gérer les salons`, impossible de déconnecter un utilisateur.")
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas déconnecter un utilisateur.")
if(!message.member.hasPermission("MOVE_MEMBERS")) return message.reply("vous n'avez pas la permission de `Déplacer des membres`, impossible de déconnecter un utilisateur.")
if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.reply("je n'ai pas la permission `Déplacer des membres`, je ne peut donc pas déconnecter un utilisateur.")


let user = message.mentions.users.first() || message.guild.users.cache.find(channel => channel.id === args[0])
if(!user) return message.reply("veuillez mentionner l'utilisateur que vous voulez déconnecter.")

const member = message.guild.member(user);

let voices = await message.guild.channels.create(`😄 ${member.user.username} ! Déconnectée`, { type: 'voice' });
await member.voice.setChannel(voices.id)
await voices.delete()
message.reply(`l'utilisateur **${member.user.username}** à été déconnecté avec succés !`)

}
module.exports.config = {
    name: "disconnect",
    aliases: [],
    description: ""
    }