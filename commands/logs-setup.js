const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let logs = message.guild.createChannel("gm-logs", "text");
    logs.createWebhook("Guild Logs", "https://cdn.discordapp.com/avatars/678197797710856193/aad01e4d289d7a6896c6249bb9636a31.png?size=2048")

}
module.exports.config = {
    name: "logs-setup",
    aliases: [],
    description: ""
    }