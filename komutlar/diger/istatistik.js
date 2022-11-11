const {
  Discord,
  MessageEmbed,
  Permissions,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  EmbedBuilder,
  Colors,
  version,
} = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
module.exports = {
    config: {
        name: "istatistik",
        description: "Bot istatistikleri!",
        kategori: "diger",
        aliases: ["istatistik","stats"]
    },

    run: async (client, message, args) => {
  const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new EmbedBuilder()
      .setColor("#42df7b")
    .setAuthor({
      name: "Bot İstatistikleri;",
      iconURL: client.user.avatarURL(),
    })
 
    .setDescription(
      `
 
  📊 Toplam Kullanıcı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}**
  📊 Toplam Sunucu: **${client.guilds.cache.size}**
  📊 Toplam Kanal: **${client.channels.cache.size}**
  📊 Hafıza Kullanımı: **${(
    process.memoryUsage().heapUsed /
    1024 /
    512
  ).toFixed(2)}Mb**
  📊 Uptime: **${Uptime}**
 
  📊 NodeJS Sürümü: **${process.version}**
  📊 DiscordJS Sürümü: **${version}**`
    )
    .setFooter({
      text: `Noxy`,
      iconURL: message.member.displayAvatarURL({ dynamic: true }),
    })
    .setColor('#42df7b');
  message.reply({ embeds: [embed] });
}}