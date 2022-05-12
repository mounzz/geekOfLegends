class Heroes {
    constructor(nom, maxPv, pa) {
        this.nom = nom;
        this.maxPv = this.currentPv = maxPv;
        this.pa = pa;
    }
    attack() {
        this.pa *= 1.4;
        this.currentPv *= 0.75;
    }
    defense() {
        this.pa *= 0.5;
        this.currentPv *= 2.5;
    }
}

class Archer extends Heroes {
    //carquois de flèches
    static quiver = [7, 8, 9, 10, 11];
    constructor(nom, maxPv, pa) {
        super(nom, maxPv, pa);
        this.nbArrow = this.randomQuiver();
    }

    //choisir en random le nombre de flèches
    randomQuiver() {
        const random = Math.floor(Math.random() * Archer.quiver.length);
        return Archer.quiver[random];
    }

    attack() {
        super.attack();
        if (this.nbArrow < 2) {
            this.nbArrow = 6;
        } else {
            this.nbArrow -= 2;
            return this.pa;

        }

    }
}

class Mage extends Heroes {
    static mana = [7, 9, 11];
    constructor(nom, maxPv, pa) {
        super(nom, maxPv, pa);
        this.manaPoints = this.randomMana();
    }


    randomMana() {
        const random = Math.floor(Math.random() * Mage.mana.length);
        return Mage.mana[random];
    }

    attack() {
        super.attack();
        if (this.manaPoints < 2) {
            this.manaPoints = 7;
        } else {
            this.manaPoints -= 2;
            return this.pa;
        }
    }
}

class Warrior extends Heroes {
    constructor(nom, maxPv, pa) {
        super(nom, maxPv, pa)
        this.ragePoints = 0;
    }

    attack() {
        super.attack();

        if (this.ragePoints === 4) {
            return this.pa *= 1.25;
        } else {
            return this.pa;
        }

    }
}

class Boss {
    static riddles = [
        // enigme 1
        {
            question: "Qu'est-ce qui est vert et qui a la chair de poule",
            reponse: "un cornichon",

        },
        // enigme 2
        {
            question: "Qu'est-ce qui est jaune et qui attend?",
            reponse: "Jonathan",

        },
        // enigme 3
        {
            question: "Je commence la nuit et je termine le matin, qui suis-je ?",
            reponse: "N",

        },
    ];
    constructor(nom, maxPv, pa) {
        this.nom = nom;
        this.maxPv = this.currentPv = maxPv;
        this.pa = pa;

    }
    pickRiddles() {
        const random = Math.floor(Math.random() * Boss.riddles.length)
        return Boss.riddles[random];
    }
    attack() {
        return this.pa;
    }

}

//boucles pour poser questions

let maxPoints = 300;

const askQuestions = (question) => {
    let userAnswer;
    do {
        userAnswer = +prompt(question);
    }
    while (Number.isNaN(userAnswer) || userAnswer <= 0)
    return userAnswer;
}

const createHeroes = (heroClass) => {
    const nom = prompt(`Donnez un nom à votre ${heroClass}`);
    const maxPv = askQuestions(`Combien de points de vie lui accordez-vous ?`);
    const pa = askQuestions(`Combien de points d'attaque lui accordez-vous ?`);
    maxPoints -= (maxPv + pa);
    alert(`Il vous reste ${maxPoints} points à répartir`);
    switch (heroClass) {
        case 'archer':
            return new Archer(nom, maxPv, pa);
        case 'warrior':
            return new Warrior(nom, maxPv, pa);
        case 'mage':
            return new Mage(nom, maxPv, pa);
    }

}

//repartir points entre persos

const pointsRepartition = () => {
    let archer;
    let warrior;
    let mage;

    do {
        archer = createHeroes('archer')
        warrior = createHeroes('warrior')
        mage = createHeroes('mage')
    }
    while (maxPoints > 0)
    return { archer, warrior, mage }

}

//choisir boss en random

const selectBoss = () => {
    const random = Math.floor(Math.random() * bosses.length);
    return bosses[random];
}

//determiner si heros sont KO
const areHeroesDead = (heroes) => {
    return heroes.archer.currentPv <= 0
        && heroes.mage.currentPv <= 0
        && heroes.warrior.currentPv <= 0
}
//determiner si boss est KO
const isBossDead = (selectedBoss) => {
    return selectedBoss.currentPv <= 0;
}

//instancer les boss && heros

const heroes = pointsRepartition();
const chronos = new Boss("Chronos", 2000, 20);
const lilith = new Boss("Lilith", 2000, 50);
const sauron = new Boss("Sauron", 2500, 30);
const bosses = [chronos, lilith, sauron];
const selectedBoss = selectBoss();

alert(`Vous allez affronter ${selectedBoss.nom}`)

let isHeroesTurn = true;
let resolvedRiddle = false

//combat par tour

while ((!isBossDead(selectedBoss) && !resolvedRiddle) && !areHeroesDead(heroes)) {
    const bossTargets = ['archer', 'warrior', 'mage'];
    if (isHeroesTurn) {

        const userChoice = confirm(`Voulez-vous attaquer?`);

        if (userChoice) {
            selectedBoss.currentPv -= Math.floor((heroes.archer.attack() + heroes.warrior.attack() + heroes.mage.attack()));

            if (selectedBoss.currentPv <= selectedBoss.maxPv * 0.2) {
                selectedBoss.currentPv = selectedBoss.maxPv * 0.2;
            }

            heroes.warrior.ragePoints += 1;
            heroes.archer.nbArrow += 1;

        } else {
            heroes.archer.defense();
            heroes.warrior.defense();
            heroes.mage.defense();

            bossTargets.push("archer", "archer", "warrior", "warrior", "mage", "mage")
        }
    } else {
        if (selectedBoss.currentPv <= selectedBoss.maxPv * 0.2) {
            const finalAttack = selectedBoss.pickRiddles();

            let tentatives = 3;
            while (tentatives > 0 && !resolvedRiddle) {
                let userAnswer = prompt(finalAttack.question);

                if (userAnswer === finalAttack.reponse) {
                    resolvedRiddle = true;
                    alert(`Vous avez vaincu le boss`);
                } else {
                    tentatives--;
                }
                if (tentatives === 0) {
                    heroes.archer.currentPv = 0
                    heroes.warrior.currentPv = 0
                    heroes.mage.currentPv = 0
                }
            }

        } else {
            
            const currentTarget = Math.floor(Math.random() * bossTargets.length);

            switch (bossTargets[currentTarget]) {
                case 'archer':
                    heroes.archer.currentPv -= selectedBoss.pa
                    break;
                case 'warrior':
                    heroes.warrior.currentPv -= selectedBoss.pa
                    break;
                case 'mage':
                    heroes.mage.currentPv -= selectedBoss.pa
                    break;
            }
            console.log(bossTargets[currentTarget])
            console.table(heroes);
            console.table(selectedBoss)
        }
        if(areHeroesDead(heroes)){
            alert("Vous avez perdu!")
        }
    }
    isHeroesTurn = !isHeroesTurn;
    
}




