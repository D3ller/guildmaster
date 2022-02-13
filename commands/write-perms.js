const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let channel = message.mentions.channels.first() || message.channel;
let mr = message.mentions.users.first() || message.mentions.roles.first()
console.log(channel.name + " " + mr.username)
if(mr === message.mentions.users.first()) {
    mr2 = "membre"
} else {
    mr2 = "role"
}
message.reply(`voulez que le ${mr2} (${mr}) ai la permission \`Crée une invitation\` dans le salon \`${channel.name}\` ? (Réaction :white_check_mark: = Oui || :x: = Non)`).then(m => {
    m.react('✅').then(() => m.react('❌'))
    
    const filter = (reaction, user) => {
        return ['✅',"❌"].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    m.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {
                create_invites = true
                m.clearReactions()
                channel.overwritePermissions(mr, {
                    CREATE_INSTANT_INVITE: create_invites,
                  });
                  m.edit(`Le ${mr2} ${mr} aura la permission \`Crée une invitation\` dans le salon \`${channel.name}\``)
                  
            }

            if (reaction.emoji.name === '❌') {
                create_invites = false
                m.clearReactions()
                channel.overwritePermissions(mr, {
                    CREATE_INSTANT_INVITE: create_invites,
                  });
                  m.edit(`Le ${mr2} ${mr} n'aura pas la permission \`Crée une invitation\` dans le salon \`${channel.name}\``)
            }
        })   
    }) 
    message.reply(`voulez que le ${mr2} (${mr}) ai la permission \`Gérer le salon\` dans le salon \`${channel.name}\` ? (Réaction :white_check_mark: = Oui || :x: = Non)`)


}
module.exports.config = {
    name: "write-perms",
    aliases: [],
    description: ""
    }