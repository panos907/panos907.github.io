
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
};

let classTenets = {
    "Forgotten Ronin":"The Ronin's Creed",
    "Erudite Samurai":"Bushido",
    "Corrupted Shinobi":"The Unseen Virtues",
    "Reckless Sumo":"The Sumo’s Oath",
    "Onmyoji":"The Rules of the Divine",
    "Drunken Monk":"Noble Truths",
    "Bakuto":"The Gambler's Way",
    "Yamabushi":"The Yamabushi's Path",
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

    const name = names[randomNameIndex]+ " " + surnames[randomSurnameIndex] + ", " + characterNickName+"  ";

    const nameDiv = document.getElementById("name");
    nameDiv.textContent = "Name " + name+"  ";

    const titleDiv = document.getElementById("title");
    titleDiv.textContent = "Ronin - " + characterName;
}

function generateRandomClass()
{
    const classes = Object.keys(classHP);

    const randomClassIndex = Math.floor(Math.random() * classes.length);
    const className = classes[randomClassIndex];

    const classDiv = document.getElementById("class");
    classDiv.textContent = "Class " + className+"  ";

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

    hpDiv.textContent = "HP "+randomNumberToReturn+"/"+randomNumberToReturn;
}

function generateRandomVirtues()
{
    const virtuesDiv = document.getElementById("virtues");
    virtuesDiv.innerHTML = "";

    const randomNumber = Math.floor(Math.random() * classVirtues[characterClass]) + 1; // Generate a random number between 1 and 100
    virtuesDiv.textContent = "Virtues "+randomNumber+"  ";
}

function generateHonour()
{
    const honourDiv = document.getElementById("honour");
    honourDiv.innerHTML = "";

    const honorNumber = classHonour[characterClass];
    honourDiv.textContent = "Honour "+honorNumber+"  ";
}

function generateTenets()
{
    const tenetsDiv = document.getElementById("tenets");
    tenetsDiv.innerHTML = "";

    const tenetsNumber = classTenets[characterClass];
    tenetsDiv.textContent = "Tenets "+tenetsNumber+"  ";
}

function generateRandomAbilities() {
    const abilityDiv = document.getElementById("abilities");
    abilityDiv.innerHTML = "";

    const finalAbilities = [];
    const abilityNames = ['Swiftness', 'Spirit', 'Vigour', 'Resilience'];

    for (let i = 0; i < 4; i++) {
        let diceRolls = this.rollDice(3, 6);
        var abilityName = abilityNames[i];

        diceRolls.sort();
        diceRolls.shift(); // Remove the smallest number

        const diceSum = diceRolls.reduce((acc, val) => acc + val, 0);
        const randomNumber = diceSum + classAbilities[abilityName][characterClass];
        const finalAbilityValue = abilitiesRollValues[randomNumber];

        const abilityParagraph = document.createElement("p");
        abilityParagraph.textContent = abilityNames[i]+": "+finalAbilityValue+"  ";

        abilityDiv.appendChild(abilityParagraph);
        finalAbilities.push(finalAbilityValue);
    }

    return finalAbilities;
}

function generateRandomTraits() {
    const traitsDiv = document.getElementById("traits");
    traitsDiv.innerHTML = "";

    const randomTraitIndex = Math.floor(Math.random() * classTraits[characterClass].length);
    const tempClassTraits = classTraits[characterClass][randomTraitIndex];

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = "You are: " + characterName;
    nameParagraph.classList.add("fw-bold");
    nameParagraph.classList.add("col-md-6");

    // Generate a random RGB color
    const randomColor = this.generateRandomColorFromBasicColors();
    // Apply the random color as the background
    nameParagraph.style.backgroundColor = randomColor;

    const traitParagraph = document.createElement("p");
    traitParagraph.textContent = tempClassTraits;

    traitsDiv.appendChild(nameParagraph);
    traitsDiv.appendChild(traitParagraph);
}

