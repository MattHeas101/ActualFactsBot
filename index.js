const Discord = require('discord.js')
const client = new Discord.Client()
//const  = require('./.json')
const prefix = require('./prefix.json')




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
        number = 18;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hoe" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Hoe') {
        number = 18;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hoe" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!hunkules') {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/hunkules" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Hunkules') {
        number = 8;
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

client.on('message', message => {
    if (message.content === '!Pride') {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/Pride" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!pride') {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/Pride" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!Gonzo') {
        number = 6;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/Gonzo" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!gonzo') {
        number = 6;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/Gonzo" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if(message.content === '!servers') {
    
  
  if(message.author.id === "877142379432382504") => {
    
  
  if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("I Dont Have Permissions")
            .then(msg => msg.delete({ timeout: 5000 }));
  
        let i0 = 0;
        let i1 = 10;
        let page = 1;
  
        let description =
          `Total Servers - ${client.guilds.cache.size}\n\n` +
          client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
            .slice(0, 10)
            .join("\n\n");
  
        let embed = new Discord.MessageEmbed()
          .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic : true}))
          
          .setColor("00FFFF")
          .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
          .setDescription(description);
  
        let msg = await message.channel.send(embed);
  
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("❌");
  
        let collector = msg.createReactionCollector(
          (reaction, user) => user.id === message.author.id
        );
  
        collector.on("collect", async (reaction, user) => {
          if (reaction._emoji.name === "⬅") {
            // Updates variables
            i0 = i0 - 10;
            i1 = i1 - 10;
            page = page - 1;
  
            // if there is no guild to display, delete the message
            if (i0 + 1 < 0) {
              console.log(i0)
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
              `Total Servers - ${client.guilds.cache.size}\n\n` +
              client.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
                .slice(i0, i1)
                .join("\n\n");
  
            // Update the embed with new informations
            embed
              .setFooter(
                `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "➡") {
            // Updates variables
            i0 = i0 + 10;
            i1 = i1 + 10;
            page = page + 1;
  
            // if there is no guild to display, delete the message
            if (i1 > client.guilds.cache.size + 10) {
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
              `Total Servers - ${client.guilds.cache.size}\n\n` +
              client.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
                .slice(i0, i1)
                .join("\n\n");
  
            // Update the embed with new informations
            embed
              .setFooter(
                `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "❌") {
            return msg.delete();
          }
  
          // Remove the reaction when the user react to the message
          await reaction.users.remove(message.author.id);
        })
  } else {
    return
  }}}

client.on('ready', () => {
    console.log('Bot ready!');

    client.user.setPresence({
        activity: {
            name: 'Developed By DJDora',
            type: 'PLAYING:'
        }
    });
        },
)



client.login(process.env.DJS_TOKEN)