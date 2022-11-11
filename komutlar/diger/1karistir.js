const Discord = require('discord.js');
const funnyWords = require('funny-words');
module.exports = {
    config: {
        name: "mixword",
        aliases: ["kelimekaristir", "karıştır","karistir"],
        description: "",
        kategori: "diger"

    },
  
    run: async (client, message, args, bot) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.channel.send("Karıştırmak istediğin yazıyı girmelisin.")
    message.channel.send(funnyWords(mesaj))
  message.react('✅')
}}