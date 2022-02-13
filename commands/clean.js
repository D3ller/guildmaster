const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permission `Gérer les messages`, vous ne pouvez pas donc supprimez mes messages.")
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("je n'ai pas la permission `Gérer les messages`, je ne pourrais donc pas  supprimez mes messages.")

  message.channel.messages.fetch().then(msgs => {
    let ms = msgs.filter(m => m.author.id === bot.user.id);
    let CleanEmbed = new Discord.MessageEmbed()
    .setColor("#4c4cff")
    .setAuthor("Suppresion de mes messagess")
    .setDescription(`Mes dernier messages viennent d'etre supprimer dans ce salon.`)
    message.channel.bulkDelete(ms, true).then(() => message.channel.send(CleanEmbed))
  })}

module.exports.config = {
  name: "clean",
  aliases: [],
  description: "Clean the bot messages."
}
//✅


