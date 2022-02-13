const Discord = require("discord.js");
const date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

let channel = message.channel; 

let nopermsbot = new Discord.MessageEmbed()
.setColor("#E04C47")
.setDescription("<:false:665902521302384660> Désolé, je n'ai la permission de gérer les salons.")
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(nopermsbot)

let autoUPerms = new Discord.MessageEmbed()
.setColor("#F44444")
.setDescription("Vous n'avez la permission d'executer cette commande.")
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(autoUPerms);

let dejaLock = new Discord.MessageEmbed()
.setColor("#F44444")
.setDescription("Le salon que vous essayé de bloquer est deja bloquée.")

let roles = message.guild.roles;
let everyones = roles.find('name', '@everyone')

if(channel.name.startsWith("🔒-")) return message.channel.send(dejaLock)

channel.overwritePermissions(
    everyones,
    { 'SEND_MESSAGES': false },
)

channel.setName(`🔒-${channel.name}`)


var d = new Date

let lockembed = new Discord.MessageEmbed()
.setColor("#4c4cff")
.setAuthor(`Le salon à été fermé`, message.guild.iconURL)
.setDescription(`Le salon ${channel} à été fermée par ${message.author} le **${date.format(d,"HH:mm:ss - DD/MM/YYYY")}**`)
message.channel.send(lockembed)

let lockLogs = new Discord.MessageEmbed()
.setColor("#ff3232")
.setAuthor(`Salon fermé`, message.guild.iconURL)
.addField("Modérateur", message.author)
.addField("Salon", channel)
.addField("Date", date.format(d,"HH:mm:ss - DD/MM/YYYY"))
.setTimestamp()

let logs = message.guild.channels.find("name", "gm-logs");
if (!logs) return;
logs.send(lockLogs)

}
module.exports.config = {
    name: "lock",
    aliases: [],
    description: "Lock a channels for stop chatting."
    }