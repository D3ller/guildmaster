const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var messageArray = message.content.split(" ");
    var time;
    var gagnant;
        gagnant = Number(messageArray[1]);      
        if(!gagnant) return message.reply("Vous devez définir le nombre de gagnant !")
     if(isNaN(gagnant)) return message.reply("Vous devez définir le nombre de gagnant !")
        time = Number(messageArray[2]);
        if(!time) return message.reply("Vous devez définir la durée du giveaway en heure(s) !")
        if(isNaN(time)) return message.reply("Vous devez définir la durée du giveaway en heure(s) !")

    let item = message.content.split(" " + gagnant + " " + time + " ").slice(1);
            if(!item) return message.reply("Vous devez définir la récompense !");

            let msg = ""
            let member = message.author
            var embedgiveaway = new Discord.MessageEmbed()
            .setColor("00F919")
            .setTitle(":tada: GIVEAWAY :tada: ") 
            .setDescription(`Réagissez avec :tada: pour participer\n${item}`)
            .addField("Fin du Giveaway dans : ", `**${time}** heures`, true)
            .setFooter(`${gagnant} Gagnants`)
            .setTimestamp()
            message.channel.send(embedgiveaway).then(message => {
                message.react("🎉").then(r => r.remove(bot.user))
                msg = message
                console.log(message.createdAt.getHours())
            })
            setTimeout(() => {
                message.reactions.clear(bot.user)
            }, 1000);

            setTimeout(function() {
                msg.reactions.forEach(r=>r.remove(bot.user));
                var peopleReacted = msg.reactions.get("🎉").users.array();
                var winners = msg.reactions.get("🎉").users.size;
                var inodex = Math.floor(Math.random() * peopleReacted.length);
              
                var ggg = [];
                var gggmessage = "";  
                for (var i = 0; i < gagnant; i++){
                    ggg.push(peopleReacted[inodex]);
                    inodex = Math.floor(Math.random() * peopleReacted.length);
                }
                for (var i = 0; i < ggg.length; i++){
                    if (ggg[i].id === bot.user.id){
                    ggg.slice(i, 1);
                    continue;
                }
                gggmessage += (ggg[i].toString() + " ");
             }
                var haveHas = "a";
                var Win = "Nouveau gagnant"
                if (ggg.length == 1){
                    haveHas = " tu viens de gagner : ";
                var Win = "Nouveau gagnant";
                }else{
                    haveHas = " vous venez de gagner : ";
                    var Win = "Nouveaux gagnants";
                }
                let gigg = ggg
                
                if(winners === 1) return message.reply("seulement une personne à participé")
                if(gagnant > winners) {
                    message.reply("Malheureusement, pas assez de personnes n'ont pu être sélectionnées,\nVous avez demandé `" + gagnant + "` gagnants mais vous n'avez eu que `" + winners + "` participants")
                    return;
                }
if(peopleReacted.bot === true) {
    peopleReacted.bot.remove();
}

                console.log(winners)
                var embed = new Discord.MessageEmbed()
                .setTitle(":tada: **GIVEAWAY TERMINÉ** :tada:")
                .setDescription("Bravo " + gigg  + haveHas + " " + `${item}`)
                message.channel.send(embed)
            }, time * 60000);
            message.delete()
    }

    module.exports.config = {
        name: "ga",
        aliases: [],
        description: ""
        }