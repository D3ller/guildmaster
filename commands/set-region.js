const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("vous n'avez pas la permission de `Gérer le serveur`, impossible pour vous de changer la région du serveur.")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("je n'ai pas la permission `Bannir des membres`, je ne peut donc pas changer la région du serveur.")
      
        let banmenu = new Discord.MessageEmbed()
        .setColor("#893efa")
        .setAuthor("Choisissez une régions disponibles ?")
        .setDescription("Brésil :flag_br:\nEurope :flag_eu:\nSingapore :flag_sg:\nEtats-Unis Centrale :flag_us:\nSydney :flag_au:\nHongkong :flag_hk:\nRussie :flag_ru:\nAfrique du Sud :flag_za:")
        message.channel.send(banmenu).then(m => {
            m.react('🇧🇷').then(() => m.react('🇪🇺')).then(() => m.react('🇸🇬')).then(() => m.react('🇺🇸')).then(() => m.react('🇦🇺')).then(() => m.react('🇭🇰')).then(() => m.react('🇷🇺')).then(() => m.react('🇿🇦')).then(() => m.react('❌'))
        
            const filter = (reaction, user) => {
                return ['🇧🇷', '🇪🇺', '🇸🇬', '🇺🇸', "🇦🇺", "🇭🇰", "🇷🇺", "🇿🇦", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            m.awaitReactions(filter, { max: 1, time: 100000})
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '🇧🇷') {
                        if(message.guild.region === "brazil") return message.reply("la région de votre serveur est déjà la `région brézilienne`")
                        message.guild.setRegion('brazil')
                        m.delete()
                        message.reply("la région du serveur vient changer en `région brézilienne`")
                    }
                    if (reaction.emoji.name === '🇪🇺') {
                        if(message.guild.region === "eu-central") return message.reply("la région de votre serveur est déjà la `région européene`")
                        message.guild.setRegion('eu-central')
                        m.delete()
                        message.reply("la région du serveur vient changer en `région européene`")
                    }
                    if (reaction.emoji.name === '🇸🇬') {
                        if(message.guild.region === "singapore") return message.reply("la région de votre serveur est déjà la `région singapour`")
                        message.guild.setRegion('singapore')
                        m.delete()
                        message.reply("la région du serveur vient changer en `région singapour`")
                    }
                    if (reaction.emoji.name === '🇺🇸') {
                        if(message.guild.region === "us-central") return message.reply("la région de votre serveur est déjà la `région américaine`")
                        message.guild.setRegion("us-central")
                        m.delete()
                        message.reply("la région du serveur vient changer en `région américaine`")
                        }
                    if (reaction.emoji.name === '🇦🇺') {
                        if(message.guild.region === "sydney") return message.reply("la région de votre serveur est déjà la `région autralienne`")
                        message.guild.setRegion("sydney")
                        m.delete()
                        message.reply("la région du serveur vient changer en `région australienne`")
                    }
                    if (reaction.emoji.name === '🇭🇰') {
                        if(message.guild.region === "hongkong") return message.reply("la région de votre serveur est déjà la `région chinoise`")
                        message.guild.setRegion("hongkong")
                        m.delete()
                        message.reply("la région du serveur vient changer en `région chinoise`")
                    }
                    if (reaction.emoji.name === '🇷🇺') {
                        if(message.guild.region === "russia") return message.reply("la région de votre serveur est déjà la `région russe`")
                        message.guild.setRegion("russia")
                        m.delete()
                        message.reply("la région du serveur vient changer en `région russe`")
                    }
                    if (reaction.emoji.name === '🇿🇦') {
                        if(message.guild.region === "southafrica") return message.reply("la région de votre serveur est déjà la `région africaine`")
                        message.guild.setRegion("southafrica")
                        m.delete()
                        message.reply("la région du serveur vient changer en `région africaine`")
                    }
                    if (reaction.emoji.name === '❌') {
                        let banNope = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor("Commande annulée")
                        .setDescription("Vous n'avez pas choisi de région à changer, la commande à donc été annulée.")
    m.edit(banNope)
    message.channel.fetchMessage(m.id).then((ms) => {
        ms.clearReactions().catch();
    })
}             
                })
            }) 
           
        }
        module.exports.config = {
            name: "set-region",
            aliases: ["sr"],
            description: ""
            }