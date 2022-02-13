const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone : true});

module.exports.run = (client, message, args) => {

  if(args[0]) {
    let command = args[0];
    if(client.commands.has(command)) {
        command = client.commands.get(command);
        var help = new Discord.MessageEmbed()
        .setColor("#2e4ab0")
        .setAuthor("Guild Master's Documentation", client.user.avatarURL)
        .setDescription(`**Commande :** \`${command.config.name}\`\n **Description** \`${command.config.description || "Pas de description"}\`\n**Utilisation:** \`${command.config.usage}\`\n**Aliases :** \`${command.config.aliases || "No aliases."}\``)
message.channel.send(help)
    }
}

if (!args[0]) {

  const embed = new Discord.MessageEmbed() 
  .setColor("#2e4ab0")
  .setAuthor("Guild Master's Documentation", client.user.avatarURL)
  .setDescription(`Utiliser la commande \`g.help <command>\` pour avoir des informations .\n **Sens :** <> : Obligatoire | [] Optionel | () Information`)
  .addField("> Gestion de salon (17)", "`channel-bitrate`,`channel-name`,`channel-nsfw`,`channel-parents`,`channel-sync`,`channeladd`,`channelclone`,`channelinfo`,`channelinvite`,`channelmute`,`channelremove`,`channeltopic`")
  .addField("> Gestion d'emojis (7)", "`clearreaction`, `emoji-list`, `emoji-packs`, `emojiadd`, `emojiinfo`, `emojiremove`, `iemoji`")
  .addField("> Gestion de membres (2)", "`member-info`,`rename`")
  .addField("> Gestion de messages (4)", "`pin`,`unpin`,`see-pin`,`unpinall`")
  message.channel.send(embed)
 }

 if (args[0] == "mp") {

  const embed = new Discord.MessageEmbed() 
  .setColor("#2e4ab0")
  .setAuthor("Guild Master's Documentation", client.user.avatarURL)
  .setDescription(`Utiliser la commande \`g.help <command>\` pour avoir des informations .\n **Sens :** <> : Obligatoire | [] Optionel | () Information`)
  .addField("> Gestion de salon (17)", "`channel-bitrate`,`channel-name`,`channel-nsfw`,`channel-parents`,`channel-sync`,`channeladd`,`channelclone`,`channelinfo`,`channelinvite`,`channelmute`,`channelremove`,`channeltopic`")
  .addField("> Gestion d'emojis (7)", "`clearreaction`, `emoji-list`, `emoji-packs`, `emojiadd`, `emojiinfo`, `emojiremove`, `iemoji`")
  .addField("> Gestion de membres (2)", "`member-info`,`rename`")
  .addField("> Gestion de messages (4)", "`pin`,`unpin`,`see-pin`,`unpinall`")
  message.channel.send(embed)

    let checkmp = new Discord.MessageEmbed()
    .setColor("#4c4cff")
    .setDescription(`Le menu d'aide vous à été envoyé en message privée :white_check_mark: `)
    message.channel.send(checkmp).then(msg => msg.delete(5000));
 }
}

module.exports.config = {
  name: "help",
  aliases: [],
  noalias: "No aliases",
  description: ""
}
