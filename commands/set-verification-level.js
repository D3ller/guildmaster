const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.guild.setVerificationLevel(2)
console.log(message.guild.verificationLevel)
}
module.exports.config = {
    name: "set-verification-level",
    aliases: ["set-vl", "svl"],
    description: ""
    }