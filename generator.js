
let characterName = '';
let characterNickName = '';
let characterClass = '';
let characterVigour = -10;
let characterSpirit = -10;
let characterSwiftness = -10;
let characterResilience = -10;
let randomColor;

let classHP = {
    "Forgotten Ronin":8,
    "Erudite Samurai":8,
    "Drunken Monk":8,
    "Corrupted Shinobi":8,
    "Onmyoji":8,
    "Bakuto":10,
    "Yamabushi":8,
    "Wild Dancer":8,
    "Reckless Sumo":12,
    "Sword Saint":8,
};

let classVirtues = {
    "Forgotten Ronin":2,
    "Erudite Samurai":3,
    "Drunken Monk":4,
    "Corrupted Shinobi":2,
    "Onmyoji":4,
    "Bakuto":4,
    "Yamabushi":4,
    "Wild Dancer":2,
    "Reckless Sumo":3,
    "Sword Saint":2,
};

let classHonour = {
    "Forgotten Ronin":-1,
    "Erudite Samurai":2,
    "Drunken Monk":-1,
    "Corrupted Shinobi":-2,
    "Onmyoji":0,
    "Bakuto":1,
    "Yamabushi":1,
    "Reckless Sumo":1,
    "Wild Dancer":-1,
    "Sword Saint":1,
};

let classMoney = {
    "Forgotten Ronin":1,
    "Erudite Samurai":3,
    "Drunken Monk":1,
    "Corrupted Shinobi":2,
    "Onmyoji":1,
    "Bakuto":3,
    "Yamabushi":1,
    "Wild Dancer":1,
    "Reckless Sumo":1,
    "Sword Saint":1,
};

let classTenets = {
    "Forgotten Ronin":"The Ronin's Creed",
    "Erudite Samurai":"Bushido",
    "Corrupted Shinobi":"The Unseen Virtues",
    "Reckless Sumo":"The Sumo's Oath",
    "Onmyoji":"The Rules of the Divine",
    "Drunken Monk":"Noble Truths",
    "Bakuto":"The Gambler's Way",
    "Yamabushi":"The Yamabushi's Path",
    "Wild Dancer":"The Dancer's Code",
    "Sword Saint":"The Sword Saint's Discipline",
};

let classAbilities = {
    Swiftness: {
        "Forgotten Ronin":2,
        "Erudite Samurai":-1,
        "Corrupted Shinobi":2,
        "Reckless Sumo":-2,
        "Onmyoji":-1,
        "Drunken Monk":2,
        "Bakuto":1,
        "Yamabushi":1,
        "Wild Dancer":-1,
        "Sword Saint":2,
    },
    Spirit: {
        "Forgotten Ronin":-2,
        "Erudite Samurai":-1,
        "Corrupted Shinobi":2,
        "Reckless Sumo":-1,
        "Onmyoji":3,
        "Drunken Monk":2,
        "Bakuto":1,
        "Yamabushi":2,
        "Wild Dancer":2,
        "Sword Saint":-1,
    },
    Vigour: {
        "Forgotten Ronin":2,
        "Erudite Samurai":-1,
        "Corrupted Shinobi":-1,
        "Reckless Sumo":3,
        "Onmyoji":2,
        "Drunken Monk":1,
        "Bakuto":1,
        "Yamabushi":-1,
        "Wild Dancer":2,
        "Sword Saint":2,
    },
    Resilience: {
        "Forgotten Ronin":2,
        "Erudite Samurai":-1,
        "Corrupted Shinobi":1,
        "Reckless Sumo":2,
        "Onmyoji":-1,
        "Drunken Monk":-2,
        "Bakuto":1,
        "Yamabushi":1,
        "Wild Dancer":-2,
        "Sword Saint":1,
    },
};

let classTraits = {
    "Forgotten Ronin":['drunkard', 'sober'],
    "Erudite Samurai":['drunkard', 'sober'],
    "Corrupted Shinobi":['stealthy', 'clumsy'],
    "Reckless Sumo":['fat', 'slim'],
    "Onmyoji":['wise', 'fool'],
    "Drunken Monk":['aloof', 'tranquil'],
    "Bakuto":['cunning', 'stupid'],
    "Yamabushi":['pretty', 'dumb'],
    "Wild Dancer":['flowy', 'sleazy'],
    "Sword Saint":['crafty', 'hardy'],
};

let classDescriptions = {
    "Forgotten Ronin":"The Forgotten Ronin, a man without a master, he roams the land with his sword at his side and his honour as his guide. He's a samurai of the road, a warrior of the wilds, seeking fortune and adventure wherever they may be found. His skills are sharp, his heart is ashes, but he's a man on the outside looking in. He's not bound by the rules of society, nor is he burdened by its obligations. He's a lone wolf, a rebel, a force of nature. And when trouble comes to town, he's the one they call on to set things right.",
    "Erudite Samurai":"The Erudite Samurai is an inquisitive one, with a thirst for knowledge that rivals their love for battle. They're the kind of warrior who can discuss poetry as deftly as they can swing a sword.They know that true Mastery of the Blade requires a deep understanding of the world around them. They use their intellect to gain the upper hand in battles of wit and diplomacy. A master of tactics and culture. In a world where brawn often reigns supreme, the erudite samurai is a rare and valuable gem, a warrior who values knowledge and wisdom as highly as strength and skill.",
    "Corrupted Shinobi":"The Corrupted Shinobi, a scoundrel of the highest order, has forsaken all traditional honour. Instead, they use their stealth and guile to weave a web of deceit, assassinating their prey from the shadows. No lord or clan can control this wily fiend, for their only true master is their own greed. Their blades are sharp, their wits sharper, and their hearts as black as the night they stalk. They are the shadow that creeps up behind you, the serpent that slithers beneath your feet. Cross them at your own peril, for they are the Corrupted Shinobi, and their loyalty is to only themselves.",
    "Reckless Sumo":"The Reckless Sumo, well, he's no prince charming, but a boulder among pebbles, stubborn and solid, carved out of raw muscle and grit. They say size is a hindrance, but not for these guys, it's their badge of honour, a testament to their might that ain't shaking for no one. They're schooled in that old sumo wrestling game, trading sword and shield for a chest full of thunder and palms that can uproot trees. They make their stand on the frontline, immovable, unshakeable, like a lighthouse in the tempest. These titans, they don't bank on the quick dance of the sword but the slow, painful endurance of the storm. The Sumo class is for those tough nuts who believe in standing firm, outmuscling the odds, and letting the world know they're not going down without a hell of a fight.",
    "Onmyoji":"The Onmyoji, a conduit of the spiritual world who uses their powers to bend the very fabric of reality to their will. They are feared and shunned with their talk of dead spirits and otherworldly beings. They must be careful not to be consumed by their own greed and desires, for they know that there are spirits out there that would love nothing more than to drag them down into the abyss.They may work for the powerful, using their otherworldly knowledge to gain favour and influence. Or they may be outcasts, living in the shadows and using their powers to make a quick coin. They know the secrets of the dead and can communicate with the spirits that linger in this world. ",
    "Drunken Monk":"The Drunken Monk, swaying and stumbling like a drunkard yet wielding the power of a raging storm. They are a master of Zen Buddhism and have honed their skills in the art of drunken fighting to a deadly level. Don't be fooled by their appearance, for they move with an otherworldly grace that belies their drunken state. These wandering monks often find themselves on a quest for enlightenment or may lend their services as bodyguards and enforcers to those who can afford them. With their combination of martial arts and spiritual insight, the Drunken Monk is a true master of the way of the warrior.",
    "Bakuto":"The Bakuto, a crafty sort with a loaded dice and a silver tongue. They'll charm you with their words and bleed you dry with their cards. A master of deception, the Bakuto knows how to get what they want, be it gold or power, without getting their hands dirty. They dance with danger, walking the razor's edge between life and death, making deals and playing both sides. They are the underworld's puppet masters, pulling the strings of the criminal world with their slick moves and cold heart. The Bakuto's loyalty lies with themselves and their allies, but they may lend their talents to those who can pay the price. Watch your step, for if the Bakuto is playing, the game is rigged, and the house always wins.",
    "Yamabushi":"The Yamabushi aren\'t your run-of-the-mill warriors. No sir, they're a solitary bunch, cut from a different cloth, steeped in the quiet whispers of mountain trails and fog-shrouded peaks. They know the dance of Shugendō - a spiritual tango drawing its steps from Taoism, Shinto, Buddhism, and the raw poetry of the earth itself.They pull their power from the heart of the world, and there is nothing more potent than that. Healers, exorcists, drinkers of the divine, they weave their lives with threads of the ethereal, mixing the mystic with the martial like some potent brew. Now, the Yamabushi, they\'re not your swordswinging, horse-riding types, no. They're your high-altitude monks, your mystics with mud-caked boots and stars in their eyes.",
    "Wild Dancer":"The Wild Dancer, that's a character who's raw and reckless, a grim ballet of steel and gunpowder, twisting through the madness of battle like a half-crazed poet on a drunken payday. There's an art to their carnage, a rhythm to their mayhem. They're a heady mix of samurai discipline and wild, gunslinging abandon, turning every bloody skirmish into a theatrical spectacle.They're a swirling dervish of katana slashes and matchlock pistol blasts, dancing across the battlefield like it's the stage of some grand, grotesque opera. They wade through chaos with the finesse of a prima ballerina and the raw power of a rampaging bull. It's a dance of death, set to the rhythm of clashing steel and booming gunshots.",
    "Sword Saint":"The Sword Saint - Not just any fencer, but the epitome of duelling mastery. With a blade that dances elegantly and strikes with deadly precision, their every move is a masterclass. Their footwork is fluid, their accuracy unmatched. A duelling legend, with a legacy of foes bested and a spirit that remains unyielding. In the dance of steel, theyre always a step ahead.",
};

let classPowers = {
    "Forgotten Ronin": {
        0: 'Ronin\'s Resolve. The Forgotten Ronin can draw upon their inner strength and resolve in times of great need. Once per day, they may roll d6 and add the result to any one roll they make.' ,
        1: 'Sword Master. A master of the blade, wielding their sword with deadly precision. They may add their Vigor modifier to damage rolls made with melee weapons. ',
        2: 'Masterless. If the Forgotten Rōnin\'s honour score is below 10 they may Parry at DR12.', 
        3: 'Bushi\'s Blade. When both the Rōnin and an enemy are wielding a Katana or Wakizashi the attack and defence DR is lowered by 2.',
        4: 'Protector. The Forgotten Ronin is fiercely protective of their allies and will go to great lengths to defend them. Once per combat, they may protect an ally, adding +2 to their defence against all attacks until the end of the Ronin\'s next turn. ',
        5: 'Haunted Blade. A cursed blade that whispers to them in moments of stress. Once per combat, the Ronin can choose to make a sacrifice to the blade, granting it power for a single strike. The sacrifice can be anything from losing d4 HP to discarding an important item. The next time the Ronin attacks with the blade, they roll twice and take the higher roll, the strike deals an extra d8 damage. However, after the strike, the blade becomes uncontrollable and attacks a random target, including the Rōnin or their allies, until the end of the Ronin\'s next turn. '
    },
    "Erudite Samurai": {
        0: 'Scholarly Training. The Erudite Samurai has received extensive training in the arts of literature, philosophy, and the sciences. If in honourable standing (above 10 Honour) they may add +4 to a damage roll once per day.',
        1: 'Philosophy of War. A deep understanding of the nature of conflict allows them to predict their enemies\' movements and plan accordingly. Once per combat, the Erudite Samurai can predict the next move of their opponent and gain a +2 bonus to their attack roll against that opponent. This ability can only be used if they have had at least one round to observe their opponent\'s fighting style.',
        2: 'Tactical Genius. A master of strategy and tactics. They may use their honour score if in honourable standing (Honour 10 or above) to gain an advantage in combat, reducing the DR of a parry to DR12.', 
        3: 'Precise Strike. Trained to strike with precision, finding the weaknesses in their opponents\' defences. Once per combat encounter, they may add a bonus to their attack roll equal to their Vigor modifier',
        4: 'Intimidating Presence. Knowledge and training make them a formidable opponent. Once per day, they can intimidate their enemies, lowering the DR of their next attack by 4',
        5: 'Zen Focus. Once per day, they can enter a state of zen-like focus, granting them a +1 bonus to all ability rolls for a duration of 10 minutes.'
    },
    "Drunken Monk": {
        0: 'Drunken Fist. The Drunken Monk fights with an unpredictable, fluid style that confounds opponents. They may add their Spirit modifier when making unarmed attacks.',
        1: 'Five Finger Death Punch. Once per session, choose to strike an opponent with a precision unarmed attack that targets pressure points, dealing an additional 6d4 on a success and stunning the target',
        2: 'Roadhouse. Make a brutal attack against an opponent\'s throat potentially killing them outright. Before making an attack, Test Spirit DR14. The attack requires the monk to make a successful attack and may only be used on a surprised opponent.', 
        3: 'Flame Fist. Knuckles imbued with mystical fire, dealing 1d4 additional fire damage and potentially setting targets on fire. The Monk may only use this ability a limited number of times per day (Spirit +1).',
        4: 'Sake Style. When the Drunken Monk is under the effects of alcohol, they gain a temporary +2 bonus to their melee attacks and defence.',
        5: 'Drunken Master. Turn any item into a weapon, increasing the damage from a d4 to d6. Additionally, they have a +1 bonus to initiative rolls while drunk.'
    },
    "Corrupted Shinobi": {
        0: 'Corrupted Techniques. Various forbidden techniques that allow manipulation of shadows and infliction of horrific curses. Once per day, they can choose one of the following effects: create a pool of darkness to hide in or curse an enemy to take ongoing damage (d4 per round).',
        1: 'Poison Master. An expert in crafting and applying deadly poisons. They can create one dose of poison during a short rest. Poisons created this way deal an additional d4 damage.',
        2: 'Smoke Screen. Once per day, the shinobi can create a dense cloud of smoke that provides cover and obscures vision. The smoke lasts for d6 rounds.', 
        3: 'Betrayer\'s Blade. The Corrupted Shinobi carries a blade that is infused with dark magic and has the ability to absorb the life force of their enemies. Once per day, they can use this ability to deal an additional d8 damage and heal themselves for the same amount.',
        4: 'Shadow Step. Teleport a short distance by stepping into the shadows. They can use this ability to teleport to a nearby shadowy area. The Shinobi may only use this ability a limited number of times per day (Swiftness +1).',
        5: 'Dark Illusion. Once per combat, they can create an illusory double of themselves, causing enemies to attack the wrong target. When the Shinobi is hit, roll a d6; on an even number the enemy hits the Shinobi, on an odd number it hits the illusion causing it to disappear.'
    },
    "Onmyoji": {
        0: 'Divining Rod. A rod carved from a sacred tree that vibrates and hums when danger is near. When in use, the rod will point in the direction of any nearby threats. Once per day, the Onmyoji can ask the rod a yes or no question and receive a clear answer.',
        1: 'Ofuda Talisman. A sheet of paper inscribed with protective symbols that can be used to ward off evil spirits or curses. The talisman can be used once per day to protect against a single supernatural attack or effect. Test Spirit DR12 to activate the talisman and negate the effect.',
        2: 'Spirit Beacon. Once per day, the Onmyoji can use their spirit energy to create a glowing beacon that draws enemies towards it. Test Spirit DR12. On a success, all enemies in the area are drawn to the beacon, distracting them from attacking the Onmyoji. On a fail, the beacon attracts all enemies to the Onmyoji. The beacon lasts for d6 rounds.', 
        3: 'Shadow Binding. Attempt to bind an enemy to its shadow, rendering them immobile. To use this ability, Test Spirit DR12. On a success, the enemy is unable to move until the end of the Onmyoji\'s next turn. The Onmyoji may only use this ability a limited number of times per day (Spirit +1).',
        4: 'Text of Exorcism. A text containing powerful incantations and symbols that can be used to banish evil spirits or demons. Once per day, the Onmyoji must Test Spirit DR14 to activate the text, which can banish a single spirit or demon (cannot be used in Yomi).',
        5: 'Mirror of Reflection. A handheld mirror inscribed with runes that can be used to reflect hostile spells or attacks. Once per day, Test Spirit DR12 to use the mirror, reflecting any spell or attack directed at them. This deals the attack\’s damage back to the attacker.'
    },
    "Bakuto": {
        0: 'Gambling Luck. Bakuto can sense when a game is rigged, or someone is cheating. They get +2 to Spirit tests when gambling or playing games of chance. They can also re-roll any one roll, once per day.',
        1: 'Sucker Punch. Take a swing before they know what hit ‘em. Deal double damage with their first strike in a round.',
        2: 'Dirty Tricks. Pull a fast one to gain the advantage. Once per combat, add +2 to any attack or defence roll by using deception, trickery or surprise.', 
        3: 'Sleight of Hand. The art of pickpocketing, intimidation, and thievery. They get +4 to Spirit tests when attempting these actions.',
        4: 'Double Strike. A master of dual wielding. Make two melee attacks in a single turn, but each attack suffers a -2 penalty to the attack roll.',
        5: 'Feint. Choose to forgo their attack on their turn and instead Test Spirit DR10. If successful, the Bakuto gains a +4 to their next attack also dealing +4 damage.'
    },
    "Yamabushi": {
        0: 'Mountain\'s Resolve. Once per day, draw upon the spiritual energy of the mountains to gain a +4 bonus to a roll.',
        1: '. Spiritual Martial Arts. They are trained in a unique form of martial arts that channels spiritual energy. Once per combat, they may add their Spirit modifier to an attack or defence roll.',
        2: 'Mountain\'s Fury. Once per combat, channel the wrath of the mountains into a powerful strike, dealing an additional d6 damage.', 
        3: 'Ascetic\'s Wisdom. Your years of solitude have given the Yamabushi deep insight. Once per day, they may reroll a failed Spirit test.',
        4: 'Divine Guidance. Call upon the spirits for guidance and protection. Once per day, the Yamabushi can perform a ritual to seek divine guidance, granting them a temporary bonus of +2 to one ability of their choice for the next hour.',
        5: 'Mystic\'s Shield. Once per day, they may use their spiritual energy to shield themself from harm, reducing the damage of an incoming attack to zero.'
    },
    "Wild Dancer": {
        0: 'Untamed Ferocity. Once per combat encounter, they may enter a state of untamed ferocity for a number of rounds equal to their Vigor modifier (minimum 1). While in this state, they gain a +1 bonus to both attack and defence rolls, and their matchlock pistol deals an additional d4 damage. However, they lose their ability to Parry during this time, as their focus is solely on aggressive combat.',
        1: 'Two-Weapon Fighting. Skilled at fighting with a weapon in each hand. Once per day, attack twice in a round with both gun and katana.',
        2: 'Dancing Defence. Use graceful movements to dodge attacks. Once per day, dodge an attack that would have hit.', 
        3: 'Shooting Star. Once per combat, perform a flashy attack with the pistol that distracts and confuses the enemy, reducing the DR to attack that enemy by 4 for the next round.',
        4: 'Sword Dance. Once per day, unleash a flurry of sword strikes, dealing an extra 2d6 of damage.',
        5: 'Wild Spirit. The Wild Dancer’s unpredictable nature makes it hard for enemies to anticipate their actions. Once per combat, they may reroll a failed attack or defence roll.'
    },
    "Reckless Sumo": {
        0: 'Iron Body. A Sumo’s body is like a fortress. Once per day, they may shrug off an attack that would have damaged them.',
        1: 'Sumo Slam. Uses superior strength and mass to deliver a powerful slam attack. Once per combat, they may add twice their Vigor modifier to a melee attack roll.',
        2: 'Mountain\'s Grasp. Roll 2d6+Vigor. If the result is higher than the target\'s morale, they are grappled, rendering them unable to attack or move until the start of the Sumo’s next turn. The effect ends early if the Sumo is moved or rendered unconscious.', 
        3: 'Ring Out. Once per combat, they may push an enemy out of the immediate combat zone, stopping them from melee attacks for a round.',
        4: 'Chanko Power. The Reckless Sumo’s diet of chanko nabe gives them incredible strength. Once per day, they can tap into this power to get a +6 on any Vigor test.',
        5: 'Belly Bump. The Sumo can use their considerable girth to bump an opponent, potentially knocking them off balance. In the next round, attacks against this enemy are made at +4.'
    },
    "Sword Saint": {
        0: 'Artful Execution. A true master of their chosen weapon, the Sword Saint is capable of performing strikes of unparalleled precision. Once per combat, they can execute a perfect strike, ignoring their opponent\'s armour or natural defences.',
        1: 'Unyielding Focus. In the heat of battle, the Sword Saint’s focus never wavers. Once per combat, they can enter a state of heightened concentration, reducing all incoming damage by half for one round.',
        2: 'Blade\'s Spirit. Once per session, they can pour their spirit into a single, devastating strike, adding their Honour score to the damage roll.', 
        3: 'Ancestral Weapon. The Sword Saint’s weapon is old, passed down through generations. Once per day, the Sword Saint can call upon the spirits of their ancestors to guide their blade, granting them a reroll on any one attack roll.',
        4: 'Harmonic Duel. When engaged in combat with a single opponent, the Sword Saint finds a rhythm in the clash of steel. Once per duel, they can predict their opponent\'s next move, gaining advantage on their next attack, defence, or riposte roll.',
        5: 'Unyielding Discipline. Years of strict discipline make them a formidable opponent. Once per day, they can intimidate their enemies, lowering the DR of their next attack by -4.'
    },
}

let classEquipment = {
    "Forgotten Ronin": {
        0: 'A worn but serviceable katana (d8 damage)' ,
        1: 'A set of traveling clothes',
        2: 'A letter of introduction (can be used to gain an audience with a local lord or official)',
        3: 'A straw hat', 
    },
    "Erudite Samurai": {
        0: 'A fine Katana (d10 damage)',
        1: 'A Wakizashi (d6 damage)',
        2: 'A set of sturdy armour (tier 2)', 
        3: 'A collection of books and papers', 
    },
    "Drunken Monk": {
        0: 'A set of monk\'s robes and sandals',
        1: 'A gourd of sake',
        2: 'A set of brass knuckles (d4 damage)', 
    },
    "Corrupted Shinobi": {
        0: 'A set of dark, unremarkable clothing',
        1: 'A pair of matched kusarigama (d6 damage, melee + ranged)',
        2: '10 Shuriken (d4 Damage)', 
        3: 'A small vial of poison (d6 uses, d4 damage for d4 rounds)', 
    },
    "Onmyoji": {
        0: 'A set of robes and talismans',
        1: 'A random Unseen Text and Shintai Text',
        2: 'A Kiseru, a metal smoking pipe used as a makeshift weapon (d4 damage)',
    },
    "Bakuto": {
        0: 'A set of stylish, flamboyant clothing',
        1: 'A tanto (d4 damage)',
        2: 'A set of loaded dice and marked cards.',
    },
    "Yamabushi": {
        0: 'Robes and sash adorned with pom-poms',
        1: 'A bo staff (d6 damage)',
        2: 'A random Unseen Text.',
    },
    "Wild Dancer": {
        0: 'A flashy, decorative kimono',
        1: 'A Katana (d8 damage)',
        2: 'A Tanegashima with Spirit+5 Bullets (d8 damage)',
    },
    "Reckless Sumo": {
        0: 'Traditional Sumo clothing',
        1: 'Hand Chalk (d8 damage)',
    },
    "Sword Saint": {
        0: 'A set of worn armour (tier 3)',
        1: 'Odachi (d10 damage)',
    },
}

let abilitiesRollValues = {
    1: -3,
    2: -3,
    3: -3,
    4: -3,
    5: -2,
    6: -2,
    7: -1,
    8: -1,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 1,
    14: 1,
    15: 2,
    16: 2,
    17: 3,
    18: 3,
    19: 3,
    20: 3,
};

function rollDice(numDice, numOfSides) {
    let results = [];

    if (numDice > 1) {
        for (let i = 0; i < numDice; i++) {
            results.push(Math.floor(Math.random() * numOfSides) + 1);
        }
    }
    else {
        results = Math.floor(Math.random() * numOfSides) + 1;
    }

    return results;
}

function generateRandomColorFromBasicColors() {
    const basicColors = [
      "#FF0000", // Red
      "#006400 ", // Dark Green
      "#000080", // Dark Blue
      "#BDB76B ", // Dark Yellow
      "#800080 " // Purple
    ];
  
    let randomColor;
    randomColor = basicColors[Math.floor(Math.random() * basicColors.length)];

    return randomColor;
  }

function generateRandomCharacter()
{
    this.generateRandomName();
    this.generateRandomClass();
    this.generateClassDescription();
    var abilities = this.generateRandomAbilities();
    characterSwiftness = abilities[0];
    characterSpirit = abilities[1];
    characterVigour = abilities[2];
    characterResilience = abilities[3];
    this.generateRandomHP();
    this.generateRandomPower();
    this.generateHonour();
    this.generateTenets();
    this.generateEquipment();
    this.generateRandomVirtues();
    // this.generateRandomClassInfo();
    // this.generateRandomAEquipment();
}

function generateRandomName()
{
    const names = [
        "Akihiro", "Aiko", "Akira", "Ayumi", "Emi",
        "Hana", "Haruki", "Hideki", "Hiroko", "Kaori",
        "Kazuo", "Kenji", "Makoto", "Mariko", "Masao",
        "Natsumi", "Satoshi", "Shoko", "Takashi", "Yoko",
        "Himura", "Daichi", "Eiko","Genji","Hana","Isamu",
        "Toyo","Ryoma","Michiko","Tomoe","Osamu", "Masamune",
        "Rei","Sachi","Saito","Ume","Yori","Zen", "Hanzo",
        "Arata","Jiro","Musashi", "Natsu", "Tojiro"
    ];

    const surnames = [
        "Aoki", "Fujimoto", "Hayashi", "Kato", "Suzuki",
        "Tanaka", "Yamada", "Yamamoto", "Watanabe", "Yoshida",
        "Battosai","Chiba","Fujiwara","Hattori","Ito","Matsamune",
        "Sakura","Sakamoto","Okada","Hajime","Takahashi",
        "Uesugi","Yamagata","Yojimbo","Akiyama","Miyamoto",
        "Ishikawa","Kitano","Matsushita", "Minamoto",
        "Taira", "Tokugawa", "Date",
    ];

    const nicknames = [
        "Taka no Me/The Hawk's Eye", "Umi no Tatsu/The Dragon of the Sea",
        "Kaminari no Kiba/Thunder Fang", "Kawa no Kami/River God",
        "Yama no Kaze/Mountain Wind", "Kaze no Kensei/Sword Saint of the Wind",
        "Kiri no Oni/Demon of the Fog", "Jigoku no Tora/Tiger of Hell",
        "Yoru no Kitsune/Fox of the Night", "Kuroi Kiba/Black Fang",
        "Tora no Oni/Tiger Demon","Neko no Te/Cat's Paw", "Kaze no Tengu/Wind Tengu","Hitokiri/Man Slayer",
        "Yami no Kishi/Knight of Darkness", "Bakemono no Oyabun/Monster Boss",
        "Hana no Geisha/Flower Geisha", "Kaminari no Senshi/Warrior of Thunder",
        "Yurei no Tomurai/Ghostly Wanderer", "Kuroi Kage/Black Shadow"
    ];

    const randomNameIndex = Math.floor(Math.random() * names.length);
    const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    const randomNickNameIndex = Math.floor(Math.random() * nicknames.length);

    characterNickName = nicknames[randomNickNameIndex];
    characterName = names[randomNameIndex]+ " " + surnames[randomSurnameIndex];

    const name = names[randomNameIndex]+ " " + surnames[randomSurnameIndex] + ', ' + characterNickName+'  ';

    const nameDiv = document.getElementById("name");
    nameDiv.innerHTML = '<strong><em>Name:</em></strong> ' + name+'  ';

    const titleDiv = document.getElementById("title");
    titleDiv.textContent = "Ronin - " + characterName;
}

function generateRandomClass()
{
    const classes = Object.keys(classHP);

    const randomClassIndex = Math.floor(Math.random() * classes.length);
    const className = classes[randomClassIndex];

    const classDiv = document.getElementById("class");
    classDiv.innerHTML = '<strong><em>Class:</em></strong> ' + className+'  ';

    characterClass = className;
}

function generateRandomHP()
{
    const hpDiv = document.getElementById("hp");
    hpDiv.innerHTML = "";

    // roll the HP dice based on the characer class
    var randomNumberRolled = this.rollDice(1, classHP[characterClass]);

    var randomNumberToReturn = randomNumberRolled + characterResilience; // Add resilience to rolled number
    
    if (randomNumberToReturn <= 0)
        randomNumberToReturn = 1;

    hpDiv.innerHTML  = '<strong><em>HP:</em></strong> '+randomNumberToReturn+"/"+randomNumberToReturn;
}

function generateRandomVirtues()
{
    const virtuesDiv = document.getElementById("virtues");
    virtuesDiv.innerHTML = "";

    const randomNumber = Math.floor(Math.random() * classVirtues[characterClass]) + 1; // Generate a random number between 1 and 100
    virtuesDiv.innerHTML  = '<strong><em>Virtues:</em></strong> '+randomNumber+'  ';
}

function generateHonour()
{
    const honourDiv = document.getElementById("honour");
    honourDiv.innerHTML = "";

    const honorNumber = classHonour[characterClass];
    honourDiv.innerHTML = '<strong><em>Honour:</em></strong> '+honorNumber+'  ';
}

function generateTenets()
{
    const tenetsDiv = document.getElementById("tenets");
    tenetsDiv.innerHTML = "";

    const tenetsNumber = classTenets[characterClass];
    tenetsDiv.innerHTML = '<strong><em>Tenets:</em></strong> '+tenetsNumber+'  ';
}

function generateEquipment() {
    const equipmentDiv = document.getElementById("equipment");
    equipmentDiv.innerHTML = "";
    
    equipmentDiv.appendChild(this.generateColoredTitle('Equipment'));

    const tempEquipment = classEquipment[characterClass];
    const equipmentNumber = Object.keys(tempEquipment).length;

    const equipmentList = document.createElement("ul");

    for (let i = 0; i < equipmentNumber; i++) {
        const equipmentItem = document.createElement("li");
        equipmentItem.textContent = tempEquipment[i];

        equipmentList.appendChild(equipmentItem);
    }

    const moneyItem = document.createElement("li");
    moneyItem.textContent = this.generateRandomMoney() +' Ryo';
    equipmentList.appendChild(moneyItem);

    equipmentDiv.appendChild(equipmentList);
}

function generateRandomMoney() {
    let diceRolls = this.rollDice(classMoney[characterClass], 6);
    if (classMoney[characterClass] > 1) {
        const diceSum = diceRolls.reduce((acc, val) => acc + val, 0) * 10;
        return diceSum;
    }
    else {
        return diceRolls * 10;
    }

}

function generateRandomAbilities() {
    const abilityDiv = document.getElementById("abilities");
    abilityDiv.innerHTML = "";

    abilityDiv.appendChild(this.generateColoredTitle('Abilities'));

    const finalAbilities = [];
    const abilityNames = ['Swiftness', 'Spirit', 'Vigour', 'Resilience'];

    for (let i = 0; i < 4; i++) {
        let diceRolls = this.rollDice(3, 6);
        var abilityName = abilityNames[i];

        const diceSum = diceRolls.reduce((acc, val) => acc + val, 0);
        const randomNumber = diceSum + classAbilities[abilityName][characterClass];
        const finalAbilityValue = abilitiesRollValues[randomNumber];

        const abilityParagraph = document.createElement("p");
        abilityParagraph.innerHTML = '<strong><em>'+abilityNames[i]+'</em></strong>: '+finalAbilityValue+'  ';

        abilityDiv.appendChild(abilityParagraph);
        finalAbilities.push(finalAbilityValue);
    }

    return finalAbilities;
}

function generateClassDescription()
{
    const infoDiv = document.getElementById("classinfo");
    infoDiv.innerHTML = "";
    randomColor = this.generateRandomColorFromBasicColors();

    infoDiv.appendChild(this.generateColoredTitle("You are: " + characterName));

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = classDescriptions[characterClass];
    descriptionParagraph.classList.add("col-md-12");

    infoDiv.appendChild(descriptionParagraph);
}

function generateRandomPower() {
    const powersDiv = document.getElementById("powers");
    powersDiv.innerHTML = "";

    powersDiv.appendChild(this.generateColoredTitle("Powers"));

    const classPowersObj = classPowers[characterClass];
    const powerCount = Object.keys(classPowersObj).length;
    const randomIndex = Math.floor(Math.random() * powerCount);

    const powerParagraph = document.createElement("p");
    powerParagraph.textContent = classPowersObj[randomIndex];

    powersDiv.appendChild(powerParagraph);
}

function generateColoredTitle(title)
{
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = title;
    titleParagraph.classList.add("fw-bold");
    titleParagraph.classList.add("col-md-12");
    // Apply the random color we generated as the background
    titleParagraph.style.backgroundColor = randomColor;

    return titleParagraph;
}
