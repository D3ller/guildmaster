const Discord = require("discord.js");
const date = require('date-and-time');

module.exports = async (client, role) => {

    const moment = require("moment");
moment.locale('fr-FR')

let now = moment()

    let embed = new Discord.MessageEmbed()
    .setColor("#ff3639")
    .setAuthor(`Suppresion d'un rôle`)
    .setDescription(`Le rôle **${role.name}** (${role.id}) vient d'être supprimée le \`${now.format("dddd DD/MM/YYYY à h:mm:ss")}\``)

    const fetchedLogs = await role.guild.fetchAuditLogs({
        type: 'ROLE_DELETE',
    });

    const banLog = fetchedLogs.entries.first();
    const { executor, target } = banLog;
    console.log(executor.id)

    let logs = role.guild.channels.cache.find(ch => ch.name === "gm-logs")
    if (!logs) return;
    logs.send(embed)
     };