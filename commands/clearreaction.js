const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("vous n'avez pas la permission de `Gérer les emojis`, impossible de supprimer toutes les réaction d'un messages.")
    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("je n'ai pas la permission `Gérer les emojis`, je ne peut donc pas supprimer toutes les réaction d'un messages.")

    var id = args[0];
    if (!id) return message.reply("veuillez insérer un identifiant d'un message")
    if(id.length > 18) return message.reply("veuillez saisir un identifiant valide.")
    if(id.length < 18) return message.reply("veuillez saisir un identifiant valide.")

message.channel.messages.fetch(id).then((m) => {
if(m.reactions.cache.size <= 0) return message.reply("le message que vous avez cité n'a aucune réaction, je ne peut donc rien supprimer.")
m.reactions.removeAll().catch(error => message.reply("une erreur est survenue lors de clear les emojis."));
if(m.reactions.size === 1) {
    mes = "à"
} else {
    mes = "ont"
}
message.reply(`\`${m.reactions.cache.size} réaction(s)\` ${mes} été supprimée de votre message !`)

}).catch(() => {
    message.reply("l'identifiant du message que vous avez cité n'est pas existant");
})

}
module.exports.config = {
    name: "clearreaction",
    aliases: [],
    description: ""
    }