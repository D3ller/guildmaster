const Discord = require('discord.js');

module.exports = (client, guild, message) => {
    let embed = new Discord.MessageEmbed()
    .setAuthor("Nouveaux serveur", guild.iconURL)
    .setDescription(`**Nom du serveur:** ${guild.name}\n **ID:** ${guild.id}\n **Membres:** ${guild.memberCount} (dont  ${guild.members.filter(member => !member.user.bot).size} membre(s) & ${guild.members.filter(member => member.user.bot).size} robot(s) )`)
    client.channels.get(`653130352130523146`).send(embed)

    let embed2 = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setAuthor("Merci d'avoir ajouté Guild Master", "https://cdn.discordapp.com/avatars/622840228687642644/e7cf106f8cd42429466bf967388f371d.png?size=2048")
    .setDescription(":star2: **Votre serveur est actuellement complétement en train de gérer vos rôles, vos salons et votre serveur !**\n Si vous avez besoin d'aide la commande `g.help` est actuellement disponible, si vous ne trouvez ce que vous voulez vous pouvez rejoindre notre [serveur support](https://discord.gg/H7xTdWN).\n :label: Pour que Guild Master puissent gérer de bonne manière votre serveur veuillez mettre le rôle **`Guild Master`** au-dessus de tous les rôles.")
    guild.owner.send(embed2)

    client.user.setActivity(`J'ai rejoins ${guild.name} | ${guild.memberCount}`, { type: 'WATCHING' });

  }


