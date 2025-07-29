const grid = document.querySelector('.grid');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (personagem) => {
    const card  = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back  = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${personagem}.png')`


    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {

    personagens.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);
    });
}

loadGame();