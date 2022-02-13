const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.attachments.size > 0) {
        if(message.attachments.size > 1 ) return message.eply("veuillez saisir une seul image à saisir comme icone.")
        var Attachment = (message.attachments).array();
        Attachment.forEach(function(attachment) {
            if(!attachment.url.endsWith(".png" || ".jpg" || ".jpeg" || ".gif")) return message.reply("veuillez saisir une image ayant l'extension `.png`,`.jpg`,`.gif`.")
            message.guild.setIcon(attachment.url)
        })}

}
module.exports.config = {
    name: "seticon",
    aliases: ["sic"],
    description: ""
    }