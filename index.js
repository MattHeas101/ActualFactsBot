const Discord = require('discord.js')
const client = new Discord.Client()
//const  = require('./.json')
const prefix = require('./prefix.json')
const DisTube = require('distube')

const distube = new DisTube(client, {searchSongs: false, emitNewSongOnly: true})

client.on('ready', () => {
    console.log('Bot ready!')
})



client.on('message', message => {
    if (message.content === '!help') {
        const embed = new Discord.MessageEmbed()
            .setTitle("Here is a list of my Commands!")
            .setColor('#0000FF')
            .addFields(
                {
                    name: "wagwan",
                    value: "replies",
                    inline: true
                },
                {
                    name: "can i get a",
                    value: "replies",
                    inline: true
                },
                {
                    name: "where is star?",
                    value: "replies",
                    inline: true
                },
                {
                    name: "what do we want",
                    value: "replies",
                    inline: true
                },
                {
                    name: "who forgot the ponchos",
                    value: "replies",
                    inline: true
                },
                {
                    name: "who is a hoe?",
                    value: "replies",
                    inline: true
                },
                {
                    name: "what is SweetHoneyTea_ new name?",
                    value: "Tell's you SweetHoneyTeas_'s new name!",
                    inline: true
                },
                {
                    name: "PanicAtTheJedis new name is",
                    value: "Same as before!",
                    inline: true
                },
                {
                    name: "what vibes are we feeling today?",
                    value: "replies",
                    inline: true
                },
                {
                    name: "matt",
                    value: "questions harry and whippy's location",
                    inline: true
                },
                {
                    name: "Oi",
                    value: "Yells at you",
                    inline: true
                },
                {
                    name: "KACHOW",
                    value: "Kachow!",
                    inline: true
                },
                {
                    name: "pix",
                    value: "replies with a picture!",
                    inline: true
                },
                {
                    name: "whippy",
                    value: "gives you an image of a Whippy icecream!",
                    inline: true
                },
                {
                    name: "!freddie",
                    value: "Gives you an image of Freddie Mercury!",
                    inline: true
                },
                {
                    name: "!katie",
                    value: "Gives you an image of Katie from Horton Hears a who!",
                    inline: true
                },
                {
                    name: "!hunkules",
                    value: "Gives you an image of Hunkules!",
                    inline: true
                },
                {
                    name: "!hoe",
                    value: "Provides you with images of Hoes, DJDora and SweetHoneyTea_!!",
                    inline: true
                },
                
                
            )

        message.channel.send(embed)
    }
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
        message.channel.send('Harry Did! The silly billy!')
    } 
})

client.on('message', message => {
    if (message.content === 'who is a hoe?') {
        message.channel.send('Well SweetHoneyTea_ is of course! Who else Silly Sausage')
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

client.on('message', message => {
    if (message.content === 'hi hoe hi hoe') {
        message.channel.send('Its off to work we go')
    } 
})

client.on('message', message => {
    if (message.content === 'KACHOW') {
        number = 1;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/kachow" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === 'pix') {
        number = 52;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/palace" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === 'Whippy') {
        number = 15;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/whippy" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!freddie') {
        number = 15;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/freddie" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Freddie') {
        number = 15;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/freddie" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!hoe') {
        number = 15;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hoe" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Hoe') {
        number = 15;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hoe" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!hunkules') {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hunkules" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Hunkules') {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hunkules" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Katie') {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/katie" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!katie') {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/katie" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!katie') {
        message.channel.send('In my own world where everyone eats rainbows...... and poops butterflies')
    } 
})

client.on('message', message => {
    if (message.content === '!Katie') {
        message.channel.send('In my own world where everyone eats rainbows...... and poops butterflies')
    } 
})

client.on('ready', () => {
    console.log('Bot ready!');

    client.user.setPresence({
        activity: {
            name: 'DJDora',
            type: 'Developed By'
        }
    });
        },
)



client.login(process.env.DJS_TOKEN)