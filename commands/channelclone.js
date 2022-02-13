const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez la permission de `Gérer des salons`, vous ne pouvez donc pas cloner ce salon.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas cloner ce salon.")

    let channel = message.mentions.channels.first();
    if(!channel) return message.reply("veuillez mentionner un salon à cloner (valide)")

channel.clone()
.then(clone => {
    let chanEmbed = new Discord.RichEmbed()
    .setColor("#4c4cff")
    .setAuthor("Clonage du salon")
    .setDescription(`Le salon ${channel} à été clonée en ${clone}`)
    message.channel.send(chanEmbed) 
})

}
module.exports.config = {
    name: "channelclone",
    aliases: [],
    description: "Permet de cloner un salon"
    }