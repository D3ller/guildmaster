const Discord = require("discord.js")
const date = require('date-and-time');
const moment = require("moment");
moment.locale('fr-FR')

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    let presence = member.presence;
    let status = presence.status;
    let bots;
    let owner;
    let ust;
  
    if (status === 'offline') {
        ust = '<:offline:672700476902342666>';
    } else if (status === 'online') {
        ust = '<:online:672700476919119882>';
    } else if (status === 'idle') {
        ust = '<:idle:672700477112320040>';
    } else if (status === 'dnd') {
        ust = '<:dnd:672700476881633281>';
    } else {       ust = 'Une erreur est survenue';
    if (member.presence.game !== null && member.presence.game.streaming === true) ust = '<:stream:672700476835233803>';
     } 
       if(member.user.bot === false) {
          bots = "Non"
       } else {
          bots = "Oui"
       }

        if(member.id !== "320480620633391104") {
           owner = "Non"
        } else {
           owner = "Oui"
        }
    
        let uiInfo = new Discord.MessageEmbed()
        .setColor(member.roles.highest.hexColor)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
        .setDescription(`${member.user} ${ust}`)
        .addField("๐ค Vos informations", `๐๏ธ **Pseudonyme:** \`${member.user.username}\`\n๐ **Identifiant:** \`${member.user.id}\`\n๐ฎ **Joue ร :** \`${member.user.presence.game ? `${member.user.presence.game.name}` : "Aucun jeux"}\`\n๐ค **Robot :** \`${bots}\`\nโ **Crรฉation du compte:** \`${date.format(member.user.createdAt,"HH:mm:ss - DD/MM/YYYY")} (${moment(member.user.createdAt).fromNow()})\``)
        .addField("๐ Autre information", `๐ผ **Avatar:** [ \`Lien\`](${member.user.avatarURL({ format: 'png', size: 2048 })})\n๐ฅ **Serveur en commun:** \`${client.guilds.cache.filter(g => g.members.cache.has(member.user.id)).size}\`\n๐ **Premium:** \`${owner}\``)
        .setTimestamp(member.createdAt);
      message.channel.send(uiInfo)
   }

exports.config = {
  name: "userinfo",
  aliases: ["ui", "uinfo"],
  description: "Gets the information an user."
}