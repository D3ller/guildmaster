
const Discord = require('discord.js')

module.exports.run = (client, message) => {

    	const args = message.content.split(" ").slice(1);
        
        let coding = args.join(' ')
        
        try {
            let Admin = ['320480620633391104','234234723314958339','555429540613062656']
            if (!Admin.includes(message.author.id)) return message.channel.send('<:564426883718971393:586997102819934209> Nope, tu n\'est pas **STAFF** !');

            if (message.content.includes('token')) return;

            const code = args.join(" ");
            let evaled = eval(code); 
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            let embed = new Discord.MessageEmbed()
            .setColor('#867E88')
            .setTitle('Eval')
            .addField(':inbox_tray: ❱ **Input**', '```js\n' + coding + '```')
            .addField(':outbox_tray: ❱ **Output**', '```js\n' + evaled + '```')
            .setFooter("© 2019 WolfGang", client.user.displayAvatarURL)
            message.channel.send(embed)
            
        } catch (err) { 
            let embed = new Discord.MessageEmbed()
            .setColor('#867E88')
            .setTitle('Eval')
            .addField(':inbox_tray: ❱ **Input**', '```js\n' + coding + '```')
            .addField(':outbox_tray: ❱ **Output**', `\`\`\`js\n${err}\n\`\`\``)
            .setFooter("© 2019 WolfGang", client.user.displayAvatarURL)
            message.channel.send(embed)
        }
}

module.exports.config = {
name: "eval",
aliases: [],
description: "Eval commands."
}