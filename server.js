const Discord = require("discord.js");
const fs = require("fs");
const express = require("express");
const app = express();
const client = new Discord.Client({ disableEveryone: true });
const Enmap = require("enmap");

client.commands = new Discord.Collection();
client.event = new Discord.Collection();
client.aliases = new Discord.Collection();
client.description = new Discord.Collection();

client.autorole = new Enmap({
  name: "autorole",
  autoFetch: true,
  fetchAll: false
});

client.joinmsg = new Enmap({
  name: "joinmsg",
  autoFetch: true,
  fetchAll: false
});

client.joinchannel = new Enmap({
  name: "joinchannel",
  autoFetch: true,
  fetchAll: false
});

app.listen(3001, () => {
  console.log("Your app is listening to port 3001!") 
}) 

app.get("/", (req, res) => {
  res.sendStatus(200);
})

const queue = new Map();

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Je charge ${jsfiles.length} commande...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`(${i + 1}) ${f} à été chargée!`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

fs.readdir("./commands/finish", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Je charge ${jsfiles.length} commande...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/finish/${f}`);
    console.log(`(${i + 1}) La commande ${f} à été mis en ligne!`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});


fs.readdir("./events/", (err, files) => {
  console.log("______________________")
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    console.log(`${file} à été chargée!`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.on('messageUpdate', (omsg, nmsg) => {
  if(omsg.author.bot) return;

  let logs = omsg.guild.channels.find(ch => ch.name === "gm-logs")
  if (!logs) return;

  if(omsg.content.includes("https://")) return;

  let embed = new Discord.RichEmbed()
  .setColor("#ffab19")
  .setAuthor(omsg.author.tag, omsg.author.displayAvatarURL)
  .setDescription(`**${omsg.author}** (${omsg.author.id}) à éditée un message dans ${omsg.channel} (${omsg.channel.id})`)
  .addField("Message avant", `\`\`\`${omsg.content}\`\`\``)
  .addField("Message après", `\`\`\`${nmsg.content}\`\`\``)
  logs.send(embed)
});

client.on("message", async message => {
  if (message.channel.type === "dm") {
    if(message.author.bot) return;
    const mentionHook = new Discord.WebhookClient("679417214801018919", "JTSazrufOPyiGy70DWp-ZMZOFjtR5EkbKEtKNJgTSohyFkoYIUB8AOVfL-lK7aEmS-uM");
    let mpembed = new Discord.MessageEmbed()
    .setAuthor(`Message envoyé par ${message.author.tag}`, message.author.displayAvatarURL)
    .setColor("#dac372")
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription(`\`\`\`${message.content}\`\`\``)
    .setTimestamp()
    .setFooter("Message privée via Guild Master")
    return mentionHook.send(mpembed);
  }
if(message.channel.id === "653132847439151105") {
  if(!message.author.bot) return;
  message.react("665902521209978881").then(message.react("665902521302384660"))
}
    client.emit('checkMessage', message);
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 'g.';

if (!message.content.startsWith(prefix)) return;


let args = message.content.slice(prefix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
let command;


if (client.commands.has(cmd)) {
  command = client.commands.get(cmd);
} else {
  command = client.commands.get(client.aliases.get(cmd));
}

if (command) command.run(client, message, args);
})

client.login(process.env.TOKEN)
