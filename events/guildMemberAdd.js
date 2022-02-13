const Discord = require("discord.js");
const date = require('date-and-time');

module.exports = async (client, member) => {

    let embed = new Discord.MessageEmbed()
    .setColor("#9dfab5")
    .setAuthor(`Membre arrivée`, member.user.displayAvatarURL())
    .setDescription(`Le membre \`${member.user.username}\` vient d'arriver le \`${date.format(member.joinedAt,"HH:mm:ss - DD/MM/YYYY")}\``)

    if(client.autorole.get(member.guild.id)) {
        let newRole = member.guild.roles.cache.find(role => role.id === client.autorole.get(member.guild.id))
        if(!newRole) return;
        if(member.roles.has(client.autorole.get(member.guild.id))) return;
        member.addRole(client.autorole.get(member.guild.id))
    }
    if(client.joinmsg.get(member.guild.id)) {
        let wow = member.guild.channels.cache.find(ch => ch.id === client.joinchannel.get(member.guild.id))
        if(!wow) return;
        let msg = client.joinmsg.get(member.guild.id).replace("{member}", member.user)
        let msg2 = msg.replace("{username}", member.user.username)
        let msg3 = msg2.replace("{tag}", member.user.tag)
        let msg4 = msg3.replace("{gname}", member.guild.name)
        let msg5 = msg4.replace("{gcount}", member.guild.memberCount)
        let msg6 = msg5.replace("{discrim}", member.user.discrim)
        let msg7 = msg6.replace("\n", /\s+/g)

        wow.send(msg7)
    }
    let logs = member.guild.channels.cache.find(ch => ch.name === "gm-logs")
    if (!logs) return;
    logs.send(embed)
    
     };