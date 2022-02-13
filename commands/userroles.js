const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    const member = message.guild.member(user);
    let usercolor = "#34eb67"

    const roleTxt = member.roles.sort((a, b) => b.position - a.position)
    .map(r => `${r}`)
    .filter(n => n !== '@everyone')
    .join(", " || "Vous n'avez pas de rôle !")

let embed = new Discord.MessageEmbed()
.setAuthor(`Rôle(s) de ${member.user.username}`, member.user.displayAvatarURL)
.setColor(`${roleTxt ? usercolor : "#eb4034"}`)
.setDescription(`${roleTxt || "Vous n'avez pas de roles !"}`)
message.channel.send(embed)
}
module.exports.config = {
    name: "userroles",
    aliases: [],
    description: "Change the color of the role."
    }