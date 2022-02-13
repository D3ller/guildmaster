const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.guild.setSplash('./splash.png')

}
module.exports.config = {
    name: "",
    aliases: [],
    description: ""
    }
