const Discord = require('discord.js')
const client = new Discord.Client()
//const config = require('./config.json')

client.on('ready', () => {
    console.log('Bot ready!')
})

client.on('message', message => {
    if (message.content === 'can i get a') {
        message.channel.send('HUUUUUUUU YEAH!')
    } 
})

client.on('message', message => {
    if (message.content === 'what do we want') {
        message.channel.send('PONCHOS!')
    } 
})

client.on('message', message => {
    if (message.content === 'where is star?') {
        message.channel.send('probably watching matt :eyes:')
    } 
})

client.on('message', message => {
    if (message.content === 'wagwan') {
        message.channel.send('INNIT FAM')
    } 
})

client.on('message', message => {
    if (message.content === 'who forgot the ponchos') {
        message.channel.send('BubblyBooYa Did! The silly billy!')
    } 
})

client.on('message', message => {
    if (message.content === 'who is a hoe?') {
        message.channel.send('Well SweetHoneyTea_ is of course! Who else Silly Sauasage')
    } 
})

client.on('message', message => {
    if (message.content === 'what is SweetHoneyTea_ new name?') {
        message.channel.send('SweetHoneyHUUUUYEAH_')
    } 
})

client.on('message', message => {
    if (message.content === 'PanicAtTheJedis new name is') {
        message.channel.send('PanicAtTheHUUUUUYEAH')
    } 
})

client.on('message', message => {
    if (message.content === 'what vibes are we feeling today?') {
        message.channel.send('BAM vibes only!')
    } 
})

client.on('message', message => {
    if (message.content === 'Oi') {
        message.channel.send('GET BACK TO WORK!')
    } 
})

client.on('message', message => {
    if (message.content === 'matt') {
        message.channel.send('WHERE IS WHIPPY AND HARRY?!?!?')
    } 
})

client.login(process.env.DJS_TOKEN)