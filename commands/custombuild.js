const Discord = require("discord.js")
module.exports.run = (bot, message, args, discord) => {

let embed = new Discord.RichEmbed()
.setAuthor("Que voulez-vous créer ?")
.setDescription("📄 : Textuel\n 🔉 : Vocal\n 🧱 : Catégorie\n 🧩 : Rôles")


message.channel.send(embed).then(m => {
m.react('📄').then(() => m.react('🔉')).then(() => m.react('🧱')).then(() => m.react('🧩')).then(() => m.react('❌'))

const filter = (reaction, user) => {
	return ['📄', '🔉', '🧱', '🧩', "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
};

m.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '📄') {
            message.guild.createChannel(`${name}`, "text")
            
        }
        if (reaction.emoji.name === '🔉') {
            message.guild.createChannel(`${name}`, "voice")
        }
        if (reaction.emoji.name === '🧱') {
            message.guild.createChannel(`${name}`, "category")
        }
        if (reaction.emoji.name === '🧩') {
            message.guild.createRole({
                name: `${name}`,
                color: 'BLUE',
              })
            }
        if (reaction.emoji.name === '❌') {
            message.channel.send("Vous avez terminé la création de votre serveur")
        }
    })

    
}) 
}
module.exports.config = {
    name: "cbs",
    aliases: [],
    description: "Build a custom server."
  }