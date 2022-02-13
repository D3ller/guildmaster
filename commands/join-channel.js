const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (client, message, args) => {

let channel = message.mentions.channels.first();
if(!cahnnel) return;
client.joinchannel.set(message.guild.id, channel.id)
message.reply("<:true:665902521209978881> Le salon de bienvenue à été appliquée avec succés\n" + " ```js" + channel.name + "```")
}
module.exports.config = {
    name: "join-channel",
    aliases: [],
    description: ""
    }