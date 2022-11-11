const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    config: {
        name: "site",
        aliases: ["site","botsite"],
        kategori: "diger",
        description: "Botun sitesine atar.",
    },
    run: async (client, message, args) => {
         const embed = new EmbedBuilder()
        .setColor("#42df7b")
        .setAuthor({ name: "Noxy"})
        .setDescription("```Sitemize gitmek için tıklayın.```")
        .setTimestamp()
        .setFooter({ text: `${message.author.tag} Tarafından Kullanıldı.`, iconURL: message.author.displayAvatarURL()});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Sitemiz;")
                    .setURL(`https://noxy.rf.gd`)
                    .setEmoji("🤖")
                    .setStyle(ButtonStyle.Link)
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}
