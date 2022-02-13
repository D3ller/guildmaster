const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const hex = Math.random().toString(16).slice(2, 8).toUpperCase().slice(-6)
    
    let color = !args[0] ? hex : args[0]; 
    let text = color.startsWith("#") ? "Couleur: " : "Couleur: #"
    let bcolor = color.startsWith("#") ? color.slice(1) : color
    
    const embed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(text + color)
      .setImage(`https://www.colorbook.io/imagecreator.php?hex=${bcolor}&width=250&height=100`)
    message.channel.send(embed)
}
module.exports.config = {
    name: "color",
    aliases: [],
    description: ""
    }