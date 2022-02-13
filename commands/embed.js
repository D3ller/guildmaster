const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let salons = message.channel;
const hex = Math.random().toString(16).slice(2, 8).toUpperCase().slice(-6)

const saymsg = args.join(" ")
if(!saymsg) return message.reply("veuillez saisir un message que vous voulez mettre dans un embed.")

let sayembed = new Discord.MessageEmbed()
.setColor(hex)
.setAuthor(message.author.tag)
.setDescription(saymsg)
salons.send(sayembed)

}
module.exports.config = {
    name: "embed",
    aliases: [],
    description: ""
    }