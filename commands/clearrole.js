const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  /*  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("vous n'avez pas la permission de `Gérer les rôles`, impossible d'enlever tout les rôles d'un membre.")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("je n'ai pas la permission `Gérer les rôles`, je ne peut donc pas enlever tout les rôles d'un membre.")*/

    let how = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!how) return message.reply("veuillez mentionner un membre auquel vous voulez supprimer tout les rôles.")
    if(how.user.bot === true) return message.reply("vous ne pouvez pas enlever les rôles des bots car ils ont un rôle spécial que l'on peut pas enlever")
    let number = how.roles.size-1
    if(number === 0) return message.reply("ce membre n'a que le rôle `@everyone` vous ne pouvez donc lui enlever aucun rôle")
    if(how.roles.highest.position >= message.guild.me.roles.highest) return message.reply("le membre que avez mentionner à son plus haut rôle à une position supérieur ou égale à mon plus haut rôle.")

    console.log(how.roles.size)
    how.roles.remove(how.roles);
    message.reply(`les ${number} rôles de ${how.user} ont été enlevée avec succés.`)

}
module.exports.config = {
    name: "clearrole",
    aliases: [],
    description: "Change the color of the role."
    }