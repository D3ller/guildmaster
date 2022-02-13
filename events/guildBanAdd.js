const Discord = require('discord.js');

module.exports = (guilds, users) => {

const moment = require("moment");
moment.locale('fr-FR')

let now = moment()

let embed = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(`Membre banni`, users.user.displayAvatarURL)
.setDescription(`Le membre \`${users.user.tag}\` vient d'être banni de \`${users.guild.name}\` le \`${now.format("dddd DD/MM/YYYY à h:mm:ss")}\``)

let logs = users.guild.channels.find(ch => ch.name === "gm-logs")
if (!logs) return;
logs.send(embed)

  }


