class Heroes{
    constructor(nom, maxPv, pa){
        this.nom = nom;
        this.maxPv = this.currentPv = maxPv;
        this.pa = pa;
    }
    attack(){
        this.pa *= 1.4;
        this.currentPv *= 0.75;
    }
    defense(){
        this.pa *= 0.5;
        this.currentPv *= 2.5;
    }
}

class Archer extends Heroes{
    //carquois de flèches
    static quiver = [7, 8, 9, 10, 11];
    constructor(nom, maxPv, pa){
        super(nom, maxPv, pa);
        this.nbArrow = this.randomQuiver();
    }
    
    //choisir en random le nombre de flèches
    randomQuiver(){
        const random = Math.floor(Math.random()*Archer.quiver.length);
        return Archer.quiver[random];
    }

    attack(){
        super.attack();
        if(this.nbArrow < 2){
            this.nbArrow = 6;
        } else{
            this.nbArrow -=2;
            return this.pa;

        }     

    }
}

class Mage extends Heroes{
    static mana = [7, 9, 11];
    constructor(nom, maxPv, pa){
        super(nom, maxPv, pa);
        this.manaPoints = this.randomMana();
    }
    

    randomMana(){
        const random = Math.floor(Math.random()*Mage.mana.length);
        return Mage.mana[random];
    }

    attack(){
        super.attack();
        if(this.manaPoints < 2){
            this.manaPoints = 7;
        } else{
            this.manaPoints-=2;
            return this.pa;
        }     
    }
}

class Warrior extends Heroes{
    constructor(nom, maxPv, pa){
        super(nom, maxPv, pa)
        this.ragePoints = 0;
    }

    attack(){
        super.attack();

        if(this.ragePoints === 4){
            return this.pa *=1.25;
        }else{
            return this.pa;
        }

    }
}


//boucles pour poser questions

const askQuestions = (question) =>{
    let userAnswer;
    do{
        userAnswer = +prompt(question);
    }
    while(Number.isNaN(userAnswer) || userAnswer <= 0)
    return userAnswer;
}

const createHeroes = (heroClass) =>{
    const nom = prompt(`Donnez un nom à votre ${heroClass}`);
    const maxPv = askQuestions(`Combien de points de vie lui accordez-vous ?`)
    const pa = askQuestions(`Combien de points d'attaque lui accordez-vous ?`)
    console.log(maxPv)
    console.log(pa)
    switch(heroClass){
        case 'archer':
            return new Archer (nom, maxPv, pa);
        case 'warrior':
            return new Warrior (nom, maxPv, pa);
        case 'mage':
            return new Mage (nom, maxPv, pa);
    }

}

const archer = createHeroes('archer')

console.table(archer);

