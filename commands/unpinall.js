const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permission de `Gérer les messages`, impossible de désépinglée tout les messages épignlées.")
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("je n'ai pas la permission `Gérer les messages`, je ne peut donc pas désépinglée tout les messages épignlées.")

    let channel = message.channel || message.mentions.channels.first();
    let pins = await channel.fetchPinnedMessages();

    pin2 = pins.map(e => e.unpin())
    let PinEmbed = new Discord.MessageEmbed()
    .setColor("#DE2E43")
    .setAuthor(`Tout les message désépinglée`, message.author.displayAvatarURL)
    .setDescription(`Les messages épinglées ont tous été désépignlée avec succés.`)
    channel.send(PinEmbed);
    
} 
module.exports.config = {
    name: "unpinall",
    aliases: [],
    description: ""
    }
    