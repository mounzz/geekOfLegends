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
    constructor(nom, maxPv, pa ){
        this.nom = nom;
        this.maxPv = this.currentPv = maxPv;
        this.pa = pa;
        
    }
    pickRiddles(){
        const random = Math.floor(Math.random()* this.riddles.length)
        return this.riddles[random];
    }
    attack(){
        return this.pa;
    }
    
}