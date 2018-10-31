const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `k?banned = Dene ve Gör!\n \k?avatarım = Avatarınınızı Gösterir.\n \k?herkesebendençay = Herkese Çay Alırsınız.\n \k?koş = Koşarsınız.\n \k?çayiç = Çay İçersiniz.\n \k?çekiç = İstediğiniz Kişiye Çekiç Atarsınız.\n \k?çayaşekerat = Çaya Şeker Atarsınız.\n \k?yumruh-at = Yumruk Atarsınız.\n \k?yaz = Bota İstediğiniz Şeyi Yazdırırsınız.\n \k?sunucuresmi = BOT Sunucunun Resmini Atar.\n \k?sunucubilgi = BOT Sunucu Hakkında Bilgi Verir.\n \k?kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir.\n \k?istatistik = İstatistikleri Gösterir. `)
  .addField("**Yetkili Komutları**", `k?ban = İstediğiniz Kişiyi Sunucudan Banlar.\n \k?kick  = İstediğiniz Kişiyi Sunucudan Atar.\n \k?unban = İstediğiniz Kişinin Yasağını Açar.\n \k?sustur = İstediğiniz Kişiyi Susturur.\n \k?oylama = Oylama Açar.\n \k?duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "k?yardım = BOT Komutlarını Gösterir.\n \k?bilgi = BOT Kendisi Hakkında Bilgi Verir.\n \k?ping = BOT Gecikme Süresini Söyler.\n \k?davet = BOT Davet Linkini Atar.\n \k?istatistik = BOT İstatistiklerini Atar.")
  .addField("**Müzik Komutları**","k?çal = İştediğiniz Şarkıyı Çalar.\n \k?geç = Sıradaki şarkıya geçer sırada şarkı yoksa kanaldan çıkar.\n \k?ses = Müziğin sesini artırır.\n \k?çalan = Çalan Şarıyı Gösterir.\n \k?duraklat = Müziği Duraklatır.")
  .addField("**Yapımcı**", " **Süleyman Yıldız** ")
  .setFooter("**Bot Sürümü 2.0.0.0'dır** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
