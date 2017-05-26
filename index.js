const Discord = require('discord.js');
const bot =  new Discord.Client();
bot.setMaxListeners(500);

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
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/Chaos_Elemental/Strategies>\n\n' +

                          '__Preffered Combat Style__: Range\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Demon slayer circlet > Royal dragonhide coif\n'+
                          'Saradomins murmur > Amulet of glory\n'+
                          'Demon slayer torso > Royal dragonhide body\n'+
                          'Demon slayer skirt > Royal dragonhide chaps\n'+
                          'Royal spiky vambraces\n'+
                          'Turoth boots\n'+
                          'Max cape > Skill cape\n\n'+

                          '__*2h Weapon*__\n'+
                          'Crystal bow/Royal crossbow > Black salamander\n');

  }

});

///////////////////
/*Dagannoth Kings*/
bot.on('message', (message) =>{
  if (message.content == '~boss-dag'){
    message.channel.send('__**Dagannoth Kings**__\n'+
                          'The Dagannoth Kings are a group of three dagannoths that live deep in the cave on Waterbirth Island.' +
                          ' They are each level 303, and also represent the combat triangle.'+
                          ' Each of them uses a different combat style, and is weak against the type that defeats them on the combat triangle, and immune to all others.'+
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/Dagannoth_Kings/Strategies>\n\n' +

                          '__Preffered Combat Style__: Magic/Range Hybrid\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Seasingers hood/Death lotus hood > Virtus mask/Pernix cowl > Ganodermic visor/Armadyl helmet\n'+
                          'Amulet of souls > Amulet of fury\n'+
                          'Sea singers robe top/Death lotus chestplate > Virtus robe top/Pernix body > Ganodermic poncho/Armadyl chestplate\n'+
                          'Sea singer robe/Death lotus chaps > Virtus robe/Pernix chaps > Ganodermic leggings/Armadyl chainskirt\n'+
                          'Automaton gloves > Dominion tower gloves	> Nex gloves\n'+
                          'Fremennik sea boots 4 > Glacor boots > Nex boots\n'+
                          'Max cape > Skill cape\n\n' +

                          '__*2h Weapon*__\n'+
                          'Noxious staff/Noxious longbow >	Chaotic staff/Zaryte bow >	Armadyl battlestaff/Royal crossbow\n'+
                          '__*Dual Wield*__\n'+
                          'Seismic set/Ascension crossbow set> Virtus wand/Death lotus dart > Abyssal wand/Chaotic crossbow');
  }
});

/*Giant Mole*/
bot.on('message', (message) =>{
if (message.content == '~boss-mole'){
message.channel.send('__**Giant Mole**__\n'+
                      'The Giant mole is found in Falador Mole Lair below Falador Park.'+
                      ' She is designed to be an introductory boss for low-mid level players around 60 combat level.'+
                      ' While the mole is not very strong, the special attacks can potentially kill unprepared players. It is one of the lowest levelled bosses to drop elite clue scrolls making this a very popular monster for players.'+
                      ' For a strategy guide visit <http://runescape.wikia.com/wiki/Giant_mole/Strategies>\n\n'+

                      '__Preferred Combat Style__: Magic\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Ganodermic Visor/Hood of Subjugation/Ahrim\'s Hood\n'+
                      'Arcane Stream Necklace/Saradomin\'s Hiss/Amulet of Fury/Dragon Rider Amulet/Amulet of Glory\n'+
                      'Ganodermic Poncho/Garb of Subjugation/Ahrim\'s Robe Top\n'+
                      'Ganodermic Leggings/Gown of Subjugation/Ahrim\'s Robe Skirt\n'+
                      'Spellcaster Gloves/Culinaromancer\'s Gloves 10/Ganodermic Gloves\n'+
                      'Ragefire Boots/Ganodermic Boots\n'+
                      'Max Cape/Skill Cape/Obsidian cape\n\n'+

                      '__*2h Weapons*__\n'+
                      'Noxious Staff>Chaotic Staff>Armadyl Battlestaff\n'+
                      '__*Dual Wielded Weapons*__\n'+
                      'Virtus Wand & Book/Abyssal Wand & Orb/Wand of Treachery & Grifolic Orb'
                    );
}
});

///////////////////
/*Kalphite Queen*/
bot.on('message', (message) =>{
  if (message.content == '~boss-kq'){
    message.channel.send('__**Kalphite Queen**__\n'+
                          'The entrance to the Kalphite hive is due west of Shantay Pass.' +
                          ' New visitors to the hive will require a rope to climb down the hive.'+
                          ' A second rope will also be required for entrance into the queen\'s room. '+
                          ' You\'ll want two attack styles: Melee for first form and Magic or Ranged for second form.'+
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/Kalphite_Queen/Strategies>\n\n'+

                          '__Preffered Combat Style__: Melee/Range Hybrid\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Warpriest helm > Tetsu helm/Pernix cowl > Bandos helm/Armadyl helmet\n'+
                          'Amulet of souls > Amulet of fury\n'+
                          'Warpriest cuirass > Tetsu platebody/Pernix body > Bandos platebody/Armadyl chestplate\n'+
                          'Warpriest greaves > Tetsu platelegs/Pernix chaps > Bandos tassets/Armadyl chainskirt\n'+
                          'Warpriest gauntlets \n'+
                          'Warpriest boots \n'+
                          'Max cape > Skill cape\n\n'+

                          '__*Dual Wield*__\n'+
                          'Drygore weaponry & Ascension crossbow > Blade of Nymphora/Avaryss & Shadow glaive\n'+
                          '__*2h Weapon*__\n'+
                          'Nox Scythe & Nox bow > Dragon rider lance & Royal crossbow');

  }
});

///////////////////
/*Exiled Kalphite Queen*/
bot.on('message', (message) =>{
  if (message.content == '~boss-ekq'){
    message.channel.send('__**Exiled Kalphite Queen**__\n'+
                          'The Exiled Kalphite Queen is a second version of the Kalphite Queen that is found in the Exiled Kalphite Hive, where the mighty Kalphite King lives.' +
                          ' This Hive is found just north of Menaphos. Players should be aware that the Exiled Kalphite Queen is significantly more difficult to fight than its normal counterpart.'+
                          ' Her stats and life points are higher than those of the regular Queen, but the significant difference lies in the aggressive minions that spawn in the room, which can stack heavy damage over time. '+
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/Kalphite_Queen/Strategies>\n\n' +

                          '__Preffered Combat Style__: Melee/Range Hybrid\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Warpriest helm > Tetsu helm/Pernix cowl > Bandos helm/Armadyl helmet\n'+
                          'Amulet of souls > Amulet of fury\n'+
                          'Warpriest cuirass > Tetsu platebody/Pernix body > Bandos platebody/Armadyl chestplate\n'+
                          'Warpriest greaves > Tetsu platelegs/Pernix chaps > Bandos tassets/Armadyl chainskirt\n'+
                          'Warpriest gauntlets \n'+
                          'Warpriest boots \n'+
                          'Max cape > Skill cape\n\n'+

                          '__*Dual Wield*__\n'+
                          'Drygore weaponry & Ascension crossbow > Blade of Nymphora/Avaryss & Shadow glaive\n'+
                          '__*2h Weapon*__\n'+
                          'Nox Scythe & Nox bow > Dragon rider lance & Royal crossbow');
  }
});

///////////////////
/*King Black Dragon*/
bot.on('message', (message) =>{
if (message.content == '~boss-kbd'){
message.channel.send('__**King Black Dragon**__\n'+
                      'The King Black Dragon (or KBD) is one of the stronger dragons in RuneScape and should not be underestimated.'+
                      ' It drops various sought-after items, such as Hard / Elite clue scrolls, dragon rider boots and gloves, King Black Dragon heads and the elusive draconic visage.'+
                      ' Players with low combat-related levels should avoid fighting the King Black Dragon.'+
                      ' You can access KBD by activating the artifact North of the Edgeville Monastery'+
                      ' If you don\'t have super anti-fires use an anti-dragon shield and an anti-fire with a one handed weapon'+
                      ' For a strategy guide visit <http://runescape.wikia.com/wiki/King_Black_Dragon/Strategies>\n\n'+

                      '__Preferred Combat Style__: Range\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Serenic Mask > Pernix Cowl > Armadyl Helmet\n'+
                      'Amulet of Souls > Amulet of Fury > Saradomin\'s Murmor\n'+
                      'Sirenic Hauberk > Pernix Body > Armadyl Chestplate\n'+
                      'Sirenic Chaps > Death Lotus Chaps > Pernix Chaps > Armadyl Chainskirt\n'+
                      'Ascension Grips > Pernix Gloves > Armadyl Gloves\n'+
                      'Flarefrost Boots > Pernix Boots > Armadyl Boots\n'+
                      'Max Cape > Skill Cape > Obsidian cape\n\n'+

                      '__*2h Weapons*__\n'+
                      'Noxious Bow > Zaryte Bow > RCB\n'+
                      '__*Dual Wielded Weapons*__\n'+
                      'Ascension Crossbows > Glaives > Armadyl Crossbows\n');
}
});

///////////////////
/*Barrows Brothers*/
bot.on('message', (message) =>{
  if (message.content == '~boss-barrows'){
    message.channel.send('__**Barrows Brothers**__\n'+
                          'The Barrows brothers are a collection of powerful wights controlled by the Mahjarrat Sliske.' +
                          ' They are named after the tumuli in which they are buried, found in southern Morytania.'+
                          ' They are fought as bosses during the Barrows and Barrows: Rise of the Six minigames. '+
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/Barrows/Strategies>\n\n' +
                          '__Preffered Combat Style__: Magic\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Warpriest helm > Dragon Rider helm > Akrisae\'s hood\n'+
                          'Dragon Rider amulet > Amulet of fury\n'+
                          'Ganodermic poncho > Garb of subjugation > Grifolic poncho\n'+
                          'Ganodermic leggings > Gown of subjugation > Grifolic leggings\n'+
                          'Culinaromancer\'s gloves 10 > Superior Dragon Rider gloves \n'+
                          'Silverhawk boots > Superior Dragon Rider boots \n'+
                          'Max cape > Skill cape\n\n'+

                          '__*2h Weapon*__\n'+
                          'Armadyl battlestaff > Staff of lights > Polypore staff\n'+
                          '__*Dual Wield*__\n'+
                          'Seismic wand >	Wand of the Cywir elders > Seasinger kiba > Virtus wand');
  }
});

///////////////////
/*TzTok-Jad*/
bot.on('message', (message) =>{
  if (message.content == '~boss-jad'){
    message.channel.send('__**TzTok-Jad**__\n'+
                          'TzTok-Jad is the final boss of and most powerful TzHaar creature in the TzHaar Fight Cave, appearing at wave 63.' +
                          ' To add to the challenge, players must fight TzTok-Jad on their own, without the use of Summoning creatures or a dwarf multicannon for assistance.'+
                          ' Players must also fight 271 other monsters before fighting him, resulting in a high usage of food, potions, ammunition, prayer, etc. '+
                          ' For a strategy guide visit <http://runescape.wikia.com/wiki/TzHaar_Fight_Cave/Strategies>\n\n' +
                          '__Preffered Combat Style__: Range\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >   Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Obsidian helm > Pernix Cowl > Armadyl Helmet\n'+
                          'Amulet of souls > Blood Amulet of fury\n'+
                          'Obsidian platebody > Pernix Body > Armadyl Chestplate\n'+
                          'Obsidian platelegs > Pernix chaps > Armadyl Chainskirt\n'+
                          'Obsidian gloves > Pernix Gloves > Armadyl Gloves \n'+
                          'Obsidian boots > Pernix Boots > Armadyl Boots \n'+
                          'Max cape > Skill cape\n\n'+

                          '__*2h Weapon*__\n'+
                          'Nox > Obliteration > Darkbow\n'+
                          '__*Dual Wield*__\n'+
                          'Ascensions crossbows >	Shadow glaives > vengful kiteshield(switch)');
  }
});

///////////////////
/*Kree'arra*/
bot.on('message', (message)=>{
if (message.content == '~boss-kree'){
message.channel.send('__**Kree\'arra**__\n'+
                      'Kree\'arra is the Armadyl general in the God Wars Dungeon.\n'+
                      ' He has moderate range and mage defence and players can kill it according to their recommended style.'+
                      ' Kree is located in the southwest corner of GWD1, to get to Kree you must have level 70 range \(cannot be boosted\)\n'+
                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Kree%27arra/Strategies>\n\n'+
                      
                      '__Preferred Combat Style__: Range\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Sirenic Mask > Pernix Cowl > Armadyl Helmet\n'+
                      'Amulet of Souls > Farsight Blood Necklace > Farsight Sniper Necklace\n'+
                      'Sirenic Hauberk > Pernix Body > Armadyl Chestplate\n'+
                      'Sirenic Chaps > Pernix Chaps > Armadyl Chainskirt\n'+
                      'Swift Gloves  >Pernix Gloves > Armadyl Gloves\n'+
                      'Pernix Boots > Glaiven Boots > Armadyl Boots\n'+
                      'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                      '__*2h Weapon*__\n'+
                      'Nox bow > Royal crossbow > Black salamander'
                      '__*Dual Wield*__\n'+
                      'Ascensions Crossbows > Shadow glaives > ')
}
});

///////////////////
/*Vindicta*/
bot.on('message', (message)=>{
if (message.content == '~boss-vinny'){
message.channel.send('__**Vindicta**__\n'+
                      'Vindicta is located in the southwest area of The Heart.\n'+
                      'To enter her chamber, the player must get 40 Zarosian killcount, and have 80 Attack.'+
                      ' Players can easily get killcount by visiting nodes that Zarosian groups are attacking or simply kill the ones inside the fortress area.\n'+
                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Vindicta/Strategies>\n\n'+
                      '__Preferred Combat Style__: Melee\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                      'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                      'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                      'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                      'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                      'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                      'Max Cape > Skill Cape > Obsidian Cape\n'+

                      '__*2h Weapon*__\n'+
                      'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                      '__*Dual Wield*__\n'+
                      'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n'
                    );
}
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Clue Scroll messages*/
bot.on('message', (message) =>{
  if (message.content == '~cluescroll'){
    message.channel.sendMessage('Link to Strategy Guide: <http://runescape.wikia.com/wiki/Treasure_Trails#Types_of_clues>');
  }
});


bot.on('message', (message) =>{
  if (message.content == '^help'){
    message.channel.sendMessage('Please http://runescape.wikia.com/wiki/Clue_scroll');
  }
});

bot.login('MzE3MDQ1MjcyOTM5MzMxNTg0.DAg7iA.ZSRNkg8_OVLNtT7uhHD1UC6g5uY');
