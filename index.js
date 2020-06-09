const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setStatus('available')
})

client.on('message', message => {
  if (message.content === '!avatar') {
    const myavatarEmbed = new Discord.RichEmbed()
	.setTitle('Your Avatar')
	.setImage(message.author.avatarURL)	
	if (!message.mentions.users.size) {
	return message.channel.send(myavatarEmbed);
	}
  }
});


client.login('')
