 const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js");


module.exports = {
    config: {
        name: "avatar",
        aliases: ["pp", "av","profil"],
        description: "",
        kategori: "diger"

    },
      run: async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
    const embed = new EmbedBuilder()
    .setDescription(`**[PNG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor("#42df7b")
    return message.reply({ embeds: [embed]}).catch(err => {})

}}