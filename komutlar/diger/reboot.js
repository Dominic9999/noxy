const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "reboot",
        aliases: ["reboot","restart"],
        kategori: "diger",
        description: "Botu yeniden başlatır..",
    },
    run: async (client, message, args) => {
  
 if(message.author.id !== "328469200232382466")  return message.channel.send("Bu komutu sadece kodırlar kullanabilir! :wink:")
  
  let x = client.ws.ping + 20
  
let dcs = new EmbedBuilder()
  .setTitle('Noxy Reboot')
  .setDescription("Şu an Noxy'i yeniden başlatmak üzeresin!  ")
  .addFields({name: 'Mevcut Ping Değeri:', value: `**${client.ws.ping}** ms!`}, {name: '__SEÇENEKLER__', value: '**devam** `/` **iptal**'})
  .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
  .setTimestamp()
  .setColor('BLACK')
message.channel.send({embeds: [dcs]}).then(m => {
  
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages({
          filter: filtre,
          max: 1,
          time: 20000,
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
 collected.first().delete()
 m.delete()
 message.reply('İşlemi iptal ettim!')    
     
   }
   if(collected.first().content === "devam") {
 collected.first().delete()
let discordcodeshare = new EmbedBuilder()
  .setTitle('⩥ Reboot')
  .setDescription("Reboot işlemi başarılı.")
  .setTimestamp()
  .setColor('Green')
 m.edit({embeds: [discordcodeshare]})
 
  setTimeout(() => {
   
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
 }, 2000)
   }
  })
})}}