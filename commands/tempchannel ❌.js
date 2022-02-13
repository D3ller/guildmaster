const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {

  const name = args[0]
  if(!name) return message.reply("Veuillez indiquer le nom de votre channel.");
  const time = parseInt(args[1]);
  if(!time) return message.reply("Veuillez indiquer le temps ! (en secondes)");
  
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send(":x: Oops, je n'ai pas la permission de gérer les salons.") 

  message.guild.channels.create(name, { type: "text", permissionOverwrites: [{ id: message.guild.id, deny: ["VIEW_CHANNEL"] }, { id: message.author.id, allow: ["VIEW_CHANNEL", "SEND_MESSAGES"] }] }).then(channel => {
    channel.send(`${message.author}, votre salon <#${channel.id}> va être actif pendant **${time}** avec succés <:yes:589888802777202708>`)
  
  setTimeout(() => {
      if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return channel.send(":x: Oops, il semblerait que j'ai perdu la permission de gérer les salons entre temps. Je ne peux donc pas supprimer ce salon.")
      channel.delete()
    }, ms(time));
  }) 
}

exports.config = {
  name: "tempchannel",
  aliases: [],
  description: "Create temporary channel."
}