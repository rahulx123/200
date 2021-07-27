const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const { MessageButton } = require('discord-buttons')
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed")
    try {
      let button_support_dc = new MessageButton().setStyle('url').setLabel('Support Server').setURL('https://discord.gg/GGmCvgAgYb')
      let button_invite = new MessageButton().setStyle('url').setLabel('Invite this Bot').setURL(`https://discord.gg/GGmCvgAgYb`)
      //array of all buttons
      const allbuttons = [button_support_dc, button_invite]
      message.channel.send({
        embed: new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Thanks for inviting Billi Premium")
          .addField(`Bot Powered by Nightrow Development`, `**[Support Server](https://discord.gg/GGmCvgAgYb)  •  [Discord](https://discord.gg/GGmCvgAgYb)**\n\n[*Invite* **${client.user.username}**](https://discord.gg/m4T9HE6dCu)`)
          .setFooter("Cat", "https://cdn.discordapp.com/attachments/868082725599477790/869462822696943626/giphy.gif"),
        buttons: allbuttons
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(es.footertext, es.footericon)
        .setTitle(`An error occurred`)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
      );
    }
  }
}