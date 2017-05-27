/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          Herblore Recipes
//***********************************************************************************************************
//
///*POTION_NAME Recipe*/
//  bot.on('message', (message) =>{
//    if (message.content == '!POTION_NAME'){
//     message.channel.send('__**POTION_NAME Recipe**__\n'+
//                          'POTION_RECIPE.\n'+
//                          'Req Herb Lvl: #.')
//    }
//  });
//
/*Overload Recipe*/
//ovl, ovls, and overload are excepted
bot.on('message', (message) =>{
  if (message.content == '!ovl'){
    message.channel.send('__**Overload Recipe**__\n'+
                          'Irit & Eye of newt > Super attack & Avantoe > Extreme attack\n'+
                          'Kwuarm & Limpwurt root> Super strength & Dwarf weed > Extreme strength\n'+
                          'Cantadine & White Berries > Super defence & Lantadyme > Extreme defence\n'+
                          'Dwarfweed & Wine of zammy > Super ranging & 5 Grenwall spikes > Extreme range\n'+
                          'Lantadyme & Patato cactus > Super magic & Ground mud runes > Extreme magic\n'+
                          'Extreme strength & Extreme attack & Extreme defence & Extreme range & Extreme magic > Overload')

  }
});
//aliases
bot.on('message', (message) =>{
  if (message.content == '!ovls'){
    message.channel.send('__**Overload Recipe**__\n'+
                          'Irit & Eye of newt > Super attack & Avantoe > Extreme attack\n'+
                          'Kwuarm & Limpwurt root> Super strength & Dwarf weed > Extreme strength\n'+
                          'Cantadine & White Berries > Super defence & Lantadyme > Extreme defence\n'+
                          'Dwarfweed & Wine of zammy > Super ranging & 5 Grenwall spikes > Extreme range\n'+
                          'Lantadyme & Patato cactus > Super magic & Ground mud runes > Extreme magic\n'+
                          'Extreme strength & Extreme attack & Extreme defence & Extreme range & Extreme magic > Overload')

  }
});
//aliases
bot.on('message', (message) =>{
  if (message.content == '!overload'){
    message.channel.send('__**Overload Recipe**__\n'+
                          'Irit & Eye of newt > Super attack & Avantoe > Extreme attack\n'+
                          'Kwuarm & Limpwurt root> Super strength & Dwarf weed > Extreme strength\n'+
                          'Cantadine & White Berries > Super defence & Lantadyme > Extreme defence\n'+
                          'Dwarfweed & Wine of zammy > Super ranging & 5 Grenwall spikes > Extreme range\n'+
                          'Lantadyme & Patato cactus > Super magic & Ground mud runes > Extreme magic\n'+
                          'Extreme strength & Extreme attack & Extreme defence & Extreme range & Extreme magic > Overload')

  }
});

/*Attack potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!attack'){
    message.channel.send('__**Attack Potion Recipe**__\n'+
                         'Guam & Eye of Newt.\n'+
                         'Req Herb Lvl: 1.')
   }
 });

 /*Ranging potion Recipe*/
  bot.on('message', (message) =>{
    if (message.content == '!ranging'){
     message.channel.send('__**Ranging Potion Recipe**__\n'+
                          'Guam & Redberrys.\n'+
                          'Req Herb Lvl: 3.')
      
    }
  });

/*Magic Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!magic'){
     message.channel.send('__**Magic Potion Recipe**__\n'+
                          'Tarromin & Black, Red, Yellow, and White Beads.\n'+
                          'Req Herb Lvl: 5.')
     
   }
 });

/*Strength Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!strength'){
     message.channel.send('__**Strenghth Potion Recipe**__\n'+
                          'Tarromin & Limpwurt Root.\n'+
                          'Req Herb Lvl: 7.')
     
   }
 });

/*Relicym\'s Balm Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!relicym'){
     message.channel.send('__**Relicym\'s Balm Recipe**__\n'+
                          'Rogue\'s Purse & Snake Weed.\n'+
                          'Req Herb Lvl: 8.')
     
   }
 });

/*Defence Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!defence'){
     message.channel.send('__**Defence Potion Recipe**__\n'+
                          'Marrentill & Bear Fur.\n'+
                          'Req Herb Lvl: 9.')
     
   }
 });

/*Antipoison Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!antipoison'){
     message.channel.send('__**Antipoison Recipe**__\n'+
                          'Marrentill & Unicorn Horn Dust.\n'+
                          'Req Herb Lvl: 13.')
     
   }
 });

/*Serum 207 Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!serum'){
     message.channel.send('__**Serum 207 Recipe**__\n'+
                          'Tarromin & Ashes.\n'+
                          'Req Herb Lvl: 15.')
     
   }
 });

/*Guthix Rest Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!guthixrest'){
     message.channel.send('__**Guthix Rest Recipe**__\n'+
                          'Harralander & Marrentill.\n'+
                          'Req Herb Lvl: 18.')
  
     
      
     }
   });

/*Prayer restore recipe*/
bot.on('message', (message) =>{
  if (message.content == '!prayer restore'){
    message.channel.send('__**Prayer Restore Recipe**__\n'+
                        'Rannar & Snape grass.\n'+
                        'Req Herb Lvl: 38.')
  }
});

/*Anti-fire potion recipe*/
bot.on('message', (message) =>{
  if (message.content == '!anti-fire'){
    message.channel.send('__**Anti-fire Recipe**__\n'+
                          'Lantadyme & Ground blue dragon scale.\n'+
                          'Req Herb Lvl: 69.')
  }
});

/*Super Anti-fire potion recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super anti-fire'){
    message.channel.send('__**Super Anti-fire Recipe**__\n'+
                          'Anti-fire & Desert pheonix feather.\n'+
                          'Req Herb Lvl: 85.')
  }
});

/*Super Restore potion recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super restore'){
    message.channel.send('__**Super Restore Recipe**__\n'+
                          'Snapdragon & Red spider eggs.\n'+
                          'Req Herb Lvl: 63.')
  }
});


/*Super attack Recipe*/
bot.on('message', (message) =>{
    if (message.content == '!super attack'){
      message.channel.send('__**Super Attack Recipe**__\n'+
                            'Irit & Eye of newt.\n'+
                            'Req Herb Lvl: 45.')
  }
});

/*Super strength Recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super strength'){
    message.channel.send('__**Super Strength Recipe**__\n'+
                          'Kwuarm & Limpwurt root.\n'+
                          'Req Herb Lvl: 55.')
  }
});

/*Super defence Recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super defence'){
    message.channel.send('__**Super Strength Recipe**__\n'+
                          'Cantadine & White Berries.\n'+
                          'Req Herb Lvl: 66.')
  }
});

/*Super ranging Recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super ranging'){
    message.channel.send('__**Super Ranging Recipe**__\n'+
                          'Dwarfweed & Wine of zammy.\n'+
                          'Req Herb Lvl: 72.')
  }
});
/*Super ranging Alias*/
bot.on('message', (message) =>{
  if (message.content == '!super range'){
    message.channel.send('__**Super Ranging Recipe**__\n'+
                          'Dwarfweed & Wine of zammy.\n'+
                          'Req Herb Lvl: 72.')
  }
});

/*Super Magic Recipe*/
bot.on('message', (message) =>{
  if (message.content == '!super magic'){
    message.channel.send('__**Super Magic Recipe**__\n'+
                          'Lantadyme & Patato cactus.\n'+
                          'Req Herb Lvl: 76.')
  }
});
