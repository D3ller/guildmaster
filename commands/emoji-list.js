
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.guild.emojis.cache.filter(e => e).array().length > 0) {
    const emojilist = new Discord.MessageEmbed()  
        .setAuthor(`Liste des emojis (${message.guild.emojis.cache.size})`)
        .setDescription(`${message.guild.emojis.cache.filter(e => e).array().slice(0, 15)
            .map(emote => `<:${emote.identifier}> - (\`${emote.id}\`)`)
            .join('\n')}`)
        .setColor("#7289DA");

    const emo2 = await message.channel.send({
        embed: emojilist
    });

    if (message.guild.emojis.cache.filter(e => e).array().length > 15) {
        const reaction1 = await emo2.react('◀');
        const reaction2 = await emo2.react('▶');

        let firsttext = 0;
        let secondtext = 15;

        const collector = emo2.createReactionCollector((reaction, user) => user.id === message.author.id, {
            time: 60000
        });
        collector.on('collect', r => {
            const reactionadd = message.guild.emojis.cache.filter(e => e).array().slice(firsttext + 15, secondtext + 15).length;
            const reactionremove = message.guild.emojis.cache.filter(e => e).array().slice(firsttext - 15, secondtext - 15).length;

            if (r.emoji.name === '▶' && reactionadd !== 0) {
                const guildchannels = message.guild.emojis.cache.filter(e => e).array().slice(firsttext + 15, secondtext + 15)
                    .map(emote => `<:${emote.identifier}> - (\`${emote.id}\`)`);

                firsttext += 15;
                secondtext += 15;

                const newembed = new Discord.MessageEmbed()
                .setColor("#7289DA")
                .setAuthor(`Liste des emojis (${message.guild.emojis.size})`)
                .setDescription(`${guildchannels.join('\n')}`);

                emo2.edit({
                    embed: newembed
                });
            } else if (r.emoji.name === '◀' && reactionremove !== 0) {
                const guildchannels = message.guild.emojis.cache.filter(e => e).array().slice(firsttext - 15, secondtext - 15)
                    .map(emote => `<:${emote.identifier}> - (\`${emote.id}\`)`);

                firsttext -= 15;
                secondtext -= 15;

                const newembed = new Discord.MessageEmbed()
                .setAuthor(`Liste des emojis (${message.guild.emojis.size})`)
                .setColor("#7289DA")
                .setDescription(`${guildchannels.join('\n')}`);

                emo2.edit({
                    embed: newembed
                });
            }
        });
        collector.on('end', () => {
            reaction1.remove();
            reaction2.remove();
        });
    }
} else {
    return message.reply("il n'y a aucun emoji sur votre serveur.")
}

}
module.exports.config = {
    name: "emoji-list",
    aliases: [],
    description: ""
    }