const Discord = require("discord.js");
var createFile = require('create-file');

module.exports.run = async (bot, message, args) => {
 
    createFile(`/backups/${message.author.id}-${message.guild.id}.json`, '{}', function (err) {
    });
}
module.exports.config = {
    name: "backup-create",
    aliases: [],
    description: ""
    }