
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let emote = args[0]
    if (!emote) return message.reply('veuillez saisir un emoji pour lequel vous voulez avoir l\'image.')

    let emoteName = emote.split(":")[2]
    if(!emoteName) return message.reply('veuillez saisir un emoji valide.')

    let emote2 = emoteName.split(">")[0]

    let emojiEmbed = new Discord.MessageEmbed()
    .setColor("#4c4cff")
    .setAuthor("Image de votre emoji")
    .setDescription(`[\`Lien vers l'emoji\`](https://cdn.discordapp.com/emojis/${emote2}.png?v=1)`)
    .setImage(`https://cdn.discordapp.com/emojis/${emote2}.png?size=512`)
    message.channel.send(emojiEmbed)
    
}
module.exports.config = {
    name: "iemoji",
    aliases: [],
    description: ""
    }

    