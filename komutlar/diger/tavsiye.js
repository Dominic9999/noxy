const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "tavsiye",
        aliases: ["tavsiye","şikayet"],
        kategori: "diger",
        description: "Bot geliştiricilerine tavsiyede bulunursunuz.",
    },
    run: async (client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const cmfhata = new Discord.EmbedBuilder()
            .setDescription(`**Öncelikle şikayetini/tavsiyeni girmen gerekiyor.**`)
            .setColor('#42df7b')
            return message.channel.send({ embeds: [cmfhata] })
        }

        // Zaman
        var zaman = new Date(); 
        var codemarefizaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun İnvitesi İçin
      message.channel.send("**<a:yes:1012045937968951328> Tavsiyeniz başarıyla geliştiricilere iletildi.**");
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const codemarefisikayet = new Discord.EmbedBuilder()
                .setDescription(`
                    **${message.guild.name}** adlı sunucudan ${message.author} kişi bot hakkında tavsiyede bulundu, edilen tavsiye - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('#42df7b')
                .setTitle(`**Yeni bir tavsiye var!**`)

                  client.channels.cache.get('1004066820677976075').send({ embeds: [codemarefisikayet] })
            })

        }}}  