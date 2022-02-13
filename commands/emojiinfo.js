
  const Discord = require("discord.js")
  const moment = require("moment");
  moment.locale('fr-FR')

  module.exports.run = async (client, message, args) => {

      let emote = args[0]
      if (!emote || !emote[1]) return message.reply('veuillez saisir un emoji pour avoir ces informations.')

      let emoteName = emote.split(":")[2]
      if(!emoteName) return message.reply('veuillez saisir un emoji valide pour avoir ces informations.')

      let emote2 = emoteName.split(">")[0]
      const emoji = message.guild.emojis.cache.find(e => e.id === emote2)
      if(!emoji) return message.reply("veuillez saisir un emoji de votre serveur pour avoir ces informations.")

      let author = await emoji.fetchAuthor()
if(!author) {
  author = "Auteur inconnue"
}

if(emoji.animated === true) {
    anime = "Oui"
} else {
  anime = "Non"
}

let GRAND = emoji.name.toUpperCase();

   let embed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setThumbnail(emoji.url)
      .setAuthor(`${GRAND} (${emoji.identifier})`)
      .setDescription(`**Nom de l\'emoji:** \`${emoji.name}\` <:${emoji.identifier}>\n**Animée ?** \`${anime}\`\n**Identifiant:** \`${emoji.id}\`\n**Auteur:** \`${author.tag}\`\n**Date de création:** \`${moment(emoji.createdAt).fromNow()}\``)
      message.channel.send(embed)

        
}
module.exports.config = {
    name: "emojiinfo",
    aliases: ["ei"],
    description: ""
    }
    