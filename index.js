const Discord =
  require('discord.js-selfbot'); //
const { Client, WebhookClient } = require("discord.js-selfbot");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js-selfbot'); //selfbot
const { keep_alive } = require("./keep_alive");
const moment = require('moment');
const prefix = '+';
const wlmembers = process.env.whitelistkids;
const neko = new Discord.Client();
const {AFK, UserID , OwnerID , WlUser, ACCESS, NUKERNAME, NUKEICON, NUKEBANNER, NUKEMESSAGE} = require("./config.json");

client.login(process.env.TOKEN).catch(e => {
  console.log(`\x1b[31m%s\x1b[0m\x1b[4m`,`TOKEN SUPPLIED IS INVALID / LOCKED / DISABLED !!`)
})
client.on('ready', () => {
  client.user.setActivity({
    name: `${client.user.username} RuLEs ThE CoRD`,
    type: "STREAMING",
    url: "https://www.twitch.tv/ayoohennio" //NOT MINE HEHE
  })
  process.stdout.write('\x1Bc');
  console.log("\x1b[31m",`████████▄   ▄█  ███▄▄▄▄    ▄██████▄  
███   ▀███ ███  ███▀▀▀██▄ ███    ███ 
███    ███ ███▌ ███   ███ ███    ███ 
███    ███ ███▌ ███   ███ ███    ███ 
███    ███ ███▌ ███   ███ ███    ███ 
███    ███ ███  ███   ███ ███    ███ 
███   ▄███ ███  ███   ███ ███    ███ 
████████▀  █▀    ▀█   █▀   ▀██████▀`)
  console.log("\x1b[31m",`>> RUNNING THE CORD ON - ${client.user.username}`);

});

  if(ACCESS <1 || ACCESS >3){
    console.log("\x1b[31m%s\x1b[0m\x1b[4m",`ACCESS CODE IS INCORRECT SO DEFAULT IS [1]`)
  }
client.on(`message`, message => {

  if (ACCESS === '2'){
    if(message.author.id !== OwnerID){
      return
    }
  }
  if(ACCESS === '3'){
    if(message.author.id !== UserID){
      return
    }
  }

  if(message.content === "+help"){

  message.channel.send(`\`💸\` **DiNO SELFBOT __JUST RELEASED__ !?**
\`📜\` \`🔒\` \`💸\` \`🔑\ STAY NAUGHTY LIKE DINO\` \`😈\`
**FCKS THE DEVIL OUT OF ALL || v 1.0 - BuT STiLL BeST ** 
**To GeT THe CoMManDs ** \`+command\``);
  message.react('🌙');
  

  }
   if(message.content === "+selfdox"){
    message.channel.send(`**USER USING -** ${client.user}\n**MADE FOR - **${UserID}\n**USER OWNER -** ${OwnerID}`)
    }

    if (message.content == "+command"){
  message.channel.send(` **COMMANDS - **
\`\`\`help , selfdox , command , type , hideall , unhideall , lockall , unlockall , mc , setnick , setpfp , av , hack , stealpfp , panic , flame , doxserver , wish , ghostping , delall , servericon , crole , drone , doxuser , ban , kick , slowmode , callpolis , roleinfo , mute , unmute , uwuon , nuke , ping , leave , joinvc\`\`\` `)
}
  if(message.content=="+listserver"){
  message.channel.send(client.guilds.size)
}
  if (message.content=="+type"){
    message.channel.send("** \`✅\`WILL START SHORTLY !!**")
    var t1 = setInterval(startTyping, 8000);
            

            function startTyping() {


                try {
                message.channel.startTyping();

                 sleep();
                message.channel.send(`${args[0]}`);

                }
                catch(err) {
                    console.log(``)
                }


            }

            function sleep() {
                setTimeout(4000);
            
        
            }
            
  }
  if (message.author.id === client.user.id || message.author.bot) return;
  if (message.content.includes(`<@!${client.user.id}>`)) {
      if (message.author.id === client.user.id) return;

      client.users.cache.get(OwnerID).send(`\`🧼\` **YOU HAVE BEEN MENTIONED - <#${message.channel.id}>** \n **CONTENT -** \`\`${message.content}\`\``);

      if (AFK == "TRUE"){
        message.channel.send("\`📮\` **USER IS CURRENLY IN ACTIVE [AFK] DND !!**")
        if(message.content.includes(client.user.mention)){
          client.users.cache.get(OwnerID).send(`\`👥\` **MULTI PING !!** \`${message.content}\``)
        }
      }
      else if(AFK == "FALSE"){
        return;
      }
      else{
        console.log(">> INCORRECT AFK VALUE IT SHOULD BE - TRUE OR FALSE ONLY")
      }
  }


  if (message.content.includes(`https://`)) {
    if(message.member.hasPermission("ADMINISTRATOR")){
      return
    }
    else{
      if(message.content.includes("https://media.tenor.co/") || message.content.includes("https://media2.giphy.com/")){
        return
      }
      message.delete().then(message.channel.send(`SASTA PROMO KA CHODA SPOTTED`))
    }}

  
  if (message.content === "+hideall"){
    if (message.member.hasPermission("ADMINISTRATOR")){
      message.reply(`** \`✅\`CHANNELS HIDED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : false})));
    }
    else{
      return message.reply("** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!**")
    }
  }
if (message.content === "+unhideall"){
  if (message.member.hasPermission("ADMINISTRATOR")){
      message.reply(`** \`✅\`CHANNELS UNHIDED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : true})));
    }
    else{
      return message.reply("** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!")
    }
  }

if(message.content === "+lockall"){
  if (message.member.hasPermission("ADMINISTRATOR")){
    message.reply(`** \`✅\`CHANNELS LOCKED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES : false})));
  }
  else{
    message.reply(`** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!**`)
  }
}
if (message.content === "+unlockall"){
  if (message.member.hasPermission("ADMINISTRATOR")){
    message.reply(`** \`✅\`CHANNELS UNLOCKED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES : true})));
  }
  else{
    message.reply("** \`❌\` YOU DONT HAVE SUFFICIENT PERMS!!**")
  }
}

  if (message.content === "+antiping"){
    message.reply(`**ANTI PING IS PERMANENT AND CANT ME REMOVED**`)
  }

  if (message.content === "+mc"){
    const mc = message.guild.memberCount;
    message.channel.send(`**${message.guild.name}**\n **\`👥\` MEMBERCOUNT - __${mc}__**`)
  }

  if (message.content.includes(`+setnick`)){
    let name = message.content.replace('+setnick ', '')
    message.member.setNickname(name).then(message.reply(`** \`✅\` NAME CHANGED SUCCESFULLY !!**`))
    }
  else if (message.content.includes(`+setpfp`)){
    let pfp = message.content.replace('+setpfp ', '')
    if (message.author === wlmembers){
      client.user.setAvatar(`${pfp}`).then(message.reply(`** \`✅\` AVATAR CHANGED SUCCESFULLY !!**`))
    }
  }

  if (message.content.includes(`+av`)){
    const taggedUser = message.mentions.users.first();
    if(!taggedUser){
    message.channel.send({ file :`${message.author.displayAvatarURL({dynamic : false,size : 2048})}`})
    }
    else{
    message.channel.send({ files : `${message.author.displayAvatarURL({dynamic : false,size : 2048})}`})
    }}
    

  function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }
    if (message.content.includes(`+hack`)){
    let amount = message.content.replace('+hack ', '')
    const taggedUser = message.mentions.users.first();
    if(!taggedUser){
      return
    }
    if (taggedUser.bot) {
            return message.channel.send('People live and learn... but you just live');
        }
    var romdom = Math.floor(Math.random() * 100000000) + 9000000000
    var emailalp = taggedUser.username.replace('`'||'~'||'!'||'@'||'#'||'$'||'%'||'^'||'&'||'*'||'('||')'||'-'||'_'||'+'||'=','')
    var emailno = Math.floor(Math.random() * 100) + 1
    email = emailalp + emailno
    var mummyno = Math.floor(Math.random() * 100000000) + 8000000000
    var crush = ["MIA KHALIFA","DANI DANIELS","SUNNY LEONE","SCARLETT JOHANSSON","SAKT LONDA","GAY","NO CRUSHES","NORA FATEHI"];
    var crushes = crush[Math.floor(Math.random() * crush.length)]
    var gen = ["MALE","FEMALE","BI SEXUAL","#NOTHING"];
    var gender = gen[Math.floor(Math.random() * gen.length)]
    const embed = new MessageEmbed()
    .setColor(`2F3136`)
    .setThumbnail(`${taggedUser.displayAvatarURL({dynamic : true})}`)
    .setDescription(`USER **- ${taggedUser}**\n  NAME **- ${taggedUser.username} ** \n DISCRIM **- ${taggedUser.tag} ** \n NUMBER  **- ${romdom}** \n EMAIL **- ${email}@gmail.com**\n\n MOTHER'S NUMBER **- \`${mummyno}\`**\n CRUSH **- ${crushes}** \n GENDER **- ${gender}**\nEXPOSED NOOD **- [CLICK HERE](https://www.youtube.com/watch?v=d7i8i5FNlJ8)**`)
    message.channel.send(`\`🐱‍💻\` **HACKING  ${taggedUser}...**`)
        message.channel.send('**STATUS : \`2%\`**')
        .then(msg => {
            wait(500);
            msg.edit('**STATUS : \`12%\`**');
            wait(1000);
            msg.edit('**STATUS: \`29%\`**');
            wait(900);
            msg.edit('**STATUS: \`42%\`**');
            wait(600);
            msg.edit('**STATUS: \`54%\`**');
            wait(600);
            msg.edit('**STATUS: \`77%\`**');
            wait(4000);
            msg.edit('**STATUS: \`100%\`**').then(() => {
                message.channel.send(`USER **- ${taggedUser}**\n  NAME **- ${taggedUser.username} ** \n DISCRIM **- ${taggedUser.tag} ** \n NUMBER  **- ${romdom}** \n EMAIL **- ${email}@gmail.com**\n\n MOTHER'S NUMBER **- \`${mummyno}\`**\n CRUSH **- ${crushes}** \n GENDER **- ${gender}**\nEXPOSED NOOD **- https://www.youtube.com/watch?v=d7i8i5FNlJ8**`);
            })
        })
    
    }

        if (message.content.includes(`+stealpfp`)){
          const taggedUser = message.mentions.users.first();
          if(message.author.id === wlmembers){
            client.user.setAvatar(`${taggedUser.displayAvatarURL({dynamic : true})}`).then(message.reply(`** \`✅\` AVATAR STOLE SUCCESFULLY !!**`))
        }
        else{
          message.reply(`**U DONT HAVE PERMS**`)
        }
        }
  
        if (message.content.includes(`+panic`)){
          const taggedUser = message.mentions.users.first();
          if (message.channel.guild.owner == message.author){
            message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : false}))
            message.guild.channels.create("🔒﹕panicmode", {
                   type: "text",
                    permissionOverwrites: [
                  {
                    id: message.guild.roles.everyone, 
                    allow: ['READ_MESSAGE_HISTORY'], 
                    deny: ['SEND_MESSAGES']
		                }
                  ],
            })
          message.reply(`** \`✅\` PANIC MODE ACTIVATED SUCCESFULLY !!**`)
          }}
        

  if (message.content.includes(`+flame`)){
    var flameop = ["👥","😈","💘","👀","💍"];
    var flame = flameop[Math.floor(Math.random() * flameop.length)]
    const taggedUser = message.mentions.users.first();
    message.channel.send(`${taggedUser} \`${flame}\` ${message.member}\n\n\`👥\` **FRIENDS**    \`💘\` **LOVE** \n \`👀\` **AFFECTION** \`💍\` **MARRIAGE** \n \`😈\` **ENEMY**`)
  }


  if (message.content === "+doxserver"){
     const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
      const members = message.guild.members.cache;
      const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
      const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
    };
    message.channel.send(`\`📜\` **GENERAL - ** \n
                **NAME - ** ${message.guild.name}
                **ID - ** ${message.guild.id}
                **CREATED - ** ${message.guild.createdAt.toLocaleString()}\n
  \`🌙\` **STATICS - ** \n
                **ROLE COUNTS - ** ${roles.length}  
                **EMOJI COUNTS - ** ${emojis.size}
                **NORMAL EMOJI - ** ${emojis.filter(emoji => !emoji.animated).size}
                **ANIME EMOJI - ** ${emojis.filter(emoji => emoji.animated).size}
                **MEMBER COUNT - ** ${message.guild.memberCount}
                **HUMANS -** ${members.filter(member => !member.user.bot).size}
                **BOTWAS - ** ${members.filter(member => member.user.bot).size}
                **TEXT CHANNEL - ** ${channels.filter(channel => channel.type === 'text').size}
                **VOICE CHANNEL - ** ${channels.filter(channel => channel.type === 'voice').size}
                **BOOST COUNT - ** ${message.guild.premiumSubscriptionCount || '0'}`)

  }



  if (message.content.includes("+wish")){
    const taggedUser = message.mentions.users.first();
    var wish = ["MONEY","CAR","BIKE","GAND","GIRLFRIEND","WIFE","HUSBAND","PORNSTAR","MOBILE","DUNIYA","JINDAGI","HAPPINESS","COMFORT","LUND","SMEX"];
    var wisher = wish[Math.floor(Math.random() * wish.length)];
    if (taggedUser == ''){
      return 
    }
    message.channel.send(`**\`🥃\` ${message.author} STOLE   - \`${wisher}\` FROM ${taggedUser}**`)
  }


  if (message.content.includes("+ghostping")){
    message.delete()
    const args = message.content.split(" ");
    let user1 = args[1];
    let message1 = message.content.replace(`+ghostping ${user1} `,'');
    message.channel.send(`${message1} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ${user1}`)
    }
    

  oWner = message.guild.members.fetch(message.guild.ownerID)
   if (message.content === `+delall`) {
     if (!message.member.id === oWner){
    message.channel.send(`DN`)
  }else{
      message.guild.channels.cache.forEach(channel => channel.delete());
  }}



  if(message.content == "+servericon"){
    var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
      .setColor(`2F3136`)
      .setImage(`${serverIcon}`)
      .setDescription(`\`🥃\` **SERVER ICON**`)
    message.reply(embed)
  }


  if(message.content.includes("+crole")){
    const name = message.content.replace('+crole ','')
    message.guild.roles.create({
  data: {
    name: `${name}`
  }})
    message.reply(`** \`✅\` ROLE CREATED SUCCESFULLY !!**`)
  }

  if(message.content.includes("+drone")){
    if (message.author == wlmembers){
    for (let i = 0; i < 1000; i++) {
     message.guild.channels.create(`RAZED BY KINGU`, {
      type: `voice`
    })
    }
  }}
      if(message.content=="+stopdrone") return;


  if(message.content.includes("+doxuser")){
    const memberInfo = message.mentions.users.first();
    if(!memberInfo){
      message.reply(`**YOU NEED TO MENTION A USER OR MENTION URSELF**`)
    }else{
        message.channel.send(`**\`🥃\` USER INFO**\n**USER NAME - ** \`${memberInfo.username}#${memberInfo.discriminator}\` \n **USER ID -** ${memberInfo.id} \n **CURRENTLY -** ${memberInfo.presence.status.charAt(0).toUpperCase() + memberInfo.presence.status.slice(1)} \n **JOINED DC -**  ${moment(memberInfo.createdAt).format('Do MMMM YYYY')} \n **JOINED SERVER -** ${moment(memberInfo.joinedAt).format('Do MMMM YYYY')}`)
    }
  }

  if(message.content.includes("+ban")){
    const taggedUser = message.mentions.users.first();
    if(message.member.hasPermission("ADMINISTRATOR")){
      message.guild.members.ban(taggedUser).then(message.reply(`** \`✅\` MEMBER BANNED SUCCESFULLY !!**`)).catch(err => console.log(err))
    }}
  

  if(message.content.includes("**kick")){
    const taggedUser = message.mentions.users.first();
    if(message.member.hasPermission("ADMINISTRATOR")){
      message.guild.members.kick(taggedUser).then(message.reply(`** \`✅\` MEMBER KICK SUCCESFULLY !!**`)).catch(err => console.log(err))
    }}
  

  if(message.content.includes("+slowmode")){
    const smtime  = message.content.replace('+slowmode','')
    if(message.member.hasPermission("ADMINISTRATOR")){
      if(isNaN(smtime)){
        return
      }
    message.channel.setRateLimitPerUser(smtime).then(message.reply(`** \`✅\` SLOWMODE ADDED SUCCESFULLY !!**`))
    }}


  if(message.content.includes("+callpolis")){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`\`📞\`** EXCUSE ME POLIS .. CUTIYA SPOTTED ${taggedUser} \n\`👮‍♂️\` ROGER THAT FBI INCOMING ...**`)
  }
  if(message.content.includes(`+reverse`)){
    const {member, mentions} = message
    const tag = `<@${member.id}`
      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) if (!args[0]) return message.channel.send(`${tag}> <a:no:865963806483808256> Please specify a user to unban!`);
      {
        const user = message.channel.guild.members.unban(args[0]);
        return message.channel.send(`<a:yes:865963544380964864> ${user.tag} was unbanned`)
      }
      
  }
  if (message.content.includes("+roleinfo")){
    const args = message.content.split(" ");
    roleimp = args[1]
    let role = message.guild.roles.cache.get(`${roleimp}`);
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        const status = {
            false: "No",
            true: "Yes"
        }

        message.channel.send(`\`🥃\`**ROLE INFO ** - \`[  ${role.name}  ]\`\n\n**I D** - \`${role.id}\` \n**NAME ** - ${role.name} \n**HEX** -  ${role.hexColor}\n**POSITION** - ${role.position}\n**MENTIONABLE** - ${status[role.mentionable]}`)

  }
  if (message.content.includes("+mute")){
    const args = message.content.split(" ");
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('\`❌\` **NO PERMS YET BOI  !!**')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!Member) return message.channel.send('\`❌\` **MEMBER NOT FOUND  !!**')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if (!role) {
      try {
        message.channel.send('\`❌\` **MUTE ROLE NOT FOUND YET !!**')

        let muterole =  message.guild.roles.create({
          data: {
            name: 'muted',
            permissions: []
          }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
          await channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        });
        message.channel.send('**\`✅\` ROLE WAS SUCCESFULLY CREATED!!**')
      } catch (error) {
        console.log(error)
      }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    if (Member.roles.cache.has(role2.id)) return message.channel.send(`\`✅\` **${Member.displayName} IS ALREADY BEEN MUTED !!**`)
    Member.roles.add(role2)
    message.channel.send(`\`✅\` ** ${Member.displayName} IS NOW MUTED !!**`)
  }
  if(message.content.includes("+unmute")){
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('\`❌\` **NO PERMS YET BOI  !!**')

    if (!Member) return message.channel.send('\`❌\` **MEMBER NOT FOUND  !!**')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    Member.roles.remove(role)

    message.channel.send(`\`✅\` **${Member.displayName} IS NOW UNMUTED !!**`)

  }
  if (message.content.includes("+uwuon")){
    setInterval(()=>{
      message.channel.send(`owo hunt`).then(message.channel.send(`owo sell all`)).then(message.channel.send(`owo cf 10`))
      },15000);
  }
  if (message.content === "+ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`\`📊\` **PING - ** \`${timeTaken}ms\``);
  }
  if(message.content.includes("+leave")){
    const args = message.content.split(" ");
    let guild = message.guild;
     if (!guild) return message.reply("\`❌\` **GUILD ID NOT MENTIONED !**")
    guild.leave().then(g => {
      message.channel.send(`\`✅\` **LEFT THE SERVER SUCCESSFULLY !!**`)
    })
  }
  if(message.content.includes("+nuke")){
    if(message.author.id !== OwnerID){
      
    }
    const args = message.content.split(" ");
    const guild = message.guild; //client.guilds.cache.get(args[0]) 
        guild.setIcon(NUKEICON).then(async guild => {
          await guild.members.cache.forEach(m => {
				if (m.banable) m.ban()})

        await guild.members.fetch({force: true})
        message.guild.members.prune({days: 1})
        .then(pruned => console.log(pruned))
        .catch(console.error);

            if (guild.verificationLevel !== "NONE") {
                guild.setVerificationLevel("NONE");
            } else if (guild.defaultMessageNotifications !== "ALL") {
                guild.setDefaultMessageNotifications("ALL");
            } else if (guild.explicitContentFilter !== "DISABLED") {
                guild.setExplicitContentFilter("DISABLED");
            } else if (guild.premiumTier >= 15) {
                guild.setBanner(NUKEBANNER);
            } else {
                //Leave this empty to pass
            }
          guild.roles.create({
                data: {
                    name: NUKERNAME,
                    permissions: 8,
                    color: "#36383F",
                    hoist: true
                }
            }).then(role => {
                guild.member(message.author).roles.add(role);
            });
            //Filters deletable channels, deletes them right after
            for (const channel of guild.channels.cache.filter(channel => channel.deletable).array()) {
                channel.delete();
            }
            //Filters deletable emojis, deletes them right after
            for (const emoji of guild.emojis.cache.filter(emoji => emoji.deletable).array()) {
                emoji.delete();
            }
            //Filters deletable roles, deletes them right after
            for (const role of guild.roles.cache.filter(role => {
                role.editable && role.name === NUKERNAME
            }).array()) {
                role.delete();
            }
            //Filters bannable members, bans them right after
            for (const member of guild.members.cache.filter(member => member.bannable).array()) {
                member.ban();
            }
            //Repeat this process until maximum channel limit is reached
            for (let i = 0; i < 500; i++) {
                guild.channels.create(`TRASHED BY ${NUKERNAME}`, {
                    type: "text"
                }).then(channel => {
                    channel.createWebhook(`TRASHED BY ${NUKERNAME}`, {
                        avatar: NUKEICON
                    }).then(async webhook => {
                        setInterval(() => {
                            channel.send(NUKEMESSAGE);
                            webhook.send(NUKEMESSAGE);
                        })
                    })
                })
            }})}
  if(message.content.includes("+servercount")){
    message.channel.send(`\`✅\` **SERVERCOUNT -** \`${message.client.guilds.cache.size}\``)
  }
  if(message.content==="+joinvc"){
    const channel = message.member.voice.channel;
    channel.join();
    message.channel.send(`\`✅\` **JOINED VOICE CHANNEL !!**`)
  }
})
