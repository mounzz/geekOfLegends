class Boss {
    constructor(nom, pv, pa ){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.enigme = () =>{
           if(Boss.pv <= Boss.pv * 0.2){

           }else{

           }
        }
        this.attack = () =>{

        }
    }
}

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
    this.ptRage = ptRage;
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
