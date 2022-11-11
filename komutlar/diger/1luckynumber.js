const Discord = require("discord.js");
module.exports = {
    config: {
        name: "luckynumber",
        aliases: ["sanslisayi", "şanslısayı","şanslisayi"],
        description: "",
        kategori: "diger"

    },
  
    run: async (client, message, args) => {
  message.channel.send("**:stars: Şanslı Sayını Buluyorum! 🎇**").then(message => {
    var espriler = [
      ":partying_face: Senin Şanslı Sayın 14 🎲",
      ":partying_face: Senin Şanslı Sayın 1 🎲",
      ":partying_face: Senin Şanslı Sayın 2 🎲",
      ":partying_face: Senin Şanslı Sayın 3 🎲",
      ":partying_face: Senin Şanslı Sayın 4 🎲",
      ":partying_face: Senin Şanslı Sayın 5 🎲",
      ":partying_face: Senin Şanslı Sayın 6 🎲",
      ":partying_face: Senin Şanslı Sayın 7 🎲",
      ":partying_face: Senin Şanslı Sayın 8 🎲",
      ":partying_face: Senin Şanslı Sayın 9 🎲",
      ":partying_face: Senin Şanslı Sayın 10 🎲",
      ":face_with_hand_over_mouth: Senin Şanslı Sayın Yok 😔 ",
      ":partying_face: Senin Şanslı Sayın 11 🎲",
      ":partying_face: Senin Şanslı Sayın 12 🎲",
      ":partying_face: Senin Şanslı Sayın 13 🎲",
      ":partying_face: Senin Şanslı Sayın 14 🎲"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    setTimeout(() => {
    message.edit(`${espri}`)
    }, 3000)
  });}}