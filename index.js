const Discord = require('discord.js');
const bot =  new Discord.Client();

/*Boss guides*/
//All bosses guides commands start with ~boss (bossname)
//~boss alone will display a list of all the bosses
bot.on('message', (message) =>{
  if (message.content == '~boss'){
    message.channel.send('Specify which boss with boss-bossname: \n\n'+
                          '__**Low-Level Bosses**__\n'+
                          'Chaos Elemental: boss-chaos\n'+
                          'Dagannoth Kings: boss-dag\n'+
                          'Giant Mole: boss-mole\n'+
                          'Kalphite Queen: boss-kq\n'+
                          'Exiled Kalphite Queen: boss-ekq\n'+
                          'King Black Dragon: boss-kbd\n'+
                          'The Barrows Brothers: boss-barrows\n'+
                          'TzTok-Jad: boss-jad\n\n'+
                          '__**God Wars Dungeon**__\n'+
                          'Kree’arra (Armadyl): boss-kree\n'+
                          'General Graardor (Bandos): boss-graar\n'+
                          'Commander Zilyana (Saradomin): boss-zil\n'+
                          'K’ril Tsutsaroth (Zamorak): boss-kril\n'+
                          'Nex (Zaros): boss-nex\n\n'+
                          '__**Medium-Level Bosses**__\n'+
                          'Corporeal Beast: boss-corp\n'+
                          'Har-aken: boss-aken\n'+
                          'Legiones: boss-legiones\n'+
                          'Queen Black Dragon: boss-qbd\n'+
                          'Kalphite King: boss-kk\n\n'+
                          '__**God Wars Dungeon 2**__\n'+
                          'Gregorovic (Sliske): boss-greg\n'+
                          'Helwyr (Seren): boss-helwyr\n'+
                          'Twin Furies (Zamorak): boss-twins\n'+
                          'Vindicta & Gorvek (Zaros): boss-vinny\n\n'+
                          '__**High-Level Bosses**__\n'+
                          'Araxxor: boss-rax\n'+
                          'Barrows, Rise of the Six: boss-rots\n'+
                          'Telos: boss-telos\n'+
                          'Vorago: boss-vorago\n\n'+
                          '__**Raids**__\n'+
                          'Beastmaster: boss-bm\n'+
                          'Yakamaru: boss-yaka\n');
      }
    });
///////////////////////////////////////////////////
//Boss Library
///////////////////
/*Chaos Elemental*/
bot.on('message', (message) =>{
  if (message.content == '~boss-chaos'){
    message.channel.send('__**Chaos Elemental**__\n'+
                          'The Chaos Elemental dwells in the members-only section of the Wilderness, just west of the Rogues Castle.' +
                          ' This area is moderately easy to access from the deep Wilderness teleport lever in Ardougne or Edgeville.'+
                          ' A Wilderness Obelisk can randomly teleport players southeast of the Rogues Castle.'+
                          ' For a strategy guide visit http://runescape.wikia.com/wiki/Chaos_Elemental/Strategies\n\n' +
                          '__Preffered Combat Style__: Range\n\n'+
                          '__Gear Setup__:\n'+
                          'Expensive  |  Cheap \n'+
                          'Crystal bow/Royal crossbow > Black salamander\n'+
                          'Demon slayer circlet > Royal dragonhide coif\n'+
                          'Demon slayer torso > Royal dragonhide body\n'+
                          'Demon slayer skirt > Royal dragonhide chaps\n'+
                          'Royal spiky vambraces\n'+
                          'Turoth boots\n'+
                          'Saradomins murmur > Amulet of glory\n'+
                          'Max cape > Skill cape');
  }
});

///////////////////
/*Chaos Elemental*/
bot.on('message', (message) =>{
  if (message.content == '~boss-dag'){
    message.channel.send('__**Dagannoth Kings**__\n'+
                          ' The Dagannoth Kings are a group of three dagannoths that live deep in the cave on Waterbirth Island.' +
                          ' They are each level 303, and also represent the combat triangle.'+
                          ' Each of them uses a different combat style, and is weak against the type that defeats them on the combat triangle, and immune to all others.'+
                          ' For a strategy guide visit http://runescape.wikia.com/wiki/Dagannoth_Kings/Strategies\n\n' +
                          '__Preffered Combat Style__: Hybrid\n\n'+
                          '__Gear Setup__:\n'+
                          'Expensive  |  Cheap \n'+
                          'Crystal bow/Royal crossbow > Black salamander\n'+
                          'Demon slayer circlet > Royal dragonhide coif\n'+
                          'Demon slayer torso > Royal dragonhide body\n'+
                          'Demon slayer skirt > Royal dragonhide chaps\n'+
                          'Royal spiky vambraces\n'+
                          'Turoth boots\n'+
                          'Saradomins murmur > Amulet of glory\n'+
                          'Max cape > Skill cape');
  }
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Clue Scroll messages*/
bot.on('message', (message) =>{
  if (message.content == '~cluescroll'){
    message.channel.send('Please specify what you are looking for \ncluescroll-strategy \ncluescroll-easy \ncluescroll-medium \ncluescroll-hard \ncluescroll-elite');
  }
});

bot.on('message', (message) =>{
  if (message.content == '~cluescroll-strategy'){
    message.channel.sendMessage('Link to Strategy Guide: http://runescape.wikia.com/wiki/Treasure_Trails#Types_of_clues');
  }
});
bot.on('message', (message) =>{
  if (message.content == '~cluescroll-easy' ){
    message.channel.sendMessage('Easy Clue Scroll: http://runescape.wikia.com/wiki/Clue_scroll_(easy)');
  }
});
bot.on('message', (message) =>{
  if (message.content == '~cluescroll-medium'){
    message.channel.sendMessage('Medium Clue Scroll: http://runescape.wikia.com/wiki/Clue_scroll_(medium)');
  }
});
bot.on('message', (message) =>{
  if (message.content == '~cluescroll-hard'){
    message.channel.sendMessage('Hard Clue Scroll: http://runescape.wikia.com/wiki/Clue_scroll_(hard)');
  }
});
bot.on('message', (message) =>{
  if (message.content == '~cluescroll-elite'){
    message.channel.sendMessage('Elite Clue Scroll: http://runescape.wikia.com/wiki/Clue_scroll_(elite)');
  }
});

bot.on('message', (message) =>{
  if (message.content == '^help'){
    message.channel.sendMessage('Please http://runescape.wikia.com/wiki/Clue_scroll');
  }
});

bot.login('#');
