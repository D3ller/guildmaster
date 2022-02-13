const Discord = require("discord.js");
const date = require('date-and-time');

module.exports = async (client, role) => {

    let embed = new Discord.MessageEmbed()
    .setColor("#46ff36")
    .setAuthor(`Création d'un rôle`)
    .setDescription(`Le rôle \`${role.name} (${role.id})\` vient d'être crée le \`${date.format(role.createdAt,"dddd DD/MM/YYYY à h:mm:ss")}\``)

    /*let logs = role.guild.channels.find(ch => ch.name === "gm-logs")
    if (!logs) return;
    logs.send(embed)*/
     };