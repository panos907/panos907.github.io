
let monsterType = '';
let randomColor;

let monsterLevel = 1;

let monsterHP = {
    "Skeleton":12,
    "Ghoul":21,
    "Zombie":16,
};

let monsterArmor = {
    "Skeleton":6,
    "Ghoul":15,
    "Zombie":6,
};

let monsterSpeed = {
    "Skeleton":5,
    "Ghoul":4,
    "Zombie":3,
};

let classAbilities = {
    Strength: {
        "Skeleton":3,
        "Ghoul":-1,
        "Zombie":2,
    },
    Dexterity: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":2,
    },
    Agility: {
        "Skeleton":3,
        "Ghoul":-1,
        "Zombie":-1,
    },
    Vitality: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
    Inspection: {
        "Skeleton":-1,
        "Ghoul":-1,
        "Zombie":1,
    },
    Senses: {
        "Skeleton":-1,
        "Ghoul":-1,
        "Zombie":1,
    },
    Presence: {
        "Skeleton":0,
        "Ghoul":-1,
        "Zombie":1,
    },
    Reason: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":1,
    },
};

let classDescriptions = {
    "Skeleton":"Skeletons are undead creatures born of accursed sorcery, roaming with an eternal and generally mindless thirst for vengeance. Lacking flesh, this undead monstrosity is a macabre assembly of bones, held together with cursed magic. It's empty eye sockets glow with malevolent energy, eflecting the purpose of it's creator. Skeletons wield spectral weapons with surprising precision and are often cloaked in tattered remnants of armor, evidence of what they wore in life. Animated by dark Magic, the skeleton is an unholy guardian tirelessly patroling the crypts and cursed domains it watches over.",
    "Ghoul":"Ghouls are people who have been cursed to crave the flesh of other people. THe curse typically comes about as a result of cannibalism, though there are otehr possible causes as well. Ghouls can originate from any of the intelligent races, such as humans, elves, dwarves, kagari, and so forth. The appearance of a ghoul changes to include sharp teeth for the tearing of flesh, a gaunt appearance, long claws, and a feral gleam in their eyes. They also lose their hair. The insatiable hunger for the flesh of the living haunts their every moment.",
    "Zombie":"The Zombie, a scoundrel of the highest order, has forsaken all traditional honour. Instead, they use their stealth and guile to weave a web of deceit, assassinating their prey from the shadows. No lord or clan can control this wily fiend, for their only true master is their own greed. Their blades are sharp, their wits sharper, and their hearts as black as the night they stalk. They are the shadow that creeps up behind you, the serpent that slithers beneath your feet. Cross them at your own peril, for they are the Zombie, and their loyalty is to only themselves.",
};

let classPowers = {
    "Skeleton":'Strength in Numbers. The Skeleton can draw upon their inner strength and resolve in times of great need. Once per day, they may roll d6 and add the result to any one roll they make.',
    "Ghoul":'Paralyzing Bite. If the Ghoul successfully hits a creature with a Bite attack, the target must succeed on a TN 10 fortitude check, or become paralyzed until they succeed.',
    "Zombie":'Tough. When the zombie would normally die, it can instead attempt a TN 5 Fortitude check. On a success it remains at 1 health point instead. (With each success the TN increases by a factor of 5)'
}

let monsterBackgrounds = {
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

let monsterHPBonus = {
    "Skeleton": {
        1:2,
        2:3,
        3:4,
        4:5,
        5:6,
    },
    "Ghoul": {
        1:2,
        2:3,
        3:4,
        4:5,
        5:6,
    },
    "Zombie": {
        1:2,
        2:3,
        3:4,
        4:5,
        5:6,
    },
};

let monsterArmorBonus = {
    "Skeleton": 3,
    "Ghoul": 3,
    "Zombie": 3,
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
    const monsterTypeInput = document.getElementById('monster-selector');

    if (monsterTypeInput.value != null) {
        monsterType = monsterTypeInput.value;     
    }

    if (levelSelectInput.value != null) {
        monsterLevel = levelSelectInput.value;     
    }
    else {
        monsterLevel = 1;   
    }

    console.log(monsterLevel)

    this.generateMonsterType();
    this.generateMonsterInfo();
    var abilities = this.generateRandomAbilities();
    monsterStrength = abilities[0];
    monsterAgility = abilities[1];
    monsterDexterity = abilities[2];
    monsterVitality = abilities[3];
    monsterInspection = abilities[4];
    monsterSenses = abilities[5];
    monsterPresence = abilities[6];
    monsterReason = abilities[7];
    this.generateHP();
    this.generateArmor();
    this.generateSpeed();
    this.generatePowers();
}

function generateMonsterType()
{
    const name = monsterType;

    const nameDiv = document.getElementById("type");
    nameDiv.innerHTML = '<strong><em>Monster Type:</em></strong> ' + name+'  ';

    const titleDiv = document.getElementById("title");
    titleDiv.textContent = "WODiscordia - " + monsterType;
}

function generateHP()
{
    const hpDiv = document.getElementById("hp");
    hpDiv.innerHTML = "";

    var hpToReturn = monsterHP[monsterType];

    if (monsterLevel > 1) {
        for (let i = 1; i < monsterLevel; i++) {
            let diceRoll = this.rollDice(1, Object.keys(monsterHPBonus[monsterType]).length);
            hpToReturn = hpToReturn + monsterHPBonus[monsterType][diceRoll];
        }
    }

    hpDiv.innerHTML  = '<strong><em>Health Points:</em></strong> '+hpToReturn;
}

function generateArmor()
{
    const armorDiv = document.getElementById("armor");
    armorDiv.innerHTML = "";

    var armorToReturn = monsterArmor[monsterType];

    if (monsterLevel > 1) {
        armorToReturn = armorToReturn + monsterArmorBonus[monsterType] * monsterLevel;
    }

    armorDiv.innerHTML  = '<strong><em>Armor Points:</em></strong> '+armorToReturn;
}

function generateSpeed()
{
    const speedDiv = document.getElementById("speed");
    speedDiv.innerHTML = "";

    var speedToReturn = monsterSpeed[monsterType];

    speedDiv.innerHTML  = '<strong><em>Speed:</em></strong> '+speedToReturn;
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

        const finalAbilityValue = classAbilities[abilityName][monsterType];

        const abilityParagraph = document.createElement("p");
        abilityParagraph.innerHTML = '<strong><em>'+abilityNames[i]+'</em></strong>: '+finalAbilityValue+'  ';

        abilityDiv.appendChild(abilityParagraph);
        finalAbilities.push(finalAbilityValue);
    }

    return finalAbilities;
}

function generateMonsterInfo()
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

function generatePowers() {
    const powersDiv = document.getElementById("powers");
    powersDiv.innerHTML = "";

    powersDiv.appendChild(this.generateColoredTitle("Powers"));

    const classPowersObj = classPowers[monsterType];

    const powerParagraph = document.createElement("p");
    powerParagraph.textContent = classPowersObj;

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
