const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("vous n'avez pas la permission d'activer l'autorôle");
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("je n'ai pas la permission `Gérer les roles`, je ne pourrais donc pas ajouter un role lorsqu'un membre rejoindra.")

let roless = message.mentions.roles.first()
if(!roless) return message.reply("veuillez mentionner à mettre comme autorole.")
if(roless.position > message.guild.me.roles.highest.position) return message.reply("le rôle que vous avez mentionnez est un rôle supérieur au mien je ne pourrait donc pas l'ajouter au nouveau arrivants.")
if(roless.managed) return message.reply("vous ne pouvez pas mettre ce role en tant qu'auto-role car il est gérer automatiquement par discord.")

let YesRole = new Discord.MessageEmbed()
.setColor("#36393F")
.setAuthor(`${roless.name} est votre autorole`, message.guild.iconURL)
.setDescription(`Le rôle <@&${roless.id}> à été défini comme rôle assigné au nouveaux arrivants.`)
message.channel.send(YesRole)

client.autorole.set(message.guild.id, roless.id)
}
module.exports.config = {
    name: "autorole",
    aliases: ["joinrole","join-role"],
    description: "Ajoute un rôle lorsqu'un utilisateur rejoins votre serveur",
    usage: "g.autorole @role"
    }
//✅