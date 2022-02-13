const Discord = require("discord.js");
const time = 1;
module.exports.run = async (bot, message, args) => {

    const role = message.guild.roles.find(g => g.name === args.join(" ")) || message.mentions.roles.first();
    if(!role) return message.channel.send();
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("euh")
    const list = []
    message.guild.members.filter(g => !g.roles.has(role.id) && g.user.bot === false).map(g => list.push(g.id));
    if(list === null || list.length === 0) return message.channel.send("off");
    let timer = list.length * time
    timer2 = timer/60
    message.channel.send(`Le rôle <@&${role.id}> va être ajouté **à** \`${message.guild.memberCount-message.guild.members.filter(member => member.user.bot).size}\` **membre(s)** **Temps d'attente (environ) :** \`${Math.round(timer2)}\`min `)
    return setInterval(function () {
        const member = message.guild.members.get(list[0]);
        if(!member) return;
        member.addRole(role.id).catch(e => {});
        list.shift();
        if(list === 0) clearInterval();
    }, time * 1000)
}
module.exports.config = {
    name: "massaddrole",
    aliases: [],
    description: ""
    }