const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("vous n'avez la permission de `Gérer des roles`, vous ne pouvez donc pas copier les permission d'un rôle à un autre.")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("je n'ai pas la permission `Gérer des roles`, je ne peut donc pas copier les permission d'un rôle à un autre.")

    let roles1 = message.mentions.roles.first() || message.guild.roles.find(role => role.id === args[0])
    if(!roles1) return message.reply("veuillez saisir un rôle pour lequelle vous voulez copiez les permissions.")
    if(!message.member.hasPermission(roles1.permissions)) return message.reply("vous n'avez pas les permissions du rôle pour lequelle vous voulez copier les permissions.")
    console.log(roles1.permissions.bitfield)


    let roles2 = message.mentions.roles.last()
    if(!roles2) return message.reply("veuillez saisir un rôle pour lequelle vous voulez collez les permissions.")
    if(!message.member.hasPermission(roles2.permissions)) return message.reply("vous n'avez pas les permissions du rôle pour lequelle vous voulez coller les permissions.")

    if(roles1.permissions.bitfield === roles2.permissions.bitfield) return message.reply("les rôles que vous avez mentionné on complétement les mêmes permissions, je ne vait donc rien copier.")

    roles2.edit({
            permissions: [roles1.permissions],
            hoist: roles1.hoist,
        })

        const perms = new Discord.Permissions(roles1.permissions.bitfield);
        message.reply(`le rôle \`${roles2.name}\` à maintemant les permissions de \`${roles1.name}\``)
        message.channel.send(perms.toArray(), { code: 'js' })

}
module.exports.config = {
    name: "copyperms",
    aliases: [],
    description: ""
    }
    //✅