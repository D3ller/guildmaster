const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if(!args[0]) {
let embed = new Discord.MessageEmbed()
.setColor("#2C2F33")
.setAuthor(`Configuration de Guild Master`, client.user.displayAvatarURL())
.addField("Autorole", `${client.autorole.get(message.guild.id) === (undefined || null) ? "Non définie" : "<@&" + client.autorole.get(message.guild.id)+">"}`)
.addField("Salon de bienvenue", `${client.joinchannel.get(message.guild.id) === (undefined || null) ? `Non définie` : "<#" + client.joinchannel.get(message.guild.id)+">"}`)
.addField("Message de bienvenue", `${client.joinmsg.get(message.guild.id) === (undefined || null) ? "Non définie" : client.joinmsg.get(message.guild.id)}`)
message.channel.send(embed)
} else {

if(args[0] === "reset") {

/*if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("vous n'avez pas la permission de `Gérer le serveur`, vous ne pouvez pas donc supprimer une configuration.")*/
if(!args[1]) return message.reply("veuillez saisir la valeur à reinitialisé dans les valeurs suivantes : `bienvenue, salon-bvn,autorole, all`.")
if(!args[1] === ("bienvenue" || "salon-bvn" || "autorole" || "all")) return message.reply("vous avez saisi un argument invalide veuillez un argument de la liste suivante : `bienvenue, salon-bvn, autorole`, all")

if(args[1] === "bienvenue") {
if(client.joinmsg.get(message.guild.id) === undefined) return message.reply("le message de bienvenue n'est deja pas définie, vous ne pouvez pas donc l'enlever.")
client.joinmsg.set(message.guild.id, undefined)
message.reply("la configuration du message de bienvenue à été remis à zéro.")
}

if(args[1] === "salon-bvn") {
if(client.joinchannel.get(message.guild.id) === undefined) return message.reply("le salon de bienvenue n'est deja pas définie, vous ne pouvez pas donc l'enlever.")
client.joinchannel.set(message.guild.id, undefined)
message.reply("la configuration du salon de bienvenue à été remis à zéro.")
}

if(args[1] === "autorole") {
if(client.autorole.get(message.guild.id) === undefined) return message.reply("l'autorole n'est deja pas définie, vous ne pouvez pas donc l'enlever.")
client.autorole.set(message.guild.id, undefined)
message.reply("la configuration de l'autorole à été remis à zéro.")
}

if(args[1] === "all") {
client.autorole.set(message.guild.id, undefined)
client.joinchannel.set(message.guild.id, undefined)
client.joinmsg.set(message.guild.id, undefined)
message.reply("la configuration entière à été remis à zéro")
}



} else {
    return message.reply("vous avez saisi un argument invalide veuillez un argument de la liste suivante : `reset`.")
}
}
}
module.exports.config = {
    name: "config",
    aliases: [],
    description: ""
    }

