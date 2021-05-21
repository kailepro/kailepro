Hey, Code starts below (updated) :)

const Discord = require('discord.js');
const { getServers } = require('dns');

// bot stuff

const client = new Discord.Client();

// token  placement

const token = 'NERD.';

// dont need fs but if i do i already have it

const fs = require('fs');

// placement \\ 

const hereLol = 'avatar go brrrr';


// where u type node . / node main.js


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}, Have fun Crunchy`);
})

// activity stuff cause y e s 

client.on('error', (error) => {
    console.log(error);
});



client.on('ready', () => {
    client.user.setActivity(`:help | in ${client.guilds.cache.size} Servers with ${client.users.cache.size} Members Overall`, { type: "LISTENING" });

}, 1000);

// simple message.on event for messages

client.on('message', message =>{

     // **MESSAGES START HERE** \\

    if(message.content.startsWith(':test')) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Hello ${message.author.username}!`)
        .setTitle('Embed command works')
        .setColor('RANDOM')
        .setFooter('pro')
        message.reply(embed);
    }
    if(message.content === ':dm') {
        const messages = [`heyyy ${message.author.username}`, `sup ${message.author.username}`, `yooooooooooooooooooooooooooooooooo ${message.author.username}`, `hi ${message.author.username}`, `ur pretty cool ${message.author.username} :)`, 'big pro', 'ur not human, ur a bot like me', 'u suck', 'efbefi', 'i am watching u ;)']

        message.author.send(messages[Math.floor(Math.random() * messages.length)]) && message.react('👍')
    }
    if(message.content === ':help'){

        let embed = new Discord.MessageEmbed()
        .setTitle('Commands for Would You Rather bot!')
        .setDescription('DM Crunchy#1367 For further help. Thanks for using my bot!')
        .addFields(
            {name: 'Main Commands :cd:', value: ':wyr :t :d'},
            {name: 'Other Commands :dvd:', value: ':avatar profile'},
            {name: 'WYR REPO:', value: ':GHUBREPO'},
            {name: 'Invite me :hammer_pick:', value: ':addme'},
            {name: 'Developer Commands / Tests :tools:', value: ':dm :test :brokenmsg :ping'},
            {name: 'Help commands for commands that ur looking in a help command??? :pick:', value: ':helpmain :helpothers :helpinvi :helpdev :helpWYRREP'}
        )
        .setColor('#260d4e')
        .setFooter(`Help for ${message.author.username}`)
        message.channel.send(embed);
    }
    if(message.content === ':wyr') {
        const msgs = ['Would you rather go into the past and meet your ancestors or go into the future and meet your great-great grandchildren?', 'Would you rather have more time or more money?', 'Would you rather have a rewind button or a pause button on your life?', 'Would you rather be able to talk with the animals or speak all foreign languages?', 'Would you rather win the lottery or live twice as long?', 'Would you feel worse if no one showed up to your wedding or to your funeral?', 'Would you rather be without internet for a week, or without your phone?', 'Would you rather meet George Washington, or the current President?', 'Would you rather lose your vision or your hearing?', 'Would you rather work more hours per day, but fewer days or work fewer hours per day, but more days?', 'Would you rather listen to music from the 70’s or music from today?', 'Would you rather become someone else or just stay you?', 'Would you rather be Batman or Spiderman?', 'Would you rather be stuck on a broken ski lift or in a broken elevator?', 'For your birthday, would you rather receive cash or gifts?', 'Would you rather go to a movie or to dinner alone?', 'Would you rather always say everything on your mind or never speak again?', 'Would you rather make a phone call or send a text?', 'Would you rather read an awesome book or watch a good movie?', 'Would you rather be the most popular person at work or school or the smartest?', 'Would you rather put a stop to war or end world hunger?', 'Would you rather spend the night in a luxury hotel room or camping surrounded by beautiful scenery?', 'Would you rather explore space or the ocean?']

        let embed = new Discord.MessageEmbed()
        .setTitle(`Would you rather questions for ${message.author.username}`)
        .setDescription("You better like my questions")
        .addFields(
            {name: 'Questions:', value: msgs[Math.floor(Math.random() * msgs.length)]}
        )
        .setColor("RANDOM")
        .setFooter("Have fun with these questions nerdsss")

        message.channel.send(embed)
    }
    if(message.content === ':avatar') {

        const user = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()
        .setTitle(hereLol)
        .setAuthor(`${user.tag}'s Avatar`)
        .setDescription(`[URL](${user.avatarURL()})`)
        .setImage(user.displayAvatarURL({dynamic: true, size: 2048 }))
        .setTimestamp()
        .setColor('BLUE')
        .setFooter('working on more commands for this bot :)')

        message.reply(embed);
        
        

    }
    if(message.content === '-test') {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setThumbnail(`${message.author.displayAvatar}`)

        message.author.send(embed);
    }
    if(message.content.startsWith('kai')) {
        message.react('🇰') && message.react('🇦') && message.react('🇮')
    }
    if(message.content.startsWith('adem')) {
        message.react('🇦') && message.react('🇩') && message.react('🇪') && message.react('🇲') && message.react('🇮') && message.react('🇸') && message.react('🇭') && message.react('🇴') && message.react('🇹')
    }
    if(message.content === ':testv2') {

        const user = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()
        .setAuthor(` ${message.author.username}`, message.author.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL({dynamic: true, size: 2048 }))
        message.channel.send(embed)
    }
    if(message.content === ':t') {
        const tmsg = ['Have you ever had a crush on your best friends partner?', 'Have you ever done anything illegal (totally will not send this info to the police hehe)', 'If you could be invisible, what is the first thing you would do?', 'What is a secret you kept from your parents?', 'What is the most embarrassing music you listen to?', 'What is one thing you wish you could change about yourself?', 'Who is your secret crush? (if u have one)', 'Who is the last person stalked on social media?', 'If a genie granted you three wishes, what would you ask for?', 'What is your biggest regret?', 'Where is the weirdest place youve ever been', 'What is the most food youve ever ate in a single sitting', 'Which person here would survive a zombie apocalypse and which would be the first to die?', 'What excuse have you used before to get out plans with a friend?', 'Whats the longest youve ever slept?', 'Whats your biggest pet peeve?', 'When was the last time you lied?', 'What five things would you bring to a desert island?', 'Whats the most embarrassing thing you ever did on a date?']

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Hey ${message.author.username} Heres the questions`, message.author.displayAvatarURL())
        .setTitle('have fun LMAO')
        .setDescription("You better like them.")
        .addFields(
            {name: 'Truth questions:', value: tmsg[Math.floor(Math.random() * tmsg.length)]}
        )
        .setColor("RANDOM")
        .setFooter('have fun with these nerds')

        message.channel.send(embed);
    }
    if(message.content === ':addme') {
        message.author.send('https://discord.com/api/oauth2/authorize?client_id=805298205615980584&permissions=1141230657&scope=bot') && message.channel.send('DM Sent (i think, if not go into ur settings click privacy and allow dms from server members.)')
    }
    if(message.content === ':d') {
        const dmsg = ['I dare you to stfu.', 'I dare you to stick ur head in a toilet.', 'Show the most embarrassing photo on your phone.', 'Show the last five people you texted and what the messages said.', 'Let the rest of the group DM someone from your Instagram account.', 'Do 10 pushups', 'take a shot of lemon juice.', 'Eat a raw piece of garlic.', 'Wrap your head with toilet paper like a mummy, take a picture, and make it your profile pic', 'Let the group decide your PFP for 1 week :eyes:', 'Text a friend and tell them their hair is on backward', 'Text your mom and say you shit the bed.', 'Send the most unflattering picture of yourself on your phone', 'Tell us your biggest secret', 'Close your eyes and write a text without looking. Send it to someone random and screenshot the conversation for proof', 'Take a video of yourself drinking water like a dog', 'Take a video of yourself imitating a celebrity and send it']

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Dares for ${message.author.username}`, message.author.displayAvatarURL())
        .setTitle(`Have fun lMAO)`)
        .setDescription('You better like them')
        .addFields(
            {name: 'Dares:', value: dmsg[Math.floor(Math.random() * dmsg.length)]}
        )
        .setColor("RANDOM")
        .setFooter('Have fun nerd with these NERDS!!!!')




        message.channel.send(embed);
    }
    if(message.content === ':RND') {
        const rnd = ['ur mom', 'yes', 'no', 'a', 'e', 'bruh', 'why gae lmao', 'shut', 'yes again', 'never', 'ur mom']

        message.channel.send(rnd[Math.floor(Math.random() * rnd.length)])

    }

    if(message.content.includes('kai')) {
        message.react('🇰') && message.react('🇦') && message.react('🇮')
    }

    if(message.content === ':brokenmsg') {
        const ballmsg = ('msg1', 'msg2', 'msg3', 'msg4', 'bro idk', 'bot go brrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'rrr', 'm', 'pwofekf')

        message.channel.send(ballmsg[Math.floor(Math.random() * ballmsg.length)])

    }
    if(message.content === ':helpmain') {
        let embed = new Discord.MessageEmbed()
        .setTitle('These help {command} stuff is just for describing what commands do.')
        .setDescription('Here ya go!')
        .addFields(
            {name: ':wyr', value: 'Sends a would you rathor question.'},
            {name: ':t', value: 'Sends a truth question for truth or dare.'}
        )
        .setColor('RANDOM')
        .setFooter('Thank you for actually using this bot.')

         message.channel.send(embed)
    }
    if(message.content === ':helpothers') {
        let embed = new Discord.MessageEmbed()
        .setTitle('These help {command} stuff is just for describing what commands do.')
        .setDescription('Heres the help you wanted.')
        .addFields(
            {name: ':avatar', value: 'Sends your avatar.'},
            {name: ':profile', value: 'Sends info for your profile'}
        )
        .setColor("RANDOM")
        .setFooter('Thanks for using my bot')
        message.channel.send(embed)
    }
    if(message.content === ':helpinvi') {
        let embed = new Discord.MessageEmbed()
        .setTitle('These help {command} stuff is just for describing what commands do.')
        .setDescription('Heres the help you wanted.')
        .addFields(
            {name: ':addme', value: 'DMS You a link to add my bot to your server.'}
        )
        .setColor("RANDOM")
        .setFooter('Thanks for using my bot')
        message.channel.send(embed)
    }
    if(message.content === ':helpdev') {
        let embed = new Discord.MessageEmbed()
        .setTitle('These help {command} stuff is just for describing what commands do.')
        .setDescription('These are DEV test commands meaning they are not made for YOU but why not let you test.')
        .addFields(
            {name: ':dm', value: 'Just a DM test command'},
            {name: ':test', value: 'Simple message test when i first made the bot.'},
            {name: ':brokenmsg', value: 'I was trying to show a friend how to make a rnd message, but made this some how?'},
            {name: ':ping', value: `Displays ${client.user.tag}'s ping.`}
        )
        .setColor("RANDOM")
        .setFooter('Thanks for using my bot')
        message.channel.send(embed)
    }
    if(message.content === ':profile') {


        let embed = new Discord.MessageEmbed()
        .setAuthor(`User info for ${message.author.username}`, message.author.displayAvatarURL({dynamic: true})) 
        .setDescription('Profile info command yay!')
        .addFields(
            {name: 'User Tag', value: message.author.tag},
            {name: 'Is this user a bot?', value: message.author.bot},
            {name: 'Users discriminator', value:  `${message.author.discriminator}`},
            {name: 'When this user joined Discord.', value: `${message.author.createdAt}`},
        )
        .setColor("RANDOM")
        .setFooter('newwwwwwww command vsery funnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
        message.channel.send(embed)
    }
      if(message.content === 'test e') {
          message.channel.send(':avatar')
      }
     if(message.content === ':GHUBREPO') {
         let embed = new Discord.MessageEmbed()
         .setAuthor(`Heres the Ghub REPO ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
         .setTitle("I'm not sure why anyone would want this code, but ok.")
         .setDescription('You can copy it but dont make it obvious.')
         .addField('Ghub REPO:', 'https://github.com/kailepro/kailepro/tree/main')
         .setColor("RANDOM")
         .setFooter(`Request of GHub REPO from ${message.author.username}`)
         message.channel.send(embed)
     }
     if(message.content === ':helpWYRREP') {
        let embed = new Discord.MessageEmbed()
        .setTitle('These help `{command}` stuff is just for describing what commands do.')
        .setDescription('Heres the help you wanted.')
        .addFields(
            {name: ':GHUBREPO', value: `Sends the REPO for WYR Bot.`}

        )
        .setColor("RANDOM")
        .setFooter('Thanks for using my bot')
        message.channel.send(embed)

     }
     if(message.content === ':ping') {
         let embed = new Discord.MessageEmbed()
         .setAuthor("Bot's Ping", message.author.displayAvatarURL())
         .setDescription(`🏓 Ping is \`${Math.round(client.ws.ping)}ms\``)
         .setColor("RANDOM")
         .setTimestamp()
         .setFooter(`pong | Request from ${message.author.username}`)
         message.channel.send(embed)
     }
     
     
        // **END OF MESSAGESS** \\
}, 1000)


// bot login

client.login(token); 
