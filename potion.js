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

//////////////////////////////////////////////////////
///       CRAFTING POTIONS            ////////////////
//////////////////////////////////////////////////////

/*Relicym\'s Balm Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!relicym'){
     message.channel.send('__**Relicym\'s Balm Recipe**__\n'+
                          'Rogue\'s Purse & Snake Weed.\n'+
                          'Req Herb Lvl: 8.')
     
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
   if (message.content == '!guthix rest'){
     message.channel.send('__**Guthix Rest Recipe**__\n'+
                          'Harralander & Marrentill.\n'+
                          'Req Herb Lvl: 18.')
     
     
   }
 });

/*Guam Tar Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!guam tar'){
     message.channel.send('__**Guam Tar Recipe**__\n'+
                          'Guam & Swamp Tar.\n'+
                          'Req Herb Lvl: 19.')
     
   }
 });

/*Guthix Balance Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!guthix balance'){
     message.channel.send('__**Guthix Balance Recipe**__\n'+
                          'Restore Potion \(3) Garlic & Silver Dust.\n'+
                          'Req Herb Lvl: 22.')
     
   }
 });

/*Blamish Oil Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!blamish'){
     message.channel.send('__**Blamish Oil Recipe**__\n'+
                          'Harralander & Blamish Snail Slime.\n'+
                          'Req Herb Lvl: 25.')
     
   }
 });

/*Energy Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!energy'){
     message.channel.send('__**Energy Potion Recipe**__\n'+
                          'Harralander & Chocolate.\n'+
                          'Req Herb Lvl: 26.')
     
   }
 });

/*Marrentill Tar Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!marrentill tar'){
     message.channel.send('__**Marrentill Tar Recipe**__\n'+
                          'Marrentill & Swamp Tar.\n'+
                          'Req Herb Lvl: 31.')
     
   }
 });

/*Super Fishing Explosive Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!super fishing explosive'){
     message.channel.send('__**Super Fishing Explosive Recipe**__\n'+
                          'Guam & Rubium.\n'+
                          'Req Herb Lvl: 31.')
     
   }
 });

/*Agility Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!agility potion'){
     message.channel.send('__**Agility Potion Recipe**__\n'+
                          'Toadflax & Toad\'s Legs.\n'+
                          'Req Herb Lvl: 34.')
     
   }
 });

/*Tarromin Tar Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!tarromin tar'){
     message.channel.send('__**Tarromin Tar Recipe**__\n'+
                          'Tarromin & Swamp Tar.\n'+
                          'Req Herb Lvl: 39.')
     
   }
 });

/*Summoning Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!summoning potion'){
     message.channel.send('__**Summoning Potion Recipe**__\n'+
                          'Spirit Weed & Cockatrice Egg.\n'+
                          'Req Herb Lvl: 40.')
     
   }
 });

/*Crafting Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!crafting potion'){
     message.channel.send('__**Crafting Potion Recipe**__\n'+
                          'Wergali & Frog Spawn.\n'+
                          'Req Herb Lvl: 42.')
     
   }
 });

/*Harralander Tar*/
 bot.on('message', (message) =>{
   if (message.content == '!harralander tar'){
     message.channel.send('__**Harralander Tar Recipe**__\n'+
                          'Harralander & Swamp Tar.\n'+
                          'Req Herb Lvl: 44.')
     
   }
 });

/*Vial of Stench Recipe*/
 bot.on('message', (message) =>{
     if (message.content == '!vial of stench'){
       message.channel.send('__**Vial of Stench Recipe**__\n'+
                            'Irit & Chopped Onion.\n'+
                            'Req Herb Lvl: 46.')
       
       
     
     }
   });

/*Goblin Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!goblin potion'){
     message.channel.send('__**Goblin Potion Recipe**__\n'+
                          'Toadflax & Pharmakos Berries.\n'+
                          'Req Herb Lvl: 37.')
     
   }
 });
//////////////////////////////////////////////////////
///       COMBAT POTIONS            ////////////////
//////////////////////////////////////////////////////
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
   if (message.content == '!attack potion'){
    message.channel.send('__**Attack Potion Recipe**__\n'+
                         'Guam & Eye of Newt.\n'+
                         'Req Herb Lvl: 1.')
   }
 });

 /*Ranging potion Recipe*/
  bot.on('message', (message) =>{
    if (message.content == '!ranging potion'){
     message.channel.send('__**Ranging Potion Recipe**__\n'+
                          'Guam & Redberrys.\n'+
                          'Req Herb Lvl: 3.')
      
    }
  });

/*Magic Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!magic potion'){
     message.channel.send('__**Magic Potion Recipe**__\n'+
                          'Tarromin & Black, Red, Yellow, and White Beads.\n'+
                          'Req Herb Lvl: 5.')
     
   }
 });

/*Strength Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!strength potion'){
     message.channel.send('__**Strenghth Potion Recipe**__\n'+
                          'Tarromin & Limpwurt Root.\n'+
                          'Req Herb Lvl: 7.')
     
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

/*Restore Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!restore'){
     message.channel.send('__**Restore Potion Recipe**__\n'+
                          'Harralander & Red Spiders\' Eggs.\n'+
                          'Req Herb Lvl: 22.')
     
   }
 });

/*Combat Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!combat'){
     message.channel.send('__**Combat Potion Recipe**__\n'+
                          'Harralander & Goat Horn Dust.\n'+
                          'Req Herb Lvl: 36.')
     
   }
 })

/*Prayer Potion Recipe*/
 bot.on('message', (message) =>{
   if (message.content == '!prayer potion'){
     message.channel.send('__**Prayer Potion Recipe**__\n'+
                          'Ranarr & Snape Grass.\n'+
                          'Req Herb Lvl: 38.')
     
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
