const Discord = require('discord.js');
const bot =  new Discord.Client();

bot.on('message', (message) =>{
  if (message.content == '^cluescroll'){
    message.channel.sendMessage('Here is a link to runewiki for cluescrolls http://runescape.wikia.com/wiki/Clue_scroll');
  }
});

bot.on('message', (message) =>{
  if (message.content == '^moneymaking'){
    message.channel.sendMessage('Here is a couple good money making methods');
  }
});

bot.on('message', (message) =>{
  if (message.content == '^help'){
    message.channel.sendMessage('Please  /n/n/n http://runescape.wikia.com/wiki/Clue_scroll');
  }
});

bot.login('ENTER_USER_TOKEN_HERE');
