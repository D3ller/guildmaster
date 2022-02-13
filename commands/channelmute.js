const Discord = require("discord.js");
const date = require('date-and-time');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez la permission de `Gérer des salons`, vous ne pouvez donc pas mute un membre dans ce salon.")
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("vous n'avez la permission de `Gérer les rôles`, vous ne pouvez donc pas mute un membre dans ce salon.")
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, vous ne pouvez pas donc pas mute un membre.")
  if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("je n'ai pas la permission `Gérer les rôles`, vous ne pouvez pas donc pas mute un membre.")

  let channel = message.mentions.channels.first();
  if (!channel) {
    if (parseInt(args[0]) < 9223372036854775807) {
      channel = message.guild.channels.get(args[0]);
    }
    else channel = message.channel;
  }    


  let MuteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!MuteUser) return message.reply("veuillez mentionner utilisateur à mute dans ce salon.")

  if(MuteUser.hasPermission("ADMINISTRATOR")) return message.reply("le membre que vous avez mentionnez ne peut etre mute dans ce salon car il a la permision `ADMINISTRATEUR`")

channel.overwritePermissions(MuteUser, {
  ADD_REACTION: false,
  SEND_MESSAGES: false
})

var d = new Date

let embed = new Discord.RichEmbed()
.setColor("#4c4cff")
.setAuthor(`${MuteUser.user.tag} à été mute`, MuteUser.user.avatarURL)
.setDescription(`Le membre ${MuteUser} à été mute dans ${channel} ${date.format(d,"Le DD/MM/YYYY à HH:mm")}`)
message.channel.send(embed)

}
module.exports.config = {
  name: "channelmute",
  aliases: [],
  description: "Permet de mute un utilisateur seulement dans un seul salon."
}
