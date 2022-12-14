const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js");


module.exports = {
    config: {
        name: "clear",
        aliases: ["sil", "temizle","clear"],
        description: "",
        kategori: "diger"

    },
  
    run: async (client, message, args) => {
     
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({ content: `Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın!` });
  if (!args[0] || isNaN(args[0])) {
    
  const temizle = new Discord.EmbedBuilder()  
  
  .setDescription(`**Temizlenecek mesaj miktarını belirtmelisin!**\n\n Örnek Kullanım : **!sil 10**`)
  .setColor("#000001")
  
  return message.channel.send({ embeds: [temizle] })
  }
  
  message.delete();
  
  let sayi = Number(args[0]);
  let silinen = 0;
  
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
    
  message.channel.bulkDelete(100).then(r => silinen+=r.size);
    
  sayi = sayi-100; 
  };
  
  if (sayi > 0)  message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  
  const sil = new Discord.EmbedBuilder()  
  
  .setDescription(`**\`\`${args[0]}\`\` Adet Mesaj Silindi.**`)
  .setColor("#000001")
  
  return message.channel.send({ embeds: [sil] })
  }}  