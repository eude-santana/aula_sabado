class CardManager{
    flippedCards = new Set();
    urlFactory;

    constructor(factory){
        this.urlFactory = factory;
    }

    gen(heroNumber){
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        let img = clone.querySelector('img');

        img.setAttibute('src', this.urlFactory(heroNumber));

        clone.children[0].addEventListener('click', event => this.onClick(event));

        return clone;
    }

    onClick(event) {
        this.flip(event.target);
    }

    flip(cardNode) {
        cardNode.children[0].classList.add('selected');
        this.flippedCards.add(cardNode);
    }

    unFlip(cardNode) {
        cardNode.children[0].classList.remove('selected');
    }

    disable(cardNode) {
        cardNode.children[0].classList.add('matched');
        this.unFlip(cardNode);
    }
}