const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://therules.org/wp-content/uploads/2017/10/LogoHorizontal.png');
hook.send(`📢 \`${message.guild.name}\` **Sunucu Kurallar**

\`¤\` **Reklam** Sunucu **İçi** Yasaktır. **(Yetkililere bildirmelisiniz.)**
\`¤\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** Yasaktır.
\`¤\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak Yasaktır.
\`¤\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı Yasak.
\`¤\` **Cinsel içerikli** görseller paylaşmak Yasaktır.
\`¤\` **Spam**, **flood** ve **caps** Yasaktır.

\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};