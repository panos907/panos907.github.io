
let monsterType = '';
let randomColor;

let levelBonus = 0;

let monsterHP = {
    "Skeleton":12,
    "Ghoul":8,
    "Zombie":8,
};

let classAbilities = {
    Swiftness: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":2,
    },
    Spirit: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":2,
    },
    Vigour: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":-1,
    },
    Resilience: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
};

let classDescriptions = {
    "Skeleton":"The Skeleton, a man without a master, he roams the land with his sword at his side and his honour as his guide. He's a samurai of the road, a warrior of the wilds, seeking fortune and adventure wherever they may be found. His skills are sharp, his heart is ashes, but he's a man on the outside looking in. He's not bound by the rules of society, nor is he burdened by its obligations. He's a lone wolf, a rebel, a force of nature. And when trouble comes to town, he's the one they call on to set things right.",
    "Ghoul":"The Ghoul is an inquisitive one, with a thirst for knowledge that rivals their love for battle. They're the kind of warrior who can discuss poetry as deftly as they can swing a sword.They know that true Mastery of the Blade requires a deep understanding of the world around them. They use their intellect to gain the upper hand in battles of wit and diplomacy. A master of tactics and culture. In a world where brawn often reigns supreme, the erudite samurai is a rare and valuable gem, a warrior who values knowledge and wisdom as highly as strength and skill.",
    "Zombie":"The Zombie, a scoundrel of the highest order, has forsaken all traditional honour. Instead, they use their stealth and guile to weave a web of deceit, assassinating their prey from the shadows. No lord or clan can control this wily fiend, for their only true master is their own greed. Their blades are sharp, their wits sharper, and their hearts as black as the night they stalk. They are the shadow that creeps up behind you, the serpent that slithers beneath your feet. Cross them at your own peril, for they are the Zombie, and their loyalty is to only themselves.",
};

let classPowers = {
    "Skeleton": {
        0: 'Ronin\'s Resolve. The Skeleton can draw upon their inner strength and resolve in times of great need. Once per day, they may roll d6 and add the result to any one roll they make.' ,
        1: 'Sword Master. A master of the blade, wielding their sword with deadly precision. They may add their Vigor modifier to damage rolls made with melee weapons. ',
        2: 'Masterless. If the Forgotten Rōnin\'s honour score is below 10 they may Parry at DR12.', 
        3: 'Bushi\'s Blade. When both the Rōnin and an enemy are wielding a Katana or Wakizashi the attack and defence DR is lowered by 2.',
        4: 'Protector. The Skeleton is fiercely protective of their allies and will go to great lengths to defend them. Once per combat, they may protect an ally, adding +2 to their defence against all attacks until the end of the Ronin\'s next turn. ',
        5: 'Haunted Blade. A cursed blade that whispers to them in moments of stress. Once per combat, the Ronin can choose to make a sacrifice to the blade, granting it power for a single strike. The sacrifice can be anything from losing d4 HP to discarding an important item. The next time the Ronin attacks with the blade, they roll twice and take the higher roll, the strike deals an extra d8 damage. However, after the strike, the blade becomes uncontrollable and attacks a random target, including the Rōnin or their allies, until the end of the Ronin\'s next turn. '
    },
    "Ghoul": {
        0: 'Scholarly Training. The Ghoul has received extensive training in the arts of literature, philosophy, and the sciences. If in honourable standing (above 10 Honour) they may add +4 to a damage roll once per day.',
        1: 'Philosophy of War. A deep understanding of the nature of conflict allows them to predict their enemies\' movements and plan accordingly. Once per combat, the Ghoul can predict the next move of their opponent and gain a +2 bonus to their attack roll against that opponent. This ability can only be used if they have had at least one round to observe their opponent\'s fighting style.',
        2: 'Tactical Genius. A master of strategy and tactics. They may use their honour score if in honourable standing (Honour 10 or above) to gain an advantage in combat, reducing the DR of a parry to DR12.', 
        3: 'Precise Strike. Trained to strike with precision, finding the weaknesses in their opponents\' defences. Once per combat encounter, they may add a bonus to their attack roll equal to their Vigor modifier',
        4: 'Intimidating Presence. Knowledge and training make them a formidable opponent. Once per day, they can intimidate their enemies, lowering the DR of their next attack by 4',
        5: 'Zen Focus. Once per day, they can enter a state of zen-like focus, granting them a +1 bonus to all ability rolls for a duration of 10 minutes.'
    },
    "Zombie": {
        0: 'Drunken Fist. The Zombie fights with an unpredictable, fluid style that confounds opponents. They may add their Spirit modifier when making unarmed attacks.',
        1: 'Five Finger Death Punch. Once per session, choose to strike an opponent with a precision unarmed attack that targets pressure points, dealing an additional 6d4 on a success and stunning the target',
        2: 'Roadhouse. Make a brutal attack against an opponent\'s throat potentially killing them outright. Before making an attack, Test Spirit DR14. The attack requires the monk to make a successful attack and may only be used on a surprised opponent.', 
        3: 'Flame Fist. Knuckles imbued with mystical fire, dealing 1d4 additional fire damage and potentially setting targets on fire. The Monk may only use this ability a limited number of times per day (Spirit +1).',
        4: 'Sake Style. When the Zombie is under the effects of alcohol, they gain a temporary +2 bonus to their melee attacks and defence.',
        5: 'Drunken Master. Turn any item into a weapon, increasing the damage from a d4 to d6. Additionally, they have a +1 bonus to initiative rolls while drunk.'
    }
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

let characterBackgrounds = {
    1: "Fled from a powerful and dangerous clan, constantly on the run.",
    2: "Have a powerful enemy who wants you dead at all costs.",
    3: "Possess a rare and valuable artifact that is coveted by many.",
    4: "Are under a terrible curse that cannot be lifted.",
    5: "Once betrayed a close friend and has been wracked with guilt ever since.",
    6: "Are plagued by haunting visions of a dark future. ",
    7: "Have a shadowy past that is slowly catching up with you.",
    8: "Are haunted by a vengeful spirit that will not rest until it gets what it wants.",
    9: "Are the only survivor of a massacre that you cannot forget.",
    10: "Have a powerful addiction that is slowly destroying you.",
    11: "Have angered a powerful spirit that is now out for revenge. ",
    12: "Are followed by a strange, unexplainable phenomenon that brings chaos and destruction wherever you go.",
    13: "Are hunted by a terrifying monster that you cannot defeat.",
    14: "Are haunted by a dark secret that, if revealed, could destroy everything you hold dear.",
    15: "Have made a powerful enemy of a powerful hidden clan.",
    16: "Have made a deal with a malevolent entity that is slowly taking over your mind and body.",
    17: "Are cursed with the ability to see the worst in people and cannot help but voice your thoughts.",
    18: "Are plagued by unexplainable nightmares that are slowly driving you insane. ",
    19: "Are cursed with an insatiable hunger that can never be sated. ",
    20: "Have been marked by a dark force that will stop at nothing to claim your soul.",
};

let characterAfflictions = {
    1: "Paranoid",
    2: "Sadistic",
    3: "Narcissistic",
    4: "Compulsive liar",
    5: "Self-destructive",
    6: "Envious",
    7: "Antisocial",
    8: "Addicted",
    9: " Short-tempered",
    10: "Greedy",
    11: "Pessimistic",
    12: "Manipulative",
    13: "Careless",
    14: "Aggressive",
    15: "Insecure",
    16: "Hedonistic",
    17: "Fanatical",
    18: "Hypocritical",
    19: "Unreliable",
    20: "Delusional",
};

let characterBadHabits = {
    1: "Compulsively hoard any small trinkets you come across, often to the detriment of your party",
    2: "Crippling fear of enclosed spaces or the dark.",
    3: "An urge to speak your mind, even if it means making enemies or getting into trouble.",
    4: "Addicted to a particular substance and go to great lengths to get your fix.",
    5: "Habit of stealing things, even when it's not beneficial.",
    6: "Anger management issues. Tend to lash out violently. ",
    7: "Chronic insomnia.",
    8: "Paranoia. You make up conspiracy theories, even when they have no basis in reality.",
    9: "A terrible memory, often forget important details or information.",
    10: "Persistent procrastinator.",
    11: "Obsessed with counting and arranging objects.",
    12: "You mumble to yourself, even in public.",
    13: "Always losing important items.",
    14: "Weapons and tools must be kept CLEAN. ",
    15: "Telling overly long and irrelevant tales in conversation.",
    16: "Collect ears and whisper secrets into them. ",
    17: "Constantly fidgeting. Can’t sit still.",
    18: "Loud, nervous sneezing.",
    19: "Hate being touched.",
    20: "Stealing food from everyone and hoarding it.",
};

let characterBrokenBodies = {
    1: "Staring with a glazed expression.",
    2: "Covered in scars or wounds, some of which are infected.",
    3: "Missing a limb, using a makeshift prosthesis.",
    4: "Emaciated and frail, with sunken eyes and greyish skin.",
    5: "Severe burns on face and hands, using a mask to hide them.",
    6: "Deaf in one ear, struggling to hear from the other. ",
    7: "Rotted teeth or missing teeth, speaking with a lisp.",
    8: "Crippled, walking with a limp or hunchbacked.",
    9: "Covered in boils or blisters, constantly scratching.",
    10: "Persistent cough or wheezing.",
    11: "Covered in insect bites.",
    12: "A missing or scarred tongue. ",
    13: "Shaking hands or twitching from nervous system damage.",
    14: "Severely obese or suffering from malnutrition, always hungry.",
    15: "Missing fingers or toes. ",
    16: "Broken nose, breathing heavily and snoring loudly.",
    17: "Permanently scowling or smiling, making social interaction difficult.",
    18: "Chronic skin conditions, leaving skin flaky or weeping.",
    19: "Recently blinded or suffering from vision problems.",
    20: "Cracked and discoloured nails, with signs of fungal infection.",
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
      "#8B0000", // Dark Red
      "#006400 ", // Dark Green
      "#000080", // Dark Blue
      "#BDB76B ", // Dark Yellow
      "#800080 " // Dark Purple
    ];
  
    let randomColor;
    randomColor = basicColors[Math.floor(Math.random() * basicColors.length)];

    return randomColor;
  }

function generateRandomMonster()
{
    const levelSelectInput = document.getElementById('level-selector');

    if (levelSelectInput.value > 1) {
        levelBonus = levelSelectInput.value;     
    }

    this.generateRandomName();
    this.generateClassDescriptionBackgroundAndFlaws();
    var abilities = this.generateRandomAbilities();
    characterSwiftness = abilities[0];
    characterSpirit = abilities[1];
    characterVigour = abilities[2];
    characterResilience = abilities[3];
    characterResilience = abilities[4];
    characterResilience = abilities[5];
    characterResilience = abilities[6];
    characterResilience = abilities[7];
    this.generateRandomHP();
    this.generateRandomPower();
}

function generateRandomName()
{
    const names = [
        "Skeleton", "Ghoul", "Zombie"
    ];

    const randomNameIndex = Math.floor(Math.random() * names.length);

    monsterType = names[randomNameIndex];

    const name = names[randomNameIndex];

    const nameDiv = document.getElementById("type");
    nameDiv.innerHTML = '<strong><em>Monster Type:</em></strong> ' + name+'  ';

    const titleDiv = document.getElementById("title");
    titleDiv.textContent = "WODiscordia - " + monsterType;
}

function generateRandomHP()
{
    const hpDiv = document.getElementById("hp");
    hpDiv.innerHTML = "";

    // roll the HP dice based on the characer class
    var randomNumberRolled = this.rollDice(1, monsterHP[monsterType]);

    var randomNumberToReturn = randomNumberRolled + characterResilience; // Add resilience to rolled number
    
    if (randomNumberToReturn <= 0)
        randomNumberToReturn = 1;

    hpDiv.innerHTML  = '<strong><em>HP:</em></strong> '+randomNumberToReturn+"/"+randomNumberToReturn;
}

function generateRandomMoney() {
    let diceRolls = this.rollDice(classMoney[monsterType], 6);
    if (classMoney[monsterType] > 1) {
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

    abilityDiv.appendChild(this.generateColoredTitle('Abilities/Talents'));

    const finalAbilities = [];
    const abilityNames = [
        'Strength', 'Dexterity', 
        'Agility', 'Vitality',
        'Inspection', 'Senses',
        'Presence', 'Reason'
    ];

    for (let i = 0; i < 8; i++) {
        var abilityName = abilityNames[i];

        const randomNumber = classAbilities[abilityName][monsterType] + level_bonus;
        const finalAbilityValue = abilitiesRollValues[randomNumber];

        const abilityParagraph = document.createElement("p");
        abilityParagraph.innerHTML = '<strong><em>'+abilityNames[i]+'</em></strong>: '+finalAbilityValue+'  ';

        abilityDiv.appendChild(abilityParagraph);
        finalAbilities.push(finalAbilityValue);
    }

    return finalAbilities;
}

function generateClassDescriptionBackgroundAndFlaws()
{
    const infoDiv = document.getElementById("classinfo");
    infoDiv.innerHTML = "";
    randomColor = this.generateRandomColorFromBasicColors();

    infoDiv.appendChild(this.generateColoredTitle("Monster Type: " + monsterType));

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = classDescriptions[monsterType];
    descriptionParagraph.classList.add("col-md-12");

    infoDiv.appendChild(descriptionParagraph);
}

function generateRandomPower() {
    const powersDiv = document.getElementById("powers");
    powersDiv.innerHTML = "";

    powersDiv.appendChild(this.generateColoredTitle("Powers"));

    const classPowersObj = classPowers[monsterType];
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
    titleParagraph.classList.add("rounded-2");
    titleParagraph.classList.add("p-1");
    // Apply the random color we generated as the background
    titleParagraph.style.backgroundColor = randomColor;

    return titleParagraph;
}
