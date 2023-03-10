const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const data = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
//--------------------------------- VERİ ÇEKTİRME ---------------------------------\\
let channels = db.fetch(`kayıtlog_${message.guild.id}`)
let erkekrole = db.fetch(`erkekrole_${message.guild.id}`)
let kayıtsızrole = db.fetch(`kayıtsızrole_${message.guild.id}`)
let yetkirole = db.fetch(`yetkilirole_${message.guild.id}`)
let erkek = message.guild.roles.cache.get(erkekrole);
let yetkili = message.guild.roles.cache.get(yetkirole);
let kayıtsız = message.guild.roles.cache.get(kayıtsızrole);
//--------------------------------- VERİ ÇEKTİRME ---------------------------------\\

//--------------------------------- Uyarı Verdirtme ---------------------------------\\
if(!channels) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Kayıt Log Kanalı Ayarlı Değil Ayarlamak İçin: **${ayarlar.prefix}kayıt-log #kanal**`))
if(!erkekrole) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Erkek Rolü Ayarlı Değil Ayarlamak İçin: **${ayarlar.prefix}erkek-rol @rol**`))
if(!kayıtsızrole) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Kayıtsız Rolü Ayarlı Değil Ayarlamak İçin: **${ayarlar.prefix}kayıtsız-rol @rol**`))
if(!yetkirole) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Yetkili Rolü Ayarlı Değil Ayarlamak İçin: **${ayarlar.prefix}yetkili-rol @rol**`))
//--------------------------------- Uyarı Verdirtme ---------------------------------\\

//--------------------------------- Kullanıcı Çektirtme ---------------------------------\\
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let name = args[1]
let age = args[2]
//--------------------------------- Kullanıcı Çektirtme ---------------------------------\\

//--------------------------------- Kullanıcı Uyarı verdirtme ---------------------------------\\
if(!message.member.roles.cache.has(yetkirole)) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Bu Komutu Kullanabilmek İçin <@&${yetkirole}> Rolüne Sahip Olman Gerekiyor`))
if(!member) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Bir kullanıcı Belirtmelisin Yoksa Kayıt İşlemi Tamamlanamaz.`))
if(!member.roles.cache.has(kayıtsızrole)) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`${member}, Kullanıcısının üzerinde <@&${kayıtsızrole}> Rolü Bulunmadığı İçin Kayıt Yapılamaz`));
if(!name) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Bir İsim Belirtmelisin.`))
if(!age) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Bir Yaş Belirtmelisin.`))
//--------------------------------- Kullanıcı Uyarı verdirtme ---------------------------------\\

//--------------------------------- Kullanıcı Olumlu ---------------------------------\\
member.setNickname(`${name}・${age}`)
member.roles.remove(kayıtsızrole)
member.roles.add(erkekrole)
//--------------------------------- Kullanıcı Olumlu ---------------------------------\\
 var randommesaj = [
        " Kanka yavaş!!",
        "Çok hızlısın lan!!",
        "Senden güzel yetkili yok",
        "çok hızlısın be"
    ]
       var database = randommesaj[Math.floor(Math.random() * (randommesaj.length))]
   
//--------------------------------- Embed Mesajlar ---------------------------------\\
//--------------------------------- SPONSOR BY KREXY ---------------------------------\\
const embed = new MessageEmbed()
.setColor('RED')
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true})).setTitle(message.author.username+ ` ${database}`)
.setDescription(`${member} **Başarıyla** **Kayıt oldu**, Kullanıcısına <@&${erkekrole}> Rolünü verip <@&${kayıtsızrole}> Rolünü aldım.`)
message.channel.send(embed)
//--------------------------------- Embed Mesajlar ---------------------------------\\

//--------------------------------- Kayıt Log Mesajlar ---------------------------------\\
const kanal = new MessageEmbed()
.setColor('BLUE')
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setDescription(`${member}  **Başarıyla** **Kayıt oldu** <a:Roversevet:954517423036452914> \n <a:Roversyldz:954517421971079199> **• Kaydı gerçekleştiren yetkili**  ${message.author} \n <a:Roverspanda:954522753950687232> **• Verilen rol!**  <@&${erkekrole}> <a:Roversuzgun:954526866939707433> **• Alınan rol!**  <@&${kayıtsızrole}> `)
client.channels.cache.get(channels).send(`> **${member} aramıza katıldın bizde seni bekliyorduk.**`)
client.channels.cache.get(channels).send(kanal)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['e', 'E', 'Kadın', 'man ', 'Man'],
  permLevel: 0
}

exports.help = {
  name: 'erkek',
     cooldown: 5 
};