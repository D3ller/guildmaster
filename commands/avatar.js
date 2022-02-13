const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let mentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
let embed = new Discord.MessageEmbed()
.setColor("#263a7a")
.setAuthor(`Avatar de ${mentioned.user.username}`, mentioned.user.displayAvatarURL)
.setDescription(`[Format .PNG](${mentioned.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })}) - [Format .JPG](${mentioned.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })}) - [Format .WEBP](${mentioned.user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })})`)
.setImage(mentioned.user.avatarURL({ dynamic: true, size: 1024 }))
message.channel.send(embed)

}

exports.config = {
    name: "avatar",
    aliases: ["pp"],
    description: "Envoie votre photo de profil",
    usage: "g.avatar [@moi]"
}
//✅