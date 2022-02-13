const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let autoUPerms = new Discord.MessageEmbed()
  .setColor("#F44444")
  .setDescription("Vous n'êtes pas autorisé à démutée ce membre dans ce salon <:false:665902521302384660>.")
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(autoUPerms);

  let autoUPerms2 = new Discord.MessageEmbed()
  .setColor("#F44444")
  .setDescription("Vous n'êtes pas autorisé à démutée ce membre dans ce salon <:false:665902521302384660>.")
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(autoUPerms2);

  let channel = message.mentions.channels.first();
  if (!channel) {
    if (parseInt(args[0]) < 9223372036854775807) {
      channel = message.guild.channels.get(args[0]);
    }
    else channel = message.channel;
  }    


  let MuteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

  let NoUser = new Discord.MessageEmbed()
  .setColor("#F44444")
  .setDescription("Veuillez inclure une mention d'un membre.")
  if(!MuteUser) return message.channel.send(NoUser).then(msg => {
    msg.delete(10000)
  })


channel.overwritePermissions(MuteUser, {
  ADD_REACTION: true,
  SEND_MESSAGES: true
})

var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

let embed = new Discord.MessageEmbed()
.setColor("#4c4cff")
.setAuthor(`${MuteUser.user.tag} à été unmute`, MuteUser.user.avatarURL)
.setDescription(`Le membre ${MuteUser} à été démutée dans ${channel} le **${dformat}**`)
message.channel.send(embed)

}
module.exports.config = {
  name: "channelunmute",
  aliases: [],
  description: "Permet de démute un utilisateur dans un salon."
}
