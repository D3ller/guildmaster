const Discord = require('discord.js');

module.exports = (message, member, ) => {
    if(member.author.bot) return;

    let logs = member.guild.channels.cache.find(ch => ch.name === "gm-logs")
    if (!logs) return;

    let DeleteEmbed = new Discord.MessageEmbed()
    .setColor("#ff3232")
    .setAuthor(`${member.author.tag}`, member.author.displayAvatarURL)
    .setDescription(`Un message à été supprimé par \`${member.author.username} (${member.author.id})\` dans \`${member.channel.name} (${member.channel.id})\`\n \`\`\`${member.content}\`\`\``)
    logs.send(DeleteEmbed)
};