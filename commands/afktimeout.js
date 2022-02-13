const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez la permission `Gérer le salon` vous ne pouvez pas donc changer le Timeout du salon AFK")

if(message.guild.afkChannel === null) return message.reply("il n'y a pas de salon AFK défini pour en définir un veuillez executée la commande `g.afk-channel`")
if(/[a-zA-Z]/.test(args.join(" "))) return message.reply("veuillez saisir un nombre et non pas des lettres.")
if(args.join(" ") > 60) return message.reply("veuillez saisir un des nombres suivants : `1`m,`5`m,`15`m,`30`m,`60`m")
if(args.join(" ") < 1) return message.reply("veuillez saisir un des nombres suivants : `1`m,`5`m,`15`m,`30`m,`60`m")

if(!args[0] === ("1" || "5" || "15" || "30")) return message.reply("vous avez saisi un argument invalide veuillez un argument de la liste suivante : `bienvenue, salon-bvn, autorole`, all")
message.guild.setAFKTimeout(args.join(" "))
message.reply(`le salon AFK \`${message.guild.afkChannel.name}\` à changer de timeout en \`${args.join(" ")}min\``)

}
module.exports.config = {
    name: "afk-timeout",
    aliases: ["afk-to","ato"],
    description: "Changer le temps du timeout vers le salon AFK",
    usage: "g.afk-timeout <1 | 5 | 15 | 30 | 60>"
    }