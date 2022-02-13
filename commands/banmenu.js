const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la permission de `Bannir des membres`, impossible pour vous de bannir des membres.")
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("je n'ai pas la permission `Bannir des membres`, je ne peut donc pas bannir des membres.")
  
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) return message.reply("veuillez mentionnez un membre à bannir.")
  
  
      if(banUser.hasPermission("BAN_MEMBERS")) return message.reply("le membre que vous avez mentionné detient la permission `Bannir des membres`")
      if(banUser.hasPermission("ADMINISTRATOR")) return message.reply("le membre que vous avez mentionné detient la permission `Administrateur`")
  
    let banmenu = new Discord.RichEmbed()
    .setColor("#2e4ab0")
    .setAuthor("Choissisez la raison du bannisement ?")
    .setDescription("`Publicité :` :link:\n`Language/Insulte` : :loudspeaker:\n`Contournement (mute/ban) :` :school_satchel:\n`Spam/DDOS/Attaque privée :` :notepad_spiral:\n`Homophobie/Racisme :` 🏳️‍🌈")
    message.channel.send(banmenu).then(m => {
        m.react('🔗').then(() => m.react('📢')).then(() => m.react('🎒')).then(() => m.react('🗒️')).then(() => m.react('🏳️‍🌈')).then(() => m.react('❌'))
        
        const filter = (reaction, user) => {
            return ['🔗', '📢', '🎒', '🗒️', "🏳️‍🌈", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        m.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '🔗') {
                    message.guild.member(banUser).ban(`Publicité - Banni par ${message.author.tag}`);
                    let banEmbed = new Discord.RichEmbed()
                    .setColor("#4c4cff")
                    .setAuthor(`${banUser.user.tag} à été banni`, banUser.user.avatarURL)
                    .setDescription(`Le membre ${banUser.user} à été banni pour : \`Publicité\``)
                    message.channel.send(banEmbed)
                    m.delete()
                }
                if (reaction.emoji.name === '📢') {
                    message.guild.member(banUser).ban(`Language - Banni par ${message.author.tag}`);
                    let banEmbed = new Discord.RichEmbed()
                    .setColor("#4c4cff")
                    .setAuthor(`${banUser.user.tag} à été banni`, banUser.user.avatarURL)
                    .setDescription(`Le membre ${banUser.user} à été banni pour : \`Language\``)
                    message.channel.send(banEmbed)
                    m.delete()

                }
                if (reaction.emoji.name === '🎒') {
                    message.guild.member(banUser).ban(`Contournement (mute/ban) - Banni par ${message.author.tag}`);
                    let banEmbed = new Discord.RichEmbed()
                    .setColor("#4c4cff")
                    .setAuthor(`${banUser.user.tag} à été banni`, banUser.user.avatarURL)
                    .setDescription(`Le membre ${banUser.user} à été banni pour : \`Contournement (mute/ban)\``)
                    message.channel.send(banEmbed)
                    m.delete()

                }
                if (reaction.emoji.name === '🗒️') {
                    message.guild.member(banUser).ban(`Spam/DDOS/Attaque privée - Banni par ${message.author.tag}`);
                    let banEmbed = new Discord.RichEmbed()
                    .setColor("#4c4cff")
                    .setAuthor(`${banUser.user.tag} à été banni`, banUser.user.avatarURL)
                    .setDescription(`Le membre ${banUser.user} à été banni pour : \`Spam/DDOS/Attaque privée\``)
                    message.channel.send(banEmbed)
                    m.delete()

                    }
                if (reaction.emoji.name === '🏳️‍🌈') {
                    message.guild.member(banUser).ban(`Homophobie/Racisme - Banni par ${message.author.tag}`);
                    let banEmbed = new Discord.RichEmbed()
                    .setColor("#4c4cff")
                    .setAuthor(`${banUser.user.tag} à été banni`, banUser.user.avatarURL)
                    .setDescription(`Le membre ${banUser.user} à été banni pour : \`Homophobie/Racisme\``)
                    message.channel.send(banEmbed)
                    m.delete()

                }
                if (reaction.emoji.name === '❌') {
                    let banNope = new Discord.RichEmbed()
                    .setColor("RED")
                    .setAuthor("Commande annulée")
                    .setDescription("L'utilisateur" + ` ${banUser.user} n'a pas été banni car vous avez annulée la commande.`)
m.edit(banNope)
message.channel.fetchMessage(m.id).then((ms) => {
    ms.clearReactions().catch();
})
                }
            })
        
            
        }) 
    
       
    }

module.exports.config = {
  name: "banmenu",
  aliases: [],
  description: "Ban with a menu the mentioned user."
}