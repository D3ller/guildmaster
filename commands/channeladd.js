const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("vous n'avez la permission de `Gérer des salons`, vous ne pouvez donc pas créer de salon.")
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("je n'ai pas la permission `Gérer les salons`, je ne peut donc pas créer un salon.")

  let choice = args.join(" ")
  if(!choice) return message.reply("veuillez saisir le nom du salon à créer.")

  if(choise.length > 99) return message.reply("veuillez saisir les nom d'un salon entre 1 et 99 caractère.")

  let choosechan = new Discord.RichEmbed()
  .setColor("#2e4ab0")
  .setAuthor("Quel type de chaîne voulez-vous créer ?", message.author.displayAvatarURL)
  .setDescription("📄 **Textuel\n 🔊 Vocal\n 🚩 Catégorie\n :x: Annulé**")

  message.channel.send(choosechan).then(msg => {
  msg.react('📄').then(() => msg.react('🔊')).then(() => msg.react('🚩')).then(() => msg.react('❌'));

  const filter = (reaction, user) => {
    return ['📄', '🔊', '🚩', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
  };

  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(async (collected) => {
      const reaction = collected.first();

		if (reaction.emoji.name === '📄') {
      let textes = await message.guild.createChannel(choice, "text");
      let textEmbed = new Discord.RichEmbed()
      .setColor("#4c4cff")
      .setAuthor(`Création d'un salon`, message.author.displayAvatarURL)
      .setDescription(`Le salon textuel ${textes} à été crée avec succés`)
      message.channel.send(textEmbed)
    }
    if (reaction.emoji.name === '🔊') {
      let voices = await message.guild.createChannel(choice, "voice");
      let voiceEmbed = new Discord.RichEmbed()
      .setColor("#4c4cff")
      .setAuthor(`Création d'un salon vocal`)
      .setDescription(`Le salon vocal ${voices} à été crée avec succés`)
      message.channel.send(voiceEmbed)
    }
    if (reaction.emoji.name === '🚩') {
      let categorys = await message.guild.createChannel(choice, "category");
      let categoryEmbed = new Discord.RichEmbed()
      .setColor("#4c4cff")
      .setAuthor(`Création d'une catégorie`)
      .setDescription(`Le salon catégorie ${categorys} à été crée avec succés`)
      message.channel.send(categoryEmbed)
    }
    if(reaction.emoji.name === "❌") {
      let Embed = new Discord.RichEmbed()
      .setColor("#F44444")
      .setDescription(`La commande vient d'etre annulée`)
      message.channel.send(Embed)
    }
	})
	.catch(collected => {
    return;
	});
})
}
module.exports.config = {
    name: "channeladd",
    aliases: [],
    description: "Permet de crée un salon vocal, textuel ou une catégorie."   
    }
