
var imgur = require('imgur');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    if (message.attachments.size > 0) {
        var Attachment = (message.attachments).array();
        Attachment.forEach(function(attachment) {
            console.log(attachment.url);

            wait(500)

            imgur.uploadUrl(attachment.url)
            .then(function (json) {
                console.log(json.data.link);
                wait(500)
                let embed = new Discord.MessageEmbed()
                .setAuthor("Imgur: The magic of the Internet")
                .setColor("#1CB76D")
                .setImage(json.data.link)
                message.channel.send(embed)
            })

          })
    } else {
message.reply("veuillez saisir des images à envoyer sur Imgur pour avoir leur liens.")
    }
}
module.exports.config = {
    name: "upload",
    aliases: [],
    description: ""
    }