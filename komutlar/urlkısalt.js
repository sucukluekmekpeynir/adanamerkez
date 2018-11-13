const Discord = require('discord.js');
const db = require('quick.db');
const shorten = require('isgd');

exports.run = (client, message, args, tools, guild) => {
  db.fetch(`guildPrefix_${message.guild.id}`).then(i => {

    
    
  let prefix;

  if (i) {
    prefix = i
  } else {
    prefix = `${prefix}`;

  }
    message.delete();
    if (!args[0]) return message.channel.send({embed:{
    title:(`Kullanım İçin ${prefix}kısalt (url) `)
    }})

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Lütfen Doğru URL Girin**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

})};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'urlkısalt',
 description: 'İstediğiniz URL yi Kısaltır. ',
 usage: 'urlkısalt'
