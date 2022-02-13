const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (client, message, args) => {

/*if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permission `Gérer les messages`, vous ne pouvez pas donc saisir un message de bienvenue.")*/
if(args.join(" ") === client.joinmsg.set(message.guild.id)) return message.reply("veuillez saisir un message de bienvenue qui n'esrt pas le mem que vous avez deja saisie.")
client.joinmsg.set(message.guild.id, args.join(" "))
message.reply("<:true:665902521209978881> Le message de bienvenue à été appliquée avec succés\n" + " ```js" + args.join(" ") + "```")
message.reply(client.joinmsg.get(message.guild.id, args.join(" "))
)
}
module.exports.config = {
    name: "join-msg",
    aliases: [],
    description: ""
    }