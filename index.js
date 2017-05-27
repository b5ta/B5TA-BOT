const Discord = require('discord.js');
const bot =  new Discord.Client();
bot.setMaxListeners(500);

/*Boss guides*/
// All bosses guides commands start with !boss (bossname)
// !boss will display a list of all the bosses
bot.on('message', (message) =>{
  if (message.content == '!boss'){
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

                          // '__**Medium-Level Bosses**__\n'+
                          // 'Corporeal Beast: boss-corp\n'+
                          // 'Har-aken: boss-aken\n'+
                          // 'Legiones: boss-legiones\n'+
                          // 'Queen Black Dragon: boss-qbd\n'+
                          // 'Kalphite King: boss-kk\n\n'+

                          '__**God Wars Dungeon 2**__\n'+
                          'Gregorovic (Sliske): boss-greg\n'+
                          'Helwyr (Seren): boss-helwyr\n'+
                          'Twin Furies (Zamorak): boss-twins\n'+
                          'Vindicta & Gorvek (Zaros): boss-vinny\n\n'

                          // '__**High-Level Bosses**__\n'+
                          // 'Araxxor: boss-rax\n'+
                          // 'Barrows, Rise of the Six: boss-rots\n'+
                          // 'Telos: boss-telos\n'+
                          // 'Vorago: boss-vorago\n\n'+
                          //
                          // '__**Raids**__\n'+
                          // 'Beastmaster: boss-bm\n'+
                          // 'Yakamaru: boss-yaka\n'
                        );
      }
    });

////////////////////////////////////////////////////////////////////////////////////////////////
//Boss Library
///////////////////
/*Chaos Elemental*/
bot.on('message', (message) =>{
  if (message.content == '!boss-chaos'){
    message.channel.send('__**Chaos Elemental**__\n'+
                          'The Chaos Elemental dwells in the members-only section of the Wilderness, just west of the Rogues Castle.' +
                          ' This area is moderately easy to access from the deep Wilderness teleport lever in Ardougne or Edgeville.'+
                          ' A Wilderness Obelisk can randomly teleport players southeast of the Rogues Castle.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Chaos_Elemental/Strategies>\n\n' +

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
  if (message.content == '!boss-dag'){
    message.channel.send('__**Dagannoth Kings**__\n'+
                          'The Dagannoth Kings are a group of three dagannoths that live deep in the cave on Waterbirth Island.' +
                          ' They are each level 303, and also represent the combat triangle.'+
                          ' Each of them uses a different combat style, and is weak against the type that defeats them on the combat triangle, and immune to all others.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Dagannoth_Kings/Strategies>\n\n' +

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

/////////////////
/*Giant Mole*/
bot.on('message', (message) =>{
if (message.content == '!boss-mole'){
message.channel.send('__**Giant Mole**__\n'+
                      'The Giant mole is found in Falador Mole Lair below Falador Park.'+
                      ' She is designed to be an introductory boss for low-mid level players around 60 combat level.'+
                      ' While the mole is not very strong, the special attacks can potentially kill unprepared players.'+
                      ' It is one of the lowest levelled bosses to drop elite clue scrolls making this a very popular monster for players.\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Giant_mole/Strategies>\n\n'+

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
  if (message.content == '!boss-kq'){
    message.channel.send('__**Kalphite Queen**__\n'+
                          'The entrance to the Kalphite hive is due west of Shantay Pass.' +
                          ' New visitors to the hive will require a rope to climb down the hive.'+
                          ' A second rope will also be required for entrance into the queen\'s room. '+
                          ' You\'ll want two attack styles: Melee for first form and Magic or Ranged for second form.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Kalphite_Queen/Strategies>\n\n'+

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
  if (message.content == '!boss-ekq'){
    message.channel.send('__**Exiled Kalphite Queen**__\n'+
                          'The Exiled Kalphite Queen is a second version of the Kalphite Queen that is found in the Exiled Kalphite Hive, where the mighty Kalphite King lives.' +
                          ' This Hive is found just north of Menaphos. Players should be aware that the Exiled Kalphite Queen is significantly more difficult to fight than its normal counterpart.'+
                          ' Her stats and life points are higher than those of the regular Queen,'+
                          ' but the significant difference lies in the aggressive minions that spawn in the room, which can stack heavy damage over time.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Kalphite_Queen/Strategies>\n\n' +

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
if (message.content == '!boss-kbd'){
message.channel.send('__**King Black Dragon**__\n'+
                      'The King Black Dragon (or KBD) is one of the stronger dragons in RuneScape and should not be underestimated.'+
                      ' It drops various sought-after items, such as Hard / Elite clue scrolls, dragon rider boots and gloves, King Black Dragon heads and the elusive draconic visage.'+
                      ' Players with low combat-related levels should avoid fighting the King Black Dragon.'+
                      ' You can access KBD by activating the artifact North of the Edgeville Monastery'+
                      ' If you don\'t have super anti-fires use an anti-dragon shield and an anti-fire with a one handed weapon\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/King_Black_Dragon/Strategies>\n\n'+

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
  if (message.content == '!boss-barrows'){
    message.channel.send('__**Barrows Brothers**__\n'+
                          'The Barrows brothers are a collection of powerful wights controlled by the Mahjarrat Sliske.' +
                          ' They are named after the tumuli in which they are buried, found in southern Morytania.'+
                          ' They are fought as bosses during the Barrows and Barrows: Rise of the Six minigames.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Barrows/Strategies>\n\n' +

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
  if (message.content == '!boss-jad'){
    message.channel.send('__**TzTok-Jad**__\n'+
                          'TzTok-Jad is the final boss of and most powerful TzHaar creature in the TzHaar Fight Cave, appearing at wave 63.' +
                          ' To add to the challenge, players must fight TzTok-Jad on their own, without the use of Summoning creatures or a dwarf multicannon for assistance.'+
                          ' Players must also fight 271 other monsters before fighting him, resulting in a high usage of food, potions, ammunition, prayer, etc.\n\n'+

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

///////////////////     GWD1 BOSSES       ///////////////////////////////////////
/*Kree'arra*/
bot.on('message', (message)=>{
if (message.content == '!boss-kree'){
message.channel.send('__**Kree\'arra**__\n'+
                      'Kree\'arra is the Armadyl general in the God Wars Dungeon.\n'+
                      'He has moderate range and mage defence and players can kill it according to their recommended style.'+
                      ' Kree is located in the southwest corner of GWD1, to get to Kree you must have level 70 range \(cannot be boosted\)\n\n'+

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
                      'Nox bow > Royal crossbow > Black salamander\n'+
                      '__*Dual Wield*__\n'+
                      'Ascensions Crossbows > Shadow glaives > ')
}
});

///////////////////
/*Commander Zilyana*/
bot.on('message', (message)=>{
if (message.content == '!boss-zil'){
message.channel.send('__**Commander Zilyana**__\n'+
                      'Commander Zilyana is the commander of Saradomin\'s forces in the God Wars Dungeon\n'+
                      'She shares the same combat level but has different amounts of life points and max hits as the other God Wars generals.\n'+
                      'She has very high life points, only surpassed by Kree\'arra and Nex.\n'+
                      'Commander Zilyana is located in the southeastern section of GWD1, you must have 70 agility to reach her \(cannot be boosted)\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Commander_Zilyana/Strategies>\n\n'+

                      '__Preferred Combat Style__: Magic\n\n'+

                      '__Gear Setup__:\n'+
                      'More Effective > Less Effective\n\n'+

                      '__*Armour*__\n'+
                      'Tectonic Mask>Superior Seasinger\'s Hood>Virtus Mask\n'+
                      'Amulet of Souls>Arcane Stream Necklace>Dragon Rider Amulet\n'+
                      'Tectonic Robe Top>Superior Seasinger\'s Robe Top>Virtus Robe Top\n'+
                      'Tectonic Robe Bottom>Superior Seasinger\'s Robe Bottom>Virtus Robe Legs\n'+
                      'Celestial Handwraps>Static Gloves>Spellcaster Gloves\n'+
                      'Ragefire Boots>Virtus Boots>Boots of Subjugation\n'+
                      'Max Cape>Skill Cape>Obsidian Cape\n\n'+

                      '__*2h Weapons*__\n'+
                      'Noxious Staff>Staff of Darkness>Attuned Crystal Staff\n'+
                      '__*Dual Wielded Weapons*__\n'+
                      'Seismic Wand & Singularity>Seasinger Kiba & Makigai>Attuned Crystal Wand & Orb\n')
}
});

///////////////////
/*General Graardor*/
bot.on('message', (message)=>{
if (message.content == '!boss-graar'){
message.channel.send('__**General Graardor**__\n'+
                      'General Graardor is one of the most popular of the five God Wars Dungeon bosses to kill, as he is arguably one of the easiest.\n'+
                      'To enter Bandos\'s Stronghold, players must have at least 70 Strength \(cannot be boosted) and a hammer \(tool belt works).\n'+
                      'Bandos\'s Stronghold is located in the northwest corner of the God Wars Dungeon.\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/General_Graardor/Strategies>\n\n'+

                      '__Preferred Combat Style__: Magic\n\n'+

                      '__Gear Setup__:\n'+
                      'More Effective > Less Effective\n\n'+

                      '__*Armour*__\n'+
                      'Tectonic Mask>Superior Seasinger\'s Hood>Anima Core Helm of Seren\n'+
                      'Amulet of Souls>Blood Arcane Stream Necklace> Saradomin\'s Hiss\n'+
                      'Tectonic Robe top>Superior Seasinger\'s Robe Top>Anima Core Body of Seren\n'+
                      'Tectonic Robe Bottom>Superior Seasinger\'s Robe Bottom>Anima Core Legs Seren\n'+
                      'Spellcaster Gloves>Virtus Gloves>Static Gloves\n'+
                      'Ragefire Boots>Virtus Boots>Boots of Subjugation\n'+
                      'Max Cape>Skill Cape>Obsidian Cape\n\n'+

                      '__*2h Weapons*__\n'+
                      'Noxious Staff>Staff of Darkness>Attuned Crystal Staff\n'+
                      '__*Dual Wielded Weapons*__\n'+
                      'Seismic Wand & Singularity>Seasinger Kiba & Makigai>Attuned Crystal Wand & Orb')
  }
});

///////////////////
/*K'ril Tsutsaroth*/
bot.on('message', (message)=>{
if (message.content == '!boss-kril'){
message.channel.send('__**K\'ril Tsutsaroth**__\n'+
                      'K\'ril Tsutsaroth is level 650 with 55,000 life points. He has three different attacks.\n'+
                      'His melee attack does 1200+ damage; his typeless attack does over 5000+ damage and drains prayer, and his magic attack does 1100+ damage.\n'+
                      'Once inside the dungeon, the player must run north and jump across the bridge.\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/K%27ril_Tsutsaroth/Strategies>\n\n'+

                      '__Preferred Combat Style__: Magic\n\n'+

                      '__Gear Setup__:\n'+
                      'More Effective > Less Effective\n\n'+

                      '__*Armour*__\n'+
                      'Tectonic Mask>Superior Seasinger\'s Hood>Anima Core Helm of Seren\n'+
                      'Amulet of Souls>Blood Arcane Stream Necklace> Saradomin\'s Hiss\n'+
                      'Tectonic Robe top>Superior Seasinger\'s Robe Top>Anima Core Body of Seren\n'+
                      'Tectonic Robe Bottom>Superior Seasinger\'s Robe Bottom>Anima Core Legs Seren\n'+
                      'Spellcaster Gloves>Virtus Gloves>Static Gloves\n'+
                      'Ragefire Boots>Virtus Boots>Boots of Subjugation\n'+
                      'Max Cape>Skill Cape>Obsidian Cape\n\n'+

                      '__*2h Weapons*__\n'+
                      'Noxious Staff>Staff of Darkness>Attuned Crystal Staff\n'+
                      '__*Dual Wielded Weapons*__\n'+
                      'Seismic Wand & Singularity>Seasinger Kiba & Makigai>Attuned Crystal Wand & Orb')
  }
});

///////////////////        GWD2 DUNGEON BOSSES     ///////////////////////////////////////////
/*Vindicta*/
bot.on('message', (message)=>{
if (message.content == '!boss-vinny'){
message.channel.send('__**Vindicta**__\n'+
                      'Vindicta is located in the southwest area of The Heart.\n'+
                      'To enter her chamber, the player must get 40 Zarosian killcount, and have 80 Attack.'+
                      ' Players can easily get killcount by visiting nodes that Zarosian groups are attacking or simply kill the ones inside the fortress area.\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Vindicta/Strategies>\n\n'+

                      'For more on this boss enter the command **boss-vinny more**\n\n'+

                      '__Preferred Combat Style__: Melee\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                      'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                      'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                      'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                      'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                      'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                      'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                      '__*2h Weapon*__\n'+
                      'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                      '__*Dual Wield*__\n'+
                      'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n'
                    );
}
});
bot.on('message', (message)=>{
  if (message.content == '!boss-vinny more'){
    message.author.send('__**Vindicta (more)**__\n\n'+

                        '__**PHASE 1**__\n'+
                        'Players should be able to recover the lost health through Soul Split; just remember to flick back to protect/deflect melee to avoid taking large hits.\n'+
                        'After several attacks into the battle, Vindicta will call on Gorvek to unleash dragonfire on her target.'+
                        ' This will deal rapid magic damage of up to 1000 per tick.\n'+
                        'This ability is signified when Vindicta raises her swords into the air. Simply run out of the way of the wall; however, the direction is completely random, so be prepared to take some damage.\n\n'+

                        '__Vindicta\'s attack pattern is as follows:__\n\n'+

                        '**At the start of the fight**\n'+
                        '-Does 2 auto-attacks\n'+
                        '-Hurricane\n\n'+

                        '**Rest of phase 1**\n'+
                        'Does 2 auto-attacks\n'+
                        '-(team only) Does 1 auto-attack\n'+
                        '-(team only) Ranged attack\n'+
                        '-(team only) Does 1 auto-attack\n'+
                        '-Dragonfire wall\n'+
                        '-Does 3 auto-attacks\n'+
                        '-Hurricane\n'+
                        '-Repeat\n\n'+

                        'Once Vindicta falls at half health, phase 2 begins.\n\n'+

                        '__**PHASE 2**__\n'+
                        'If using melee, do not use Assault and/or Destroy while she is mounting him as she gains increased collision size and will move all over the place, cancelling them out.\n'+
                        'Wait a few seconds for Vindicta to settle and come to you before attacking her.\n\n'+

                        '__Vindicta will follow a set attack pattern during this phase__:\n'+
                        '-Melee attack\n'+
                        '-Ranged attack\n'+
                        '-Melee attack\n'+
                        '-Dragonfire attack(aka purple vape #doyouevenvapebro)\n'+
                        '-Repeats\n\n'
                        );

  message.author.send('__Preferred Combat Style__: Melee\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                      'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                      'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                      'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                      'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                      'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                      'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                      '__*2h Weapon*__\n'+
                      'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                      '__*Dual Wield*__\n'+
                      'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Vindicta/Strategies>'
                      );
}
});

////////////////////////////
/*Gregorovic*/
bot.on('message', (message)=>{
  if (message.content == '!boss-greg'){
    message.channel.send('__**Gregorovic**__\n'+
                          'Gregorovic is the general of Sliske\'s army located northeastern area in The Heart, which requires 80 Prayer to enter.\n'+
                          'To enter his chamber, players must kill 40 Sliskean monsters.'+
                          ' Players can easily gain killcount by visiting Sliske\'s Necropolis or by visiting nodes that Sliskean forces are attacking.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Gregorovic/Strategies>\n\n'+

                          'For more on this boss enter the command **boss-greg more**\n\n'+

                          '__Preferred Combat Style__: Melee\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >  Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                          'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                          'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                          'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                          'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                          'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                          'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                          '__*2h Weapon*__(recommended)\n'+
                          'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                          '__*Dual Wield*__\n'+
                          'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n'
                        );
  }
});
bot.on('message', (message)=>{
  if (message.content == '!boss-greg more'){
    message.author.send('__**Gregorovic (more)**__\n\n'+

                        '__**KEY NOTES**__\n'+
                        'Gregorovic, like all the other generals in the Heart, has 200,000 lifepoints. However, he is considered the hardest general because of his accurate and high-damage attacks.\n'+
                        'Gregorovic is capable of poisoning the player in quick intervals with his attacks, though the poison only lasts for about 20 seconds.\n'+
                        'Antipoisons do work, but because the poison piles up quickly, its effects will not last that long. It is recommended to have the venomblood perk. '+
                        'Gregorovic uses normal melee and ranged attacks; he swings his glaives up close for melee and throws them with ranged.\n\n'+


                        '__Gregorvic\'s attack pattern is as follows:__\n\n'+

                        '-3 auto-attacks\n'+
                        '-Trick Knife (3x)\n'+
                        '-3 auto-attacks\n'+
                        '-Summon spirit\n'+
                        '-3 auto-attacks\n'+
                        '-Glaive throw\n'+
                        '-Repeat\n\n'+

                        '__**Trick knife**__\n'+
                        'This will hit three times in total and will bounce between players, even if they are in the lobby area. It will also bounce between shadows if any are present.\n'+
                        'Protect/Deflect Ranged with Devotion or Debilitate are recommended to reduce the damage from this attack, as the knives have 100% accuracy and can hit up to 2300 damage.\n'+
                        'This attack can be melee damage if player is within melee range of Greg.\n\n'+

                        '__**Summon Spirit**__\n'+
                        'Three more attacks after the knife throw, Gregorovic will say "RISE, CHILD!".\n'+
                        'This will summon a Spirit of rage, Spirit of delirium or Spirit of mania from the respective masks depending on where he was when he summoned them.'+
                        'Each spirit will give a different effects to Gregorovic if they touch him without being distracted, to distract the spirit simply attack it.\n\n'+

                        '__**Glaive Throw**__\n'+
                        'Gregorovic will toss both of his glaives into the air. Shadows will appear throughout the arena in a scattered formation.\n'+
                        'After two seconds, daggers and knives will fall from the ceiling and deal up to 1,700 magic damage onto the player if they did not move away from any shadowed spots.'


                      );
  message.author.send('When Gregorovic reaches 140,000 and 60,000 life points, he will summon 2 or three shadows, respectively, onto the field.\n'+
                      'These shadows, just like the spirits, only have 3,000 life points. Their spawn location is completely random as they spawn all over the arena.\n'+
                      'While the shadows are alive, Gregorovic can swap places with the shadow copies, which can interrupt abilities if far away and can allow him to throw melee attacks on the player if a shadow is next to them.\n\n'+

                      '__Preferred Combat Style__: Melee\n\n'+

                      '__**Gear Setup**__:\n'+
                      'More Effective >  Less Effective \n\n'+

                      '__*Armour*__\n'+
                      'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                      'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                      'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                      'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                      'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                      'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                      'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                      '__*2h Weapon*__(recommended)\n'+
                      'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                      '__*Dual Wield*__\n'+
                      'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n\n'+

                      'For a strategy guide visit <http://runescape.wikia.com/wiki/Gregorovic/Strategies>'
                    );
  }
});

////////////////////////////
/*Twin Furies*/
bot.on('message', (message)=>{
  if (message.content == '!boss-twins'){
    message.channel.send('__**Twin Furies**__\n'+
                          'The Twin Furies are located at the north-western corner of The Heart. To enter their chamber,'+
                          ' the player must gain 40 Zamorakian kill count, and have 80 Ranged.\n'+
                          'Switching between protect/deflect melee and soul split is reccomended when fighting twins.'+
                          ' Twin Furies share their health, so a combined total of 200,000 damage on one or both will kill them both even if'+
                          ' they have more life points than the health bar on the top suggests.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Twin_Furies/Strategies>\n\n'+

                          'For more on this boss enter the command **boss-twins more**\n\n'+

                          '__Preferred Combat Style__: Melee(highly recommended)\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >  Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                          'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                          'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                          'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                          'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                          'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                          'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                          '__*2h Weapon*__(recommended)\n'+
                          'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                          '__*Dual Wield*__\n'+
                          'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n'
                      );
  }
});
bot.on('message', (message)=>{
  if (message.content == '!boss-twins more'){
    message.author.send('__**Twin Furies(more)**__\n'+
                          'The Twin Furies are perhaps the easiest of the four generals to most players, as proper use of halberd mechanics, '+
                          'Soul Split and either the Vampyrism aura or scrimshaw allows a player to stay in the instance for the whole duration without having to bank. '+
                          'Using just Soul Split alone will not be enough to recover lost health from their attacks.\n\n'+

                          '__**The Twin Furies use 3 abilities during the fight against the player:**__\n\n'+

                          '__Wall Charge__- Avaryss will jump onto the walls and fly in a straight line, covering a 3x3 area in front of her. She will yell out a random quote before charging. '+
                          'Players who get caught in the charge are knocked into the wall and are dealt with up to 2000 melee damage. Using protect melee here will reduce damage. '+
                          '**Avaryss always follows the set pattern of north to south, west to east, south to north and finally east to west.**\n\n'+

                          '__Ceiling collapse__- Nymora will stand in one of the 4x4 tiles, saying "We will purge them all!" in the process. '+
                          'After a few seconds, she will fly up, becoming unattackable while attacking the ceiling. Stalactites will fall down and deal ranged damage of up to 1000 every three ticks. '+
                          'To avoid taking damage stand right next to or under Nymora as the stalactites do not fall on her location.\n\n'
                          );
    message.author.send('__Channeled Bomb__- Avaryss and Nymora will fly to the centre of the room, and ring of fire will appear in the outer area, dealing up to 2500 damage every few ticks the player(s) are in it. '+
                        'They will channel their powers to create a portal of energy which sends out fire bolts at the player for up to 350 damage per tick. '+
                        'During this process, they will not attack the player and will suffer a **2x damage multiplier** on them.\n'+
                        '__**IMPORTANT**__\n'+
                        'A blue bar will also appear over their heads and will change to orange over time. Once the bar is completely orange, the portal explodes and deals up to 4500 damage to players in its radius. '+
                        'Just a few seconds before the explosion, the outer ring of fire will dissipate leaving just enough time to run away from the explosion.\n\n'+

                        '__The Twin Furies use this attacking pattern:__\n'+
                        'Wall charge\n'+
                        '-Several auto-attacks\n'+
                        '-Ceiling collapse\n'+
                        '-Several auto-attacks\n'+
                        '-Channelled bomb\n'+
                        '-Several auto-attacks\n'+
                        '-Repeat\n\n'+

                        '__Preferred Combat Style__: Melee(highly recommended)\n\n'+

                        '__**Gear Setup**__:\n'+
                        'More Effective >  Less Effective \n\n'+

                        '__*Armour*__\n'+
                        'Malevolent helm	> Torva full helm	> Anima Core helm of Zaros >Superior tetsu helm\n'+
                          'Amulet of souls >	Reaper necklace >	Brawler\'s blood necklace >	Saradomin\'s whisper\n'+
                        'Malevolent cuirass >	Torva platebody >	Anima Core Body of Zaros >	Superior tetsu body\n'+
                        'Malevolent greaves >	Torva platelegs >	Anima Core Legs of Zaros >	Superior tetsu platelegs\n'+
                        'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                        'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                        'Max Cape > Skill Cape > Obsidian Cape\n\n'+

                        '__*2h Weapon*__(recommended)\n'+
                        'Noxious scythe >	Dragon Rider lance >	Attuned crystal halberd >	Chaotic maul\n'+
                        '__*Dual Wield*__\n'+
                        'Drygore weaponry >	Tetsu katana >	Blade of Nymora/Avaryss >	Attuned crystal dagger\n\n'+

                        'For a strategy guide visit <http://runescape.wikia.com/wiki/Twin_Furies/Strategies>'
                      );
}
});
//////////////////////////////
// Helwyr
bot.on('message', (message)=>{
  if (message.content == '!boss-helwyr'){
    message.channel.send('__**Helwyr**__\n'+
                          'Helwyr is located in the southeast area of The Heart. To enter his chamber, the player must get 40 Serenist kill count, and have 80 magic.\n'+
                          'As soon as Helwyr spawns, be prepared to use Surge or Escape, as he will immediately grow three random mushrooms in the chamber.'+
                          ' Helwyr does his abilities in after sequence of 3 auto attacks. Pray Protect/Deflect Melee throughout the fight.\n\n'+

                          'For a strategy guide visit <http://runescape.wikia.com/wiki/Helwyr/Strategies>\n\n'+

                          'For more on this boss enter the command **boss-helwyr more**\n\n'+

                          '__Preferred Combat Style__: Magic(recommended)\n\n'+

                          '__**Gear Setup**__:\n'+
                          'More Effective >  Less Effective \n\n'+

                          '__*Armour*__\n'+
                          'Tectonic mask >	Virtus mask >	Anima Core helm of Seren >	Superior seasinger\'s hood\n'+
                          'Amulet of souls	Reaper necklace	Arcane blood necklace	Saradomin\'s hiss\n'+
                          'Tectonic robe top >	Virtus robe top >	Anima Core body of Seren >	Superior seasinger\'s robe top\n'+
                          'Tectonic robe bottom >	Virtus robe legs >	Anima Core legs of Seren >	Superior seasinger\'s robe bottom\n'+
                          'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                          'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                          'Completionist cape >	TokHaar-Kal-Mej >	Max cape > Skill cape\n\n'+

                          '__*2h Weapon*__(recommended)\n'+
                          'Noxious staff >	Camel staff / Staff of darkness >	Attuned crystal staff >	Chaotic staff\n'+
                          '__*Dual Wield*__\n'+
                          'Seismic wand/singularity >	Seasinger kiba/makigai >	Wand of the Cywir elders/Virtus book >	Attuned crystal wand/orb\n'
                      );
  }
});
bot.on('message', (message)=>{
  if (message.content == '!boss-helwyr more'){
    message.author.send('__**Helwyrs(more)**__\n'+
                        'Helwyr only uses melee attacks which hit up to 1200, unlike the other generals which have multiple combat styles at their disposal. '+
                        'Start off the kill by attacking Helwyr, getting out of the way of any active mushrooms. Continue attacking him until he performs his cleave attack; '+
                        'simply run out of the way to avoid taking damage. '+
                        'If you are low on health, this cleave attack can be resonanced; the cleave attack will always hit (and hit hard).\n\n'+

                        'After three more attacks, Helwyr will use his enrage attack; this can be easily mitigated with Debilitate (after which you move away from him) or Devotion to fully block his damage while attacking him. '+
                        'Use Freedom after his enrage attack ends to clear off the bleed he placed on you.\n\n'+

                        '__He has 4 abilities he will use during the fight:__\n\n'+

                        '-"YOU. WILL. BLEED!" - Helwyr stands upright and slashes at the area in front of him in a cone radius. '+
                        'Players caught in the clawed area will be hit for up to 3000 damage and start taking a bleed of 50. This can be avoided by quickly running right or left of him.\n\n'+

                        '-"You cannot escape me. Aaaargh!"__ - Helwyr leaps over to a nearby player and starts clawing around him. '+
                        'This will deal rapid melee damage of up to 1800 every two ticks and bleed the player for 50. '+
                        'The best way to combat this ise using Devotion negating all melee damage. Once this ability is over use freedom to clear bleeds.\n\n'+

                        '-"Nature, lend me your aid!" - Players should note that Helwyr\'s chamber is littered with mushrooms which align in a 5x5 area. '+
                        'When Helwyr does this, three of the mushrooms will be enlarged and puff out green gas. '+
                        'Players caught in the gas will be dealt with rapid hits of up to 250 every tick and if the player stands too long in them, will be bound for several seconds.\n\n'+

                        '-Howl - Helwyr howls, summoning two Cywir Alphas. They only have 3,000 lifepoints but should be killed anyways to prevent them from sniping resonance heals from Helwyr\'s bleed attack.'
                        )
    message.author.send('\n__**Helwyr follows the set attack pattern:**__\n'+
                        '-"Nature, lend me your aid!" (Grows gas-puffing mushrooms)\n'+
                        '-Does 3 auto-attacks\n'+
                        '-"You. Will. BLEED!" cleave attack\n'+
                        '-Does 3 auto-attacks\n'+
                        '-"You cannot escape me. Aaaargh!" spinning attack\n'+
                        '-Does 3 auto-attacks\n'+
                        '-Spawns Cywir Alphas\n'+
                        '-Does 3 auto-attacks\n'+
                        '-Repeats above sequence\n\n'+

                        '__Preferred Combat Style__: Magic(recommended)\n\n'+

                        '__**Gear Setup**__:\n'+
                        'More Effective >  Less Effective \n\n'+

                        '__*Armour*__\n'+
                        'Tectonic mask >	Virtus mask >	Anima Core helm of Seren >	Superior seasinger\'s hood\n'+
                        'Amulet of souls	Reaper necklace	Arcane blood necklace	Saradomin\'s hiss\n'+
                        'Tectonic robe top >	Virtus robe top >	Anima Core body of Seren >	Superior seasinger\'s robe top\n'+
                        'Tectonic robe bottom >	Virtus robe legs >	Anima Core legs of Seren >	Superior seasinger\'s robe bottom\n'+
                        'Goliath gloves >	Razorback gauntlets >	Torva gloves >	Pneumatic gloves\n'+
                        'Emberkeen boots >	Torva boots >	Steadfast boots >	Bandos boots\n'+
                        'Completionist cape >	TokHaar-Kal-Mej >	Max cape > Skill cape\n\n'+

                        '__*2h Weapon*__(recommended)\n'+
                        'Noxious staff >	Camel staff / Staff of darkness >	Attuned crystal staff >	Chaotic staff\n'+
                        '__*Dual Wield*__\n'+
                        'Seismic wand/singularity >	Seasinger kiba/makigai >	Wand of the Cywir elders/Virtus book >	Attuned crystal wand/orb\n\n'+

                        'For a strategy guide visit <http://runescape.wikia.com/wiki/Helwyr/Strategies>'
                        )
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  WEEEWOOOO COMMAND
bot.on('message', (message) =>{
 if (message.content == '!weewoo'){
   message.channel.send(setTimeout('WEEEEE!!!!!WOOOOOOOO!!!!!!!', Math.floor((Math.random() * 10000) + 1)));
 }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Clue Scroll messages*/
bot.on('message', (message) =>{
  if (message.content == '!cluescroll'){
    message.channel.send('Link to Strategy Guide: <http://runescape.wikia.com/wiki/Treasure_Trails#Types_of_clues>');
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Siphons tutorial*/
bot.on('message', (message) =>{
  if (message.content == '!siphons'){
    message.channel.send('__**Siphons**__\n'+
                          'The equipment siphon is a device that can be created using Invention.'+
                          ' Players need level 27 Invention and 200 inspiration to discover the equipment siphon and must discover the Equipment dissolver first.\n\n'+

                          '__**MATERIALS TO DISSASEMBLE**__\n'+
                          '-Maple logs\n'+
                          '-Magic shortbows(u)\n'+
                          '-Slayer rings\n\n'+

                          '__**Slayer rings**__\n'+
                          'Slayer rings can be crafted with the purchase of the ability to do so from a slayer master. Once this ability is purchased, '+
                          'use an enchanted gem with a gold bar at a furnace to craft a slayer ring. Gold bars, magic shortbows, and maple logs are purchasable from G/E. '+
                          'You can purchase 600 enchanted gems every 24 hours from 2 slayer masters (300 from the slayer master in Taverly, 300 from any other slayer master). '

                          );
  }
});
bot.on('message', (message) =>{
  if (message.content == '!siphon'){
    message.channel.send('__**Siphons**__\n'+
                          'The equipment siphon is a device that can be created using Invention.'+
                          ' Players need level 27 Invention and 200 inspiration to discover the equipment siphon and must discover the Equipment dissolver first.\n\n'+

                          '__**MATERIALS TO DISSASEMBLE**__\n'+
                          '-Maple logs\n'+
                          '-Magic shortbows(u)\n'+
                          '-Slayer rings\n\n'+

                          '__**Slayer rings**__\n'+
                          'Slayer rings can be crafted with the purchase of the ability to do so from a slayer master. Once this ability is purchased, '+
                          'use an enchanted gem with a gold bar at a furnace to craft a slayer ring. Gold bars, magic shortbows, and maple logs are purchasable from G/E. '+
                          'You can purchase 600 enchanted gems every 24 hours from 2 slayer masters (300 from the slayer master in Taverly, 300 from any other slayer master). '

                          );
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          Herblore Recipes
//***********************************************************************************************************
//
//
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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.on('message', (message) =>{
  if (message.content == '!help'){
    message.author.send('__**HELP (COMMAND GUIDE)**__\n\n'+

                        '-~-~-~-~-~-~-~-~-~-~'+
                        '**Welcome to B5TA BOT**'+
                        '-~-~-~-~-~-~-~-~-~-~\n\n'+

                        'Enjoy your wonderful gainz and keep challenging yourself!\n\n'+

                        '-----__**COMANDS**__-----\n'+
                        '(all commands start with !)\n\n\n'+

                        '__BOSSES COMMANDS__\n'+
                        '!boss - List of bosses this bos has\n\n'+

                        '---Low-Level Bosses---\n'+
                        'Chaos Elemental: boss-chaos\n'+
                        'Dagannoth Kings: boss-dag\n'+
                        'Giant Mole: boss-mole\n'+
                        'Kalphite Queen: boss-kq\n'+
                        'Exiled Kalphite Queen: boss-ekq\n'+
                        'King Black Dragon: boss-kbd\n'+
                        'The Barrows Brothers: boss-barrows\n'+
                        'TzTok-Jad: boss-jad\n\n'+

                        '---God Wars Dungeon---\n'+
                        'Kree’arra (Armadyl): boss-kree\n'+
                        'General Graardor (Bandos): boss-graar\n'+
                        'Commander Zilyana (Saradomin): boss-zil\n'+
                        'K’ril Tsutsaroth (Zamorak): boss-kril\n'+
                        'Nex (Zaros): boss-nex\n\n'+

                        // ---Medium-Level Bosses---\n'+
                        // 'Corporeal Beast: boss-corp\n'+
                        // 'Har-aken: boss-aken\n'+
                        // 'Legiones: boss-legiones\n'+
                        // 'Queen Black Dragon: boss-qbd\n'+
                        // 'Kalphite King: boss-kk\n\n'+

                        '---God Wars Dungeon 2---\n'+
                        'Gregorovic (Sliske): boss-greg\n'+
                        'Helwyr (Seren): boss-helwyr\n'+
                        'Twin Furies (Zamorak): boss-twins\n'+
                        'Vindicta & Gorvek (Zaros): boss-vinny\n\n'+

                        // '---High-Level Bosses---\n'+
                        // 'Araxxor: boss-rax\n'+
                        // 'Barrows, Rise of the Six: boss-rots\n'+
                        // 'Telos: boss-telos\n'+
                        // 'Vorago: boss-vorago\n\n'+
                        //
                        // '---Raids---\n'+
                        // 'Beastmaster: boss-bm\n'+
                        // 'Yakamaru: boss-yaka\n'

                        '__POTIONS COMMANDS__\n\n'+
                        'ovl, ovls, overload\n'+
                        'prayer restore\n'+
                        'anti-fire\n'+
                        'super anti-fire\n'+
                        'super restore\n'+
                        'super attack\n'+
                        'super strength\n'+
                        'super defence\n'+
                        'super magic\n'+
                        'super ranging\n'

                        );
  }
});

bot.login('MzE3MDQ1MjcyOTM5MzMxNTg0.DAg7iA.ZSRNkg8_OVLNtT7uhHD1UC6g5uY');
