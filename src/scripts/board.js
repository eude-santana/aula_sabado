class BoardManager{

    cardManager;
    node;
    numImgs;
    curNumCards;

    constructor(id, numImgs, cardManager) {
        this.node = document.getElementById(id);
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }

    clear(){
        this.node.innerHTML = "";
    }

    fill(numberCards){
        if(numberCards > 2 * this.numImgs) {
            console.error(`Error: Not enough images for ${numberCards} cards.`);
            numberCards = 2 * this.numImgs;
        }

        this.clear();
        this.addCard(this.cardManager.gen(1));
    }

    addCard(card){this.node.appendChild(card)}

    genRamdonList(size){
        let list = Array(size/2).fill().map((_,i)=>i+1);
        console.log({list});

        list = [...list, ...list].sort(()=>Math.random()-0.5);
        return list;
    }

}