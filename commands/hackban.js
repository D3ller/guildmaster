const Discord = require("discord.js")

module.exports.run = (bot, message, args, discord) => {
    let autoUPerms = new Discord.MessageEmbed()
    .setColor("#F44444")
    .setDescription("Vous n'avez pas la permission de bannir un utilisateur.")
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(autoUPerms);

    let IdNoValid = new Discord.MessageEmbed()
    .setColor("#F44444")
    .setDescription("Veuillez saisir un identifiant valide pour bannir le membre.")

    let IdNoPerms = new Discord.MessageEmbed()
    .setColor("#F44444")
    .setDescription("Veuillez saisir un identifiant valide pour bannir le membre.")

    let ids = args.join(' ');

    if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(IdNoPerms);
      bot.fetchUser(mid).then(ids => {
        message.guild.ban(ids).catch(err => {
          message.channel.send("Failed to ban user "+ids)
          console.log(err)
        })
        message.channel.send(`Alright, I banned the user ${ids}.`)
      }).catch(() => {
        message.channel.send(`There's no user with the ID of ${mid}, please try again. :face_palm:`)
      })
  }
  
  module.exports.config = {
    name: "hackban",
    aliases: [],
    description: "Ban user with an identifiant."
}