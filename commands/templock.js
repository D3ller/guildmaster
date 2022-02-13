const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let channelNoMention = new Discord.MessageEmbed()
  .setColor("#F44444")
  .setDescription(`Veuillez inclure une mention d'un channel.`)

  let channelNoPerms = new Discord.MessageEmbed()
  .setColor("#f4a544")
  .setDescription(`Vous n'avez pas la permission de verrouiller la discussion dans ce channel.`)

  let channelNoTime = new Discord.MessageEmbed()
  .setColor("#f4a544")
  .setDescription(`Vous n'avez pas spécifier le temps pour verrouillé le channel.`)

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(channelNoPerms);

  let tolocks = message.mentions.channels.first();
  if(!tolocks) return message.channel.send(channelNoMention);

  let locktime = args[1];
  if(!locktime) return message.channel.send(channelNoTime);

  let roles = message.guild.roles;
  let everyones = roles.find('name', '@everyone')

  tolocks.overwritePermissions(
    everyones,
    { 'SEND_MESSAGES': false },
)


let templock1 = new Discord.MessageEmbed()
.setColor("4c4cff")
.setAuthor(`Salon ${tolocks.name} verrouillé`, message.guild.iconURL)
.setDescription(`Le channel ${tolocks} vient d'être verrouillé pendant **${locktime}**`)
tolocks.send(templock1);

  setTimeout(function(){
    tolocks.overwritePermissions(
        everyones,
        { 'SEND_MESSAGES': true },
    )

    var date = new Date();
    var jour = date.getDay();
    var mois = date.getMonth() + 1 ;
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();

let embed = new Discord.MessageEmbed()
.setColor("#f5ad42")
.setAuthor(`Salon ${tolocks.name} déverrouillé`, message.guild.iconURL)
.setDescription(`Le channel ${tolocks} vient d'être déverouillé le **${jour}/${mois}** à **${heure}h:${minutes}min:${secondes}s**`);
tolocks.send(embed)

  }, ms(locktime));

}

module.exports.config = {
  name: "templock",
  aliases: [],
  description: "Lock temporarily a channel."
}

