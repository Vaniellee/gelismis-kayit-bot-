const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
  let bankapara = db.fetch(`bankapara_${message.author.id}`)
    let miktar = args[0]
      
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankadan çekmek istediğin para miktarını girmelisin!

\`c!çek <miktar || hepsi>\``))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  //-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'all' || args[0] === 'hepsi') {
   if(bankapara === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankadan çekmek için hiç paran yok!`))
db.add(`bankapara_${message.author.id}`, -bankapara)
db.add(`para_${message.author.id}`, bankapara)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Başarılı, bankadan ${bankapara} Rovcoin <a:rovcoin:972225897409155142> çektin!`))
} else {
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))  
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
   if (miktar > bankapara) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Şuan bankanda sadece ${bankapara} Rovcoin <a:rovcoin:972225897409155142> var`))
  
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'hepsi') {
  return;//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
}  else {
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<:yes:775339203105259540> Başarılı, bankadan ${miktar} Rovcoin <a:rovcoin:972225897409155142> çektin!`))
db.add(`para_${message.author.id}`, miktar)
db.add(`bankapara_${message.author.id}`, -miktar) 
  }
}
exports.conf = {
  enabled: true,///== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  guildOnly: false,
  aliases: ["with","cek","withdraw"],
  permLevel: 0
};

exports.help = {
  name: 'çek',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\