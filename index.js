const mySecret = process.env['TOKEN']
const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('ready', () => {
  console.log('The bot is ready')
})

const triggerWords = ['quoi', 'quoi?', 'quoi ?', 'pourquoi', 'pourquoi?', 'pourquoi ?']

client.on('messageCreate', (message) => {
  const messageContent = message.content.toLowerCase()
  if (triggerWords.some(word => messageContent.endsWith(word))) {
    message.reply('feur')
}
})

client.login(mySecret)
