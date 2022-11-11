
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '!'
module.exports = client => {


var oyun = [
      `${client.guilds.cache.size} sunucu, ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} kullanıcıya hizmet veriyoruz!`,
      `${prefix}yardım | ${prefix}help | ${prefix}destek ${prefix}site`,
      `noxy.rf.gd`
  
];
 setInterval(function() {
   var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
client.user.setStatus("online")
client.user.setActivity(oyun[random], "");
}, 2 * 5000);}