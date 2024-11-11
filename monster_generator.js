
let monsterType = '';
let randomColor;

let levelBonus = 0;

let monsterHP = {
    "Skeleton":12,
    "Ghoul":8,
    "Zombie":8,
};

let classAbilities = {
    Strength: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":2,
    },
    Dexterity: {
        "Skeleton":-2,
        "Ghoul":-1,
        "Zombie":2,
    },
    Agility: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":-1,
    },
    Vitality: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
    Inspection: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
    Senses: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
    Presence: {
        "Skeleton":2,
        "Ghoul":-1,
        "Zombie":1,
    },
    Reason: {
        "Skeleton":2,
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
    "Ghoul":'Scholarly Training. The Ghoul has received extensive training in the arts of literature, philosophy, and the sciences.',
    "Zombie":'Drunken Fist. The Zombie fights with an unpredictable, fluid style that confounds opponents. They may add their Spirit modifier when making unarmed attacks.'
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
    monsterStrength = abilities[0];
    monsterAgility = abilities[1];
    monsterDexterity = abilities[2];
    monsterVitality = abilities[3];
    monsterInspection = abilities[4];
    monsterSenses = abilities[5];
    monsterPresence = abilities[6];
    monsterReason = abilities[7];
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

    var randomNumberToReturn = randomNumberRolled + monsterResilience; // Add resilience to rolled number
    
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

        const finalAbilityValue = classAbilities[abilityName][monsterType] + level_bonus;

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
