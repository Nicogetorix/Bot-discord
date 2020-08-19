const Discord = require('discord.js')
const bot = new Discord.Client()
const webhookCapitaine = new Discord.WebhookClient('744217302156836935', 'aoQxsb2vf3ZXE4EecRcRvWD0k7ai3J1tqEbjGUgatOmeUZ4CxZRzd8bCdhu3bRZeh4km')

//instance
bot.on('ready', function () {
    bot.user.setActivity('Clash of Clans', {type: PLAY}).catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === '!help') {
        message.channel.send('```Toutes les commandes!```')
    }

    if (message.content === '!server') {
      let server_name = message.guild.name
      let server_size = message.guild.members.size
      message.channel.send('Server: ' + server_name + '\nPersonnes : ' + server_size)
      webhookCapitaine.send('Je suis le webhook.')
  }  
})

bot.login(process.env.TOKEN)