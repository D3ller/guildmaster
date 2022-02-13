const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone : true});

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

module.exports.run = async (bot, message, args) => { 

  let buildUPerms = new Discord.MessageEmbed()
  .setColor("#F44444")
  .setDescription("Vous n'avez pas la permission `ADMINISTRATOR`, vous ne pouvez pas utiliser cette commande.")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(buildUPerms)


let VerifiedEmbed = new Discord.MessageEmbed()
.setColor("#7CFC00")
.setAuthor("Vérification avant suppression du serveur", message.author.displayAvatarURL)
.setDescription("**Sécurité :** Voulez-vous vraiment supprimer tous les rôles, emojis et salons ? Nous ne sommes pas responsables de toute destruction abusive.")

let AnnulEmbed = new Discord.MessageEmbed()
.setColor("#DC143C")
.setAuthor("Commmande annulée", message.author.displayAvatarURL)
.setDescription(`La commande à été annulée`)

let ChooseEmbed = new Discord.MessageEmbed()
.setColor("#2e4ab0")
.setAuthor("Choisissez le type de serveur :", message.guild.iconURL)
.setDescription("**Publicitaire 🔗 ➞** [`Exemple`](https://i.imgur.com/KYOunDR.png)\n ")
message.channel.send(ChooseEmbed).then(msg => { 

  msg.react('🔗');

  const filter = (reaction, user) => {
    return ['🔗'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
  .then(async (collected) => {
      const reaction = collected.first();
  
      if (reaction.emoji.name === '🔗') {

        message.channel.send(VerifiedEmbed).then(msggg => { 
          msggg.react('✅').then(() => msggg.react('❌'));
          
          const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
          };
          
          msggg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(async (collected) => {
              const reaction = collected.first();
          
              if (reaction.emoji.name === '✅') {
                message.guild.channels.deleteAll();
                wait(5000)
                message.guild.roles.map(r => r.delete());
                wait(1000)
                message.guild.setName(`Serveur de ${message.author.username}`)
                wait(1000)
                message.guild.setIcon(message.author.displayAvatarURL)
                wait(1000)
                let cat = await message.guild.createChannel("🌴 Accueil - Serveur de" + message.author.username, "category");

                let chan = await message.guild.createChannel("【🛫】aèroport", "text");
                chan.setParent(cat.id)

                let chan2 = await message.guild.createChannel("【📰】règlement", "text");
                chan2.setParent(cat.id)

                let chan25 = await message.guild.createChannel("【🥂】concours", "text");
                chan25.setParent(cat.id)

                let cat2 = await message.guild.createChannel("🌐 Global - Serveur de" + message.author.username, "category");

                let chan3 =  await message.guild.createChannel("【💬】discussions", "text"); 
                chan3.setParent(cat2.id)

                let chan4 =  await message.guild.createChannel("【♻】partages", "text"); 
                chan4.setParent(cat2.id)

                let chan5 =  await message.guild.createChannel("【🔩】commande-robot", "text"); 
                chan5.setParent(cat2.id)

                let chan6 =  await message.guild.createChannel("【💡】vos-idées", "text"); 
                chan6.setParent(cat2.id)

                let cat3 = await message.guild.createChannel("🔗 Espace publicitaire - Serveur de", "category"); 

                let chan7 = await message.guild.createChannel("【🏟】serveur-publicitaire", "text"); 
                chan7.setParent(cat3.id)

                let chan8 =  await message.guild.createChannel("【📞】communautaire", "text"); 
                chan8.setParent(cat3.id)

                let chan9 =  await message.guild.createChannel("【📶】réseaux-sociaux", "text"); 
                chan9.setParent(cat3.id)

                let chan10 = await message.guild.createChannel("【💫】autre-projets", "text"); 
                chan10.setParent(cat3.id)

                let member1 = await message.guild.createRole({
                  name: '🧢 ・ Membres',
                  color: 'BLUE',
                  mentionable: false,
                  hoist: true,
                  permissions:["SEND_MESSAGES"]
                })



                
                let FinishEmbed = new Discord.MessageEmbed()
                .setColor("#7CFC00")
                .setDescription(`${message.author}, your server **GAMING** just finished successfully ✅`)
                bot.channels.get(chan3.id).send(FinishEmbed).then(r => console.log("Send"))

                } else {
                msggg.delete()
                message.channel.send(AnnulEmbed)
                return;
              }
            })
            .catch(collected => {
              return;
            });
        msg.delete()
      }
    )}})
    .catch(collected => {
      return;
    });
})

                }
    module.exports.config = {
        name: "buildserver",
        aliases: [],
        description: "Permet de construire un serveur entier automatique."
        }