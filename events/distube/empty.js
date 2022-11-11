const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`**Sesli kanal boş olduğu için çıkış yaptım.**`)

    queue.textChannel.send({ embeds: [embed] })
}
