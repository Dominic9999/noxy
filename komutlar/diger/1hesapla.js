const Discord = require('discord.js');
const math = require('math-expression-evaluator') //Gereken Modül: math-expression-evaluator
const { EmbedBuilder } = require("discord.js");


module.exports = {
    config: {
        name: "calculate",
        aliases: ["hesap","hesapla"],
        description: "",
        kategori: "diger"

    },
  
    run: async (client, message, args) => {
var soru = args.slice(0).join(' ');

if(!soru) return message.reply('Bir işlem belirtmelisin. **Doğru Kullanım**: !hesapla 2+2')
else {
let cevap;
try {
cevap = math.eval(soru)
} catch(err) {
return message.channel.send('Hatalı işlem: lütfen sadece bilinen tarzda işlem yapınız.')
}

const embed = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Green)
.setTitle('Hesaplama Sonucu')
.setDescription(`**Soru: \`${soru}\`\nCevap: \`${cevap}\`**`)
.setFooter({text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
return message.channel.send({embeds: [embed]})
}


}}  
