const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {

var prefix = "$"

const Discord = require('moment');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`$help `,`$inv`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

    var prefix = "$"
    client.on('message', message => {
      if (message.author.xErenaa) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "$ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let bErenaalog = client.channels.find("name", "Erenaa-log");
    
      if(!bErenaalog) return message.reply("I've detected that this server doesn't have a Erenaa-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
    
      message.guild.member(user).ban(7, user);
    
      const banembed = new RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });

    var prefix = "$"
    client.on("message", (message) => {
        if (message.content.startsWith("${prefix}kick")) {
          if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('? ماعندك الصلاحيات');
            var member= message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(member.displayName + " مع السلامه :wave: ");
            }).catch(() => {
                message.channel.send("Error -_-");
            });
        }
    });

    client.on("message", message => {
        if (message.content === (prefix + "help")) {
         const embed = new RichEmbed()
             .setColor("#580e6b")
             .setThumbnail(message.author.avatarURL)
             .setDescription(`**
             ------------------------------
             $bc : brodcast                  
             $user : see you profile
             $server : more info about server
             ------------------------------
             $ban : ban someone from server
             $kick : kick someone from server
             $clear : clear chat
             $mute : mute someone
             $unmute : unmute someone        
             ------------------------------
             $bot : info for bot
             $inv : invite the bpt
             $help : show this message
             ------------------------------
             
           **  `)
       message.author.sendEmbed(embed)
       
       }
       });  
    client.on('message', message => {
         if (message.content === (prefix + "help")) {
         let embed = new RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#8650a7")
      .addField("Done" , " تــــم ارســالك في الخــاص")
      message.channel.sendEmbed(embed);
        }
    });

    client.on('message', message => {
        if (message.content === ('.bot')) {
        message.channel.send({
            embed: new RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('RANDOM')
                .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('**Servers**📚 :', [client.guilds.size], true)
                .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
                .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
                .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
                .addField('**Bot Owner**👑 :' , `[<@ايدي حقك>]` , true)
                .setFooter(message.author.username, message.author.avatarURL)
        })
    }
    });

    client.on('message', message => {
        var prefix = "$";
               if(message.content === prefix + "cl") {
                                   if(!message.channel.guild) return message.reply('** This command only for servers**');
         
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **تم قفل الشات*');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false
         
                      }).then(() => {
                          message.reply("**تم قفل الشات :white_check_mark: **")
                      });
                        }
        //FIRE BOT
            if(message.content === prefix + "op") {
                                if(!message.channel.guild) return message.reply('** This command only for servers**');
         
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**تم فتح الشات**');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: true
         
                      }).then(() => {
                          message.reply("**تم فتح الشات :white_check_mark:**")
                      });
            }
               
        });

        client.on('message', msg => {
            if (msg.author.bot) return;
            if (!msg.content.startsWith(prefix)) return;
            let command = msg.content.split(" ")[0];
            command = command.slice(prefix.length);
            let args = msg.content.split(" ").slice(1);
           
              if(command === "clear") {
                  const emoji = client.emojis.find("name", "wastebasket")
              let textxt = args.slice(0).join("");
              if(msg.member.hasPermission("MANAGE_MESSAGES")) {
              if (textxt == "") {
                  msg.delete().then
              msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
          } else {
              msg.delete().then
              msg.delete().then
              msg.channel.bulkDelete(textxt);
                  msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
                  }    
              }
          }
          });

          client.on('message', message => {
            if(message.content.includes('discord.gg')){
                                                    if(!message.channel.guild) return message.reply('** advertising me on DM ?    **');
                if (!message.member.hasPermissions(['ADMINISTRATOR'])){
                message.delete()
            return message.reply(`** No Invite Links  !**`)
            }
        }
        });

        client.on('message', message => {
         
 
            if (message.content.startsWith(prefix + "user")) {
             
             if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
           
                 message.guild.fetchInvites().then(invs => {
          let member = client.guilds.get(message.guild.id).members.get(message.author.id);
          let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
          let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
          var moment = require('moment');
          var args = message.content.split(" ").slice(1);
          let user = message.mentions.users.first();
          var men = message.mentions.users.first();
          var heg;
          if(men) {
          heg = men
          } else {
          heg = message.author
          }
          var mentionned = message.mentions.members.first();
          var h;
          if(mentionned) {
          h = mentionned
          } else {
          h = message.member
          }
          moment.locale('ar-TN');
          var id = new  RichEmbed()
           
          .setColor("#0a0909")
          .setThumbnail(message.author.avatarURL)
          .addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
          .addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
          .addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
           
           
          .setFooter(message.author.username, message.author.avatarURL)  
          message.channel.sendEmbed(id);
          })
          }
           
           
           
          });client.on('message', message => {
            if (message.content === ('$bot')) {
            message.channel.send({
                embed: new RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setThumbnail(client.user.avatarURL)
                    .setColor('RANDOM')
                    .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                    .addField('**Servers**📚 :', [client.guilds.size], true)
                    .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
                    .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
                    .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
                    .addField('**Bot Owner**👑 :' , `[<@321792845914570764>]` , true)
                    .setFooter(message.author.username, message.author.avatarURL)
            })
        }
        });

            client.on('message', message => {
                var prefix = "$";
                
                    if (message.author.id === client.user.id) return;
                    if (message.guild) {
                   let embed = new RichEmbed()
                    let args = message.content.split(' ').slice(1).join(' ');
                if(message.content.split(' ')[0] == prefix + 'bc') {
                    if (!args[1]) {
                message.channel.send("**f!bc <message>**");
                return;
                }
                        message.guild.members.forEach(m => {
                   if(!message.member.hasPermission('ADMINISTRATOR')) return;
                            var bc = new RichEmbed()
                            .addField('» السيرفر :', `${message.guild.name}`)
                            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                            .addField(' » الرسالة : ', args)
                            .setColor('#ff0000')
                            // m.send(`[${m}]`);
                            m.send(`${m}`,{embed: bc});
                        });
                    }
                    } else {
                        return;
                    }
                });

                client.on('message', message => {
                    const myID = "321792845914570764";
                      if(!message.channel.guild) return;
                    let args = message.content.split(' ').slice(1).join(' ');
                    if (message.content.startsWith('+bcadmin')){
                    message.channel.sendMessage('جار ارسال الرسالة |✅')
                    client.users.forEach(m =>{
                    var bc = new
                    Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle('Broadcast')
                    .addField('Server', message.guild.name)
                    .addField('Sender', message.author.username)
                    .addField('Message', args)
                    m.send({ embed: bc })
                    })
                    }
                    });

client.login('NTMxNTY2ODI2NTA1ODk1OTYz.DxUUCg.2QvwBxjCi192Jmq5_U-o880z050');
