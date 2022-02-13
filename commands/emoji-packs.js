
const Discord = require("discord.js")
const ms = require("ms")
module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("vous n'avez pas la permission de `Gérer les emojis`, impossible d'ajouter des émojis.")
    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("je n'ai pas la permission `Gérer les emojis`, je ne peut donc pas ajouter des émojis.")

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    let pack = new Discord.MessageEmbed()
        .setColor("#7289DA")
.setAuthor("Pack d'emojis disponible :", message.guild.iconURL)
.setDescription("**Pepo packs:** :one: • **Anime packs:** :two: • **Blob packs:** :three:")
        .setImage("https://cdn.discordapp.com/attachments/622673848705351710/656560639682019338/New_Project_2.png")
        .setFooter("Pack inspirée de Discord-Emojis") .setTimestamp()
message.channel.send(pack).then(m => {
    m.react('1️⃣').then(() => m.react('2️⃣')).then(() => m.react('3️⃣')).then(() => m.react('❌'))
    
    const filter = (reaction, user) => {
        return ['1️⃣', "2️⃣", "3️⃣", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    m.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '1️⃣') {
                m.delete()
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/pepeOK.png", "PepoOK")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/WokePepe.png", "WokePepe")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/monkaHmm.png", "monkaHmm")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/monkaStab.png", "monkaStab")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/FeelsBanMan.png", "FeelsBanMan")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/peepoPANTIES.png", "peepoPANTIES")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/MonkaWae.png", "MonkaWae")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/festivepepe.png", "FestivePepe")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/PepeYikes.png", "PepeYikes")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/7190_linkpepehype.png", "LinkPepeHype")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/monkaS.png", "monkaS")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/PepeKMS.png", "PepeKMS")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/PepeHands.png", "PepeHands")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/MonkaChrist.png", "MonkaChrist")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/PeepoPing.png", "PepoPing")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/PepeHappy.png", "PepoHappy")

            return;
            }
            if (reaction.emoji.name === '2️⃣') {
                m.delete()
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/KannaWhat.png", "KannaWhat")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/7974_rimuru_lewd_hearteyes.png", "HeartEyes")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/LewdMegumin.png", "LewdMegumin")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/AwOo.png", "AwOo")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/02smug.png", "02Smug")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/KannaSip.png", "KannaSip")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/SataniaThumbsUp.png", "SataniaThumbsUp")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/SagiriShy.png", "SagiriShy")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/Hehe.png", "Hehe")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blush_eoto_002.png", "BlushEoto")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/tachi_smile.png", "TachiSmile")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/akkoShrug.png", "akkoShrug")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/flandre_concerned.png", "FlandreConcerned")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/7079_rimuru_slime_shocked.png", "RimunuSlime")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/MaikaSmug.png", "MaikaSmug")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/remVV.png", "remVV")
                wait(500);
            return;
            }
            if (reaction.emoji.name === '3️⃣') {
                m.delete()
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/BlobKittenKnife.png", "BlobKittenKnife")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/pusheenblob.png", "PusheenBlob")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobcorn.png", "BlobCorn")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobevil.png", "BlobEvil")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobnomcookie.png", "BlobNomCookie")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobhyperthink.png", "BlobHyperThink")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobspearpeek.png", "BlobSpearpeek")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/piingblob.png", "PiingBlob")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/BlobFearSweat.png", "BlobFearSweat")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobmuscles.png", "BlobMuscles")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobhero.png", "BlobHero")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobsaluteban.png", "BlobSaluteBan")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/1pingblob.png", "PingBlob")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobross.png", "Blobross")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/blobninja.png", "BlobNinja")
                wait(500);
                message.guild.emojis.create("https://discordemoji.com/assets/emoji/BlobRick.png", "BlockRick")
return;

            }
            if (reaction.emoji.name === '❌') {
                m.delete()
                return;

            }
        })
    
        
    }) 
    }

module.exports.config = {
name: "emoji-packs",
aliases: ["ep"],
description: "Ajouyter un pack d'emojis sur votre serveur."
}
