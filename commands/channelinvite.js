const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!message.guild.me.hasPermission("CREATE_INSTANT_INVITE")) return message.reply("je n'ai pas la permission `Crée des invitations`, je ne peut donc pas crée d'invitation pour ce salon.")

    let invite = await message.channel.createInvite({
                    
      })

      let embed = new Discord.RichEmbed()
      .setColor("#2e4ab0")
      .setAuthor(`Invitation vers ${message.guild.name}`, message.guild.iconURL)
      .setDescription("**Invitation:** " + `https://discord.gg/` + invite.code)
      message.channel.send(embed);
  
    }
module.exports.config = {
    name: "channelinvite",
    aliases: [],
    description: "Permet d'avoir l'invitation d'un salon"
    }