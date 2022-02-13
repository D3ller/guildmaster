

const Discord = require("discord.js")
const date = require('date-and-time');
const moment = require("moment");
moment.locale('fr-FR')

module.exports.run = async (client, message, args) => {
  let channel = message.mentions.channels.first();
  if (!channel) {
    if (parseInt(args[0]) < 9223372036854775807) {
      channel = message.guild.channels.get(args[0]);
    }
    else channel = message.channel;
  }    

    if (channel.type === 'text') {
    defchan = 'Textuel';
    let textMen = new Discord.MessageEmbed()
    .setColor("4c4cff")
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .addField("Nom du salon", `<#${channel.id}>`, true)
    .addField("Identifiant", `${channel.id}`, true)
    .addField("Type de salon", `${defchan}`, true)
    .addField("Catégorie", `${channel.parent}`, true)
    .addField("Description", `${(channel.topic === null || channel.topic.length < 2) ? 'Aucune description' : channel.topic.substring(0, 30)}`, true)
    .addField("Création du salon", `${channel.createdAt.toUTCString()}`, true)
    .setFooter("Guild Master", client.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(textMen)
    }

    if (channel.type === 'voice') {
      defcha = 'Vocal';
    let voiceMen = new Discord.MessageEmbed()
    .setColor("4c4cff")
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .addField("Nom du salon", `${channel.name} (${channel.id})`, true)
    .addField("Type de salon", `${defcha} (${channel.parent})`, true)
    .addField("Création du salon", `${date.format(channel.createdAt,"HH:mm:ss - DD/MM/YYYY")} (${moment(channel.createdAt).fromNow()})`, true)
    .addField("Nombre de connectés", `Il y a ${channel.members.size}/${channel.userLimit === 0 ? '∞' : channel.userLimit} connectés`)
    .setFooter("Guild Master", client.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(voiceMen)
    }

    if (channel.type === 'category') {
      defcha = 'Catégorie';
    let voiceMen = new Discord.MessageEmbed()
    .setColor("#4c4cff")
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .addField("Nom du salon", `<#${channel.id}>`, true)
    .addField("Identifiant", `${channel.id}`, true)
    .addField("Type de salon", `${defcha}`, true)
    .addField("Création du salon", `${channel.createdAt.toUTCString()}`, true)
    .setFooter("Guild Master", client.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(voiceMen)
    }
}
module.exports.config = {
    name: "channel-info",
    aliases: ["ci", "channelinfo"],
    description: "Permet d'avoir les informations d'un salon."
    }
      