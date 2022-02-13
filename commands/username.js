const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone : true});
const date = require('date-and-time');


module.exports.run = async (bot, message, args) => {
let mention = message.mentions.users.first() || message.author
message.guild.fetchAuditLogs({type: 'MEMBER_UPDATE', user: mention.id}).then(async (audit) => {
let log = audit.entries.filter(e => e.target.id === mention.id).map(e => e.changes[0].old + " - " + e.changes[0].new + " | " + date.format(e.createdAt,"HH:mm:ss - DD/MM/YYYY"))
console.log(log)
message.channel.send({embed:{
        color:0x00f919,
        author:{
            name:"Anciens pseudos de " + mention.username,
            icon_url:mention.displayAvatarURL
        },
        description: "``` " + log.join("\n").replace(/undefined/g,mention.username) + "\n```"
    }})
})

}
module.exports.config = {
    name: "username",
    aliases: ["un", ],
    description: "Permet de voir les anciens pseudonymes d'un utilisateur."
    }