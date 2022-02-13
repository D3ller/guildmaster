const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return;
    voiceChannel.leave();
}
module.exports.config = {
    name: "stop",
    aliases: [],
    description: ""
    }