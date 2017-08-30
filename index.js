const Discord = require ('discord.js');
var knockknock = require('knock-knock-jokes');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

var prefix = "!"
// These are the roles to check of a user
// In ideal world, these would be properties of a team object
// IE. InstantGrad.adcAvail.dates... dates being an array
// var adcAvail = [];
// var jungleAvail = [7];
// var midAvail = [];
// var supAvail = [];
// var soloAvail = [];



client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Pong!');
  } else if (msg.content.startsWith(prefix + 'kitten')) {
    msg.reply('Meow hhttps://www.youtube.com/c/KittenAcademy/live');
  } else if (msg.content.startsWith(prefix + 'help')) {
    msg.reply('List of Commands \n !ping - Replies pong \n!avail - Replies with availibility doc. \
      \n!kitten - Kitten Academy link. \n!knockknock - Replies with a random knock-knock joke');
  } else if(msg.content.startsWith(prefix + 'knockknock')){
    msg.reply('\n' + knockknock());
  }
});


client.login('Mjg4Mzg2MjQ2MDQzMTA3MzI5.C59L5w.VSes3CkmGFoptLyCMD0lZ5ciXyE');
// possible replace this with a protected variable instead of actual token