const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    config: {
        name: "destek",
        aliases: ["destek","desteksunucusu"],
        kategori: "diger",
        description: "Botun destek sunucusunu atar.",
    },
    run: async (client, message, args) => {
         const embed = new EmbedBuilder()
        .setColor("#42df7b")
        .setAuthor({ name: "Noxy"})
        .setDescription("```Destek sunucumuza katılmak için butona bas!```")
        .setTimestamp()
        .setFooter({ text: `${message.author.tag} Tarafından Kullanıldı.`, iconURL: message.author.displayAvatarURL()});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Destek Sunucumuz;")
                    .setURL(`https://discord.gg/MVWmGaDxVC`)
                    .setEmoji("👤")
                    .setStyle(ButtonStyle.Link)
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}
