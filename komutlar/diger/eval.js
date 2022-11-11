
let owners = ["328469200232382466","951138568183619604"]
const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "eval",
        aliases: ["eval"],
        usage: "(komut)",
        kategori: "diger",
        description: "eval.",
    },
    run: async (client, message, args) => {
  
  if (owners.includes(message.author.id)) {
    if (!args[0] || args[0].includes("token")) {
      return message.delete();
    }
    const code = args.join(" ");
    try {
      var evaled = clean(await eval(code));
      if (evaled.match(new RegExp(`${client.token}`, "g")))
        evaled
          .replace("token", "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**")
          .replace(
            client.token,
            "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
          )
          .replace(
            process.env.PROJECT_INVITE_TOKEN,
            "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
          );
      message.channel.send({ content: 
        `\`\`\`js
${evaled
          .replace(
            client.token,
            "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
          )
          .replace(
            process.env.PROJECT_INVITE_TOKEN,
            "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
          )}\`\`\`` });
    } catch (err) {
      message.channel.send(`\`\`\`js
${err}\`\`\``);
    }

    function clean(text) {
      if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
      text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
    }
  }
}}