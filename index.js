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
    if (message.content === 'palacepix') {
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


client.on('message', message => {
	if (message.author.bot) return
	if (!message.content.startsWith('!')) return
	const args = message.content.slice('!').trim().split(/ +/g)
	const command = args.shift()

	if (command === 'play') distube.play(message, args.join(' '))

	if (['repeat', 'loop'].includes(command)) distube.setRepeatMode(message, parseInt(args[0]))

	if (command === 'stop') {
		distube.stop(message)
		message.channel.send('Stopped the music!')
	}

	if (command === 'skip') distube.skip(message)

	if (command === 'queue') {
		const queue = distube.getQueue(message)
		message.channel.send(`Current queue:\n${queue.songs.map((song, id) =>
			`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
	}

    if (command === 'pause') {
		const queue = distube.pause(message)
		message.channel.send('⏸ The music is now paused')
	}

    if (command === 'resume') {
		const queue = distube.resume(message)
		message.channel.send(':arrow_forward: The music has now resumed')
	}

	if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`].includes(command)) {
		const filter = distube.setFilter(message, command)
		message.channel.send(`Current queue filter: ${filter || 'Off'}`)
	}
})

client.on('message', (message) => {
    if (!message.content.startsWith(prefix.prefix)) return;
    const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
    const command = args.shift();
    if (command == "volume")
        distube.setVolume(message, args[0]);
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix.prefix)) return;
    const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
    const command = args.shift();
    if (command == "shuffle")
        distube.shuffle(message);
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix.prefix)) return;
    const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
    const command = args.shift();
    if (command == "autoplay") {
        let mode = distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    }
});

// Queue status template
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

// DisTube event listeners, more in the documentation page
distube
	.on('playSong', (message, queue, song) => message.channel.send(
		`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`,
	))
	.on('addSong', (message, queue, song) => message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
	))
	.on('playList', (message, queue, playlist, song) => message.channel.send(
		`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`,
	))
	.on('addList', (message, queue, playlist) => message.channel.send(
		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`,
	))

    distube.on("empty", message => message.channel.send("Channel is empty. Leaving the channel"))
// DisTubeOptions.searchSongs = true
	.on('searchResult', (message, result) => {
		let i = 0
		message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}\n*Enter anything else or wait 60 seconds to cancel*`)
	})
// DisTubeOptions.searchSongs = true
	.on('searchCancel', message => message.channel.send(`Searching canceled`))
	.on('error', (message, e) => {
		console.error(e)
		message.channel.send(`An error encountered: ${e}`)
	})

client.login(process.env.DJS_TOKEN)