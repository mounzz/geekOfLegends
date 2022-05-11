

let Sauron = new Boss("Sauron", 150, 30);
let Chronos = new Boss("Chronos", 200, 25);
let Lilith = new Boss("Litith", 250, 40);


class Heros{
    constructor(nom, pv, pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
}

class Archer extends Heros{
    constructor(nom, pv, pa, nbArrows){
    super(nom, pv, pa);
    this.nbArrows = nbArrows;
    this.attack =()=>{

    }
    this.defense = () =>{
        
    }
    }
}

class Warrior extends Heros{
    constructor(nom, pv, pa, ptRage){
    super(nom, pv, pa);
    this.ptRage = 0;
    this.attack =()=>{

    }
    this.defense = () =>{

    }
    }
}

class Mage extends Heros{
    constructor(nom, pv, pa, pm){
    super(nom, pv, pa);
    this.pm = pm;
    this.attack =()=>{

    }
    this.defense = () =>{
        
    }
    }
}

let archer = new Archer();
let warrior = new Warrior();
let mage = new Mage();

let maxPoints = 200;
let PointsRestant;

function createHeros(){
   
    archer.nom = prompt("Nommez votre archer.")
    alert(`Votre archer s'appelle: ${archer.nom}`);
    warrior.nom = prompt("Nommez votre guerrier.")
    alert(`Votre archer s'appelle: ${warrior.nom}`);
    mage.nom = prompt("Nommez votre mage.")
    alert(`Votre archer s'appelle: ${mage.nom}`);

    // archer
    alert(`Vous avez ${maxPoints} à répartir par personnage.`)
    archer.pv = +prompt(`Combien de points voulez-vous attribuer pour les points de vie de ${archer.nom}`)
    PointsRestant = maxPoints - archer.pv;
    alert(`Il vous reste ${PointsRestant} points`)
    archer.pa = +prompt(`Combien de points voulez-vous attribuer pour les points d'attaque de ${archer.nom}`)
    PointsRestant -=archer.pa;
    alert(`Il vous reste ${PointsRestant} points`)
    // warrior
    warrior.pv = +prompt(`Combien de points voulez-vous attribuer pour les points de vie de ${warrior.nom}`)
    PointsRestant -= warrior.pv;
    alert(`Il vous reste ${PointsRestant} points`)
    warrior.pa = +prompt(`Combien de points voulez-vous attribuer pour les points d'attaque de ${warrior.nom}`)
    PointsRestant -= warrior.pa;
    alert(`Il vous reste ${PointsRestant} points`)
    // mage
    mage.pv = +prompt(`Combien de points voulez-vous attribuer pour les points de vie de ${mage.nom}`)
    PointsRestant -= mage.pv;
    alert(`Il vous reste ${PointsRestant} points`)
    mage.pa = +prompt(`Combien de points voulez-vous attribuer pour les points d'attaque de ${mage.nom}`)
    PointsRestant -= mage.pa;
    alert(`Il vous reste ${PointsRestant} points`)

    if(PointsRestant < 0){
        alert("Vous avez réparti trop de points. Veuillez réessayez!")
        createHeros();
    }else{
        alert("La partie commence")
        console.log(archer)
        console.log(warrior)
        console.log(mage)
    }
}

createHeros();





