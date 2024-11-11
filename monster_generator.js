
let monsterType = '';
let randomColor;

let monsterLevel = 1;

let monsterHP = {
    "Skeleton":12,
    "Ghoul":21,
    "Zombie":16,
    "Bandit":10,
};

let monsterArmor = {
    "Skeleton":6,
    "Ghoul":15,
    "Zombie":6,
    "Bandit":8,
};

let monsterSpeed = {
    "Skeleton":5,
    "Ghoul":4,
    "Zombie":3,
    "Bandit":5,
};

let monsterWeaknesses = {
    "Skeleton":"Holy, Bashing",
    "Ghoul":"Holy",
    "Zombie":"Holy, Cutting",
    "Bandit":"None",
};

let monsterResistances = {
    "Skeleton":"Cutting, Impaling, Piercing",
    "Ghoul":"None",
    "Zombie":"Bashing",
    "Bandit":"None",
};

let monsterImmunities = {
    "Skeleton":"Poison",
    "Ghoul":"None",
    "Zombie":"Poison",
    "Bandit":"None",
};

let monsterAbilities = {
    Strength: {
        "Skeleton":3,
        "Ghoul":-1,
        "Zombie":2,
        "Bandit":2,
    },
    Dexterity: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":-1,
        "Bandit":2,
    },
    Agility: {
        "Skeleton":3,
        "Ghoul":-1,
        "Zombie":-2,
        "Bandit":2,
    },
    Vitality: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":3,
        "Bandit":2,
    },
    Mindpower: {
        "Skeleton":-1,
        "Ghoul":-1,
        "Zombie":-2,
        "Bandit":2,
    },
    Senses: {
        "Skeleton":-1,
        "Ghoul":-1,
        "Zombie":-2,
        "Bandit":2,
    },
    Presence: {
        "Skeleton":0,
        "Ghoul":-1,
        "Zombie":0,
        "Bandit":2,
    },
    Reason: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":-4,
        "Bandit":2,
    },
};

let monsterDescriptions = {
    "Skeleton":"Skeletons are undead creatures born of accursed sorcery, roaming with an eternal and generally mindless thirst for vengeance. Lacking flesh, this undead monstrosity is a macabre assembly of bones, held together with cursed magic. It's empty eye sockets glow with malevolent energy, eflecting the purpose of it's creator. Skeletons wield spectral weapons with surprising precision and are often cloaked in tattered remnants of armor, evidence of what they wore in life. Animated by dark Magic, the skeleton is an unholy guardian tirelessly patroling the crypts and cursed domains it watches over.",
    "Ghoul":"Ghouls are people who have been cursed to crave the flesh of other people. THe curse typically comes about as a result of cannibalism, though there are otehr possible causes as well. Ghouls can originate from any of the intelligent races, such as humans, elves, dwarves, kagari, and so forth. The appearance of a ghoul changes to include sharp teeth for the tearing of flesh, a gaunt appearance, long claws, and a feral gleam in their eyes. They also lose their hair. The insatiable hunger for the flesh of the living haunts their every moment.",
    "Zombie":"The Zombie, a scoundrel of the highest order, has forsaken all traditional honour. Instead, they use their stealth and guile to weave a web of deceit, assassinating their prey from the shadows. No lord or clan can control this wily fiend, for their only true master is their own greed. Their blades are sharp, their wits sharper, and their hearts as black as the night they stalk. They are the shadow that creeps up behind you, the serpent that slithers beneath your feet. Cross them at your own peril, for they are the Zombie, and their loyalty is to only themselves.",
    "Bandit":"Bandits are as common as they are varied. Old decrepit soldiers turned to crime, convicted criminals that escaped, hired rogues, literally any intelligent creature that goes against the law and does highway heists can be a bandit.",
};

let monsterPowers = {
    "Skeleton":'Strength in Numbers. The Skeleton can draw upon their inner strength and resolve in times of great need. Once per day, they may roll d6 and add the result to any one roll they make.',
    "Ghoul":'Paralyzing Bite. If the Ghoul successfully hits a creature with a Bite attack, the target must succeed on a TN 10 fortitude check, or become paralyzed until they succeed.',
    "Zombie":'Tough. When the zombie would normally die, it can instead attempt a TN 5 Fortitude check. On a success it remains at 1 health point instead. (With each success the TN increases by a factor of 5)',
    "Bandit":'Tactical Prowess. The Bandit gains a Major Advantage when flanking instead of a simple one.'
}

let monsterActions = {
    "Skeleton":'Scratch: Melee Attack: + Combat modifier, Reach 1 square, 1 target. Damage: 1D6 +(STR) + Combat Modifier',
    "Ghoul":'Bite: Melee Attack: +Combat Modifier, Reach 1 square, 1 target. Damage: 1D10 + Combat Modifier Claw: Melee Attack: +Combat Modifier, Reach 1 square, 1 target. Damage: 2D4 + Combat Modifier',
    "Zombie":'Bite: Melee Attack + Combat Modifier, Reach 1 square, 1 target. Damage: 1D8 + Combat Modifier. Slam. Melee Attack: +Combat Modifier, Reach 1 square, 1 target. Damage: 1D4 + Combat Modifier',
    "Bandit":'BroadSword: Melee Attack + Combat Modifier, Reach 1 square, 1 target. Damage 1D8 + Combat Modifier.'
}

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
    "Bandit": {
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
    "Bandit": 3,
};

let monsterDefense = {
    "Skeleton": 10,
    "Ghoul": 10,
    "Zombie": 10,
    "Bandit": 10,
};

let monsterDefenseModifier = {
    "Skeleton": 1,
    "Ghoul": 1,
    "Zombie": 1,
    "Bandit": 1,
};

let monsterCombatModifier = {
    "Skeleton": 1,
    "Ghoul": 1,
    "Zombie": 1,
    "Bandit": 1,
};

let monsterSkills = {
    "Skeleton": 3,
    "Ghoul": 3,
    "Zombie": 3,
    "Bandit": 3,
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
        monsterLevel = Math.round(levelSelectInput.value);     
    }
    else {
        monsterLevel = 1;   
    }

    if (monsterLevel > 20)
        monsterLevel = 20;

    if (monsterLevel < 1)
        monsterLevel = 1;

    this.generateMonsterType();
    this.generateMonsterInfo();
    this.generateResistancesWeaknessesAndImmunities();
    let abilities = this.generateRandomAbilities();
    monsterStrength = abilities[0];
    monsterAgility = abilities[1];
    monsterDexterity = abilities[2];
    monsterVitality = abilities[3];
    monsterMindpower = abilities[4];
    monsterSenses = abilities[5];
    monsterPresence = abilities[6];
    monsterReason = abilities[7];
    this.generateHP();
    this.generateArmor();
    this.generateSpeed();
    this.generatePowers();
    this.generateCombatInfo();
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

    let hpToReturn = monsterHP[monsterType];

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

    let armorToReturn = monsterArmor[monsterType];

    if (monsterLevel > 1) {
        armorToReturn = armorToReturn + monsterArmorBonus[monsterType] * monsterLevel;
    }

    armorDiv.innerHTML  = '<strong><em>Armor Points:</em></strong> '+armorToReturn;
}

function generateResistancesWeaknessesAndImmunities()
{
    const resistanceDiv = document.getElementById("resistance");
    resistanceDiv.innerHTML = "";

    let resistance = monsterResistances[monsterType];

    resistanceDiv.innerHTML  = '<strong><em>Resistance:</em></strong> '+resistance;

    const weaknessDiv = document.getElementById("weakness");
    weaknessDiv.innerHTML = "";

    let weakness = monsterWeaknesses[monsterType];

    weaknessDiv.innerHTML  = '<strong><em>Weakness:</em></strong> '+weakness;

    const immunityDiv = document.getElementById("immunity");
    immunityDiv.innerHTML = "";

    let immunity = monsterImmunities[monsterType];

    immunityDiv.innerHTML  = '<strong><em>Immunity:</em></strong> '+immunity;
}

function generateSpeed()
{
    const speedDiv = document.getElementById("speed");
    speedDiv.innerHTML = "";

    let speedToReturn = monsterSpeed[monsterType];

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
        'Mindpower', 'Senses',
        'Presence', 'Reason'
    ];

    for (let i = 0; i < 8; i++) {
        let abilityName = abilityNames[i];

        const finalAbilityValue = monsterAbilities[abilityName][monsterType];

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
    descriptionParagraph.textContent = monsterDescriptions[monsterType];
    descriptionParagraph.classList.add("col-md-12");

    infoDiv.appendChild(descriptionParagraph);
}

function generatePowers() {
    const powersDiv = document.getElementById("powers");
    powersDiv.innerHTML = "";

    powersDiv.appendChild(this.generateColoredTitle("Powers"));

    const classPowersObj = monsterPowers[monsterType];

    const powerParagraph = document.createElement("p");
    powerParagraph.textContent = classPowersObj;

    powersDiv.appendChild(powerParagraph);

    const monsterActionsObj = monsterActions[monsterType];

    const actionsParagraph = document.createElement("p");
    actionsParagraph.textContent = monsterActionsObj;

    powersDiv.appendChild(actionsParagraph);
}

function generateCombatInfo() {
    const combatDiv = document.getElementById("combat");
    combatDiv.innerHTML = "";

    combatDiv.appendChild(this.generateColoredTitle("Combat/Skills"));

    let monsterDefenseModifierValue = monsterDefenseModifier[monsterType];

    if (monsterLevel > 1) {
        monsterDefenseModifierValue = monsterDefenseModifierValue + monsterLevel;
    }

    const defenseModifierParagraph = document.createElement("p");
    defenseModifierParagraph.textContent = 'Defense Modifier: '+monsterDefenseModifierValue;

    combatDiv.appendChild(defenseModifierParagraph);

    let monsterDefenseValue = monsterDefense[monsterType];

    monsterDefenseValue = monsterDefense[monsterType] + monsterDefenseModifierValue + monsterAbilities['Agility'][monsterType];

    const defenseParagraph = document.createElement("p");
    defenseParagraph.textContent = 'Defense: '+monsterDefenseValue;

    combatDiv.appendChild(defenseParagraph);

    let combatModifierValue = monsterCombatModifier[monsterType];

    if (monsterLevel > 1) {
        combatModifierValue = combatModifierValue + monsterLevel;
    }

    const combatModifierParagraph = document.createElement("p");
    combatModifierParagraph.textContent = 'Combat Modifier: '+combatModifierValue;

    combatDiv.appendChild(combatModifierParagraph);

    // let monsterSkillValue = monsterSkills[monsterType];

    // const skillsParagraph = document.createElement("p");
    // skillsParagraph.textContent = 'Skills: '+monsterSkillValue;

    // combatDiv.appendChild(skillsParagraph);
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
