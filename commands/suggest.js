const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const mentionHook = new Discord.WebhookClient("680049231997960217", "9is8HkpbxpQO6O0KtDZzfdWCnixJbSP-j09AYkRfgvc_lzYy_NSSCQqDz3QTqdY3RoM5");

    let desc = args.join(" ")
    let rembed = new Discord.MessageEmbed()
    .setColor("#F44444")
    .setDescription("Veuillez insérer une suggestion.")

    if(!desc) return message.channel.send(rembed)

    let embed = new Discord.MessageEmbed()
    .setColor("#FFFF33")
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .addField("Suggestion", `${desc}`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
    mentionHook.send(embed)
}
module.exports.config = {
    name: "suggest",
    aliases: [],
    description: "Suggest ideas for Guild Master."
    }
