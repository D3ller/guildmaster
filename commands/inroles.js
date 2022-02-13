const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let role = message.mentions.roles.first() || message.member.highestRole
    if (!role) return message.channel.send("oof")
  
      let members = role.members.map(m => m.user.tag).map((m, i) => `${i + 1}. ${m}`).slice(100)
    message.channel.send(members)
}
module.exports.config = {
    name: "inrole",
    aliases: [],
    description: ""
    }