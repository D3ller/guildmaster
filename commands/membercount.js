const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**Total de membre:** ${message.guild.memberCount}`)
    .addField("Humains", message.guild.members.filter(member => !member.user.bot).size)
    .addField(`Robots`,  `${message.guild.members.filter(member => member.user.bot).size}`)
    message.channel.send(embed)
}
module.exports.config = {
    name: "membercount",
    aliases: ["mc"],
    description: ""
    }