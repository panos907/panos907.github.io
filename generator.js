
let characterName = '';
let characterNickName = '';
let characterClass = '';
let characterVigour = -10;
let characterSpirit = -10;
let characterSwiftness = -10;
let characterResilience = -10;

let classHP = {
    "Forgotten Ronin":8,
    "Erudite Samurai":8,
    "Corrupted Shinobi":8,
    "Reckless Sumo":12,
    "Onmyoji":8,
    "Drunken Monk":8,
    "Bakuto":10,
    "Yamabushi":8,
    "Wild Dancer":8,
    "Sword Saint":8,
};

let classVirtues = {
    "Forgotten Ronin":2,
    "Erudite Samurai":3,
    "Corrupted Shinobi":2,
    "Reckless Sumo":3,
    "Onmyoji":4,
    "Drunken Monk":4,
    "Bakuto":4,
    "Yamabushi":4,
    "Wild Dancer":2,
    "Sword Saind":2,
};

let classHonour = {
    "Forgotten Ronin":-1,
    "Erudite Samurai":2,
    "Corrupted Shinobi":-2,
    "Reckless Sumo":1,
    "Onmyoji":0,
    "Drunken Monk":-1,
    "Bakuto":1,
    "Yamabushi":1,
    "Wild Dancer":-1,
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
    "Corrupted Shinobi":['stealthy', 'clumsy'],
    "Reckless Sumo":['fat', 'slim'],
    "Onmyoji":['wise', 'fool'],
    "Erudite Samurai":['drunkard', 'sober'],
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
    "Yamabushi":"The Yamabushi aren’t your run-of-the-mill warriors. No sir, they're a solitary bunch, cut from a different cloth, steeped in the quiet whispers of mountain trails and fog-shrouded peaks. They know the dance of Shugendō - a spiritual tango drawing its steps from Taoism, Shinto, Buddhism, and the raw poetry of the earth itself.They pull their power from the heart of the world, and there is nothing more potent than that. Healers, exorcists, drinkers of the divine, they weave their lives with threads of the ethereal, mixing the mystic with the martial like some potent brew. Now, the Yamabushi, they’re not your swordswinging, horse-riding types, no. They're your high-altitude monks, your mystics with mud-caked boots and stars in their eyes.",
    "Wild Dancer":"The Wild Dancer, that's a character who's raw and reckless, a grim ballet of steel and gunpowder, twisting through the madness of battle like a half-crazed poet on a drunken payday. There's an art to their carnage, a rhythm to their mayhem. They're a heady mix of samurai discipline and wild, gunslinging abandon, turning every bloody skirmish into a theatrical spectacle.They're a swirling dervish of katana slashes and matchlock pistol blasts, dancing across the battlefield like it's the stage of some grand, grotesque opera. They wade through chaos with the finesse of a prima ballerina and the raw power of a rampaging bull. It's a dance of death, set to the rhythm of clashing steel and booming gunshots.",
    "Sword Saint":"The Sword Saint - Not just any fencer, but the epitome of duelling mastery. With a blade that dances elegantly and strikes with deadly precision, their every move is a masterclass. Their footwork is fluid, their accuracy unmatched. A duelling legend, with a legacy of foes bested and a spirit that remains unyielding. In the dance of steel, theyre always a step ahead.",
};

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
    var abilities = this.generateRandomAbilities();
    characterSwiftness = abilities[0];
    characterSpirit = abilities[1];
    characterVigour = abilities[2];
    characterResilience = abilities[3];
    this.generateHonour();
    this.generateTenets();
    this.generateRandomHP();
    this.generateRandomVirtues();
    this.generateClassDescription();
    this.generateRandomTraits();
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

function generateRandomAbilities() {
    const abilityDiv = document.getElementById("abilities");
    abilityDiv.innerHTML = "";

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

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = classDescriptions[characterClass];
    descriptionParagraph.classList.add("col-md-12");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = "You are: " + characterName;
    nameParagraph.classList.add("fw-bold");
    nameParagraph.classList.add("col-md-6");

    // Generate a random RGB color
    const randomColor = this.generateRandomColorFromBasicColors();
    // Apply the random color as the background
    nameParagraph.style.backgroundColor = randomColor;

    infoDiv.appendChild(nameParagraph);
    infoDiv.appendChild(descriptionParagraph);
}

function generateRandomTraits() {
    const powersDiv = document.getElementById("powers");
    powersDiv.innerHTML = "";

    const randomTraitIndex = Math.floor(Math.random() * classTraits[characterClass].length);
    const tempClassTraits = classTraits[characterClass][randomTraitIndex];

    const traitParagraph = document.createElement("p");
    traitParagraph.textContent = tempClassTraits;

    powersDiv.appendChild(traitParagraph);
}

