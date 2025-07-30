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

const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card');
}

const createCard = (personagem) => {
    const card  = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back  = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${personagem}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicatePersonagens = [...personagens, ...personagens]

    const shuffledArray = duplicatePersonagens.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);
    });
}

loadGame();