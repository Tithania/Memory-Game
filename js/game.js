const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

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

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
  const firstPersonagem = firstCard.getAttribute('data-personagem');
  const secondPersonagem = secondCard.getAttribute('data-personagem');

  if (firstPersonagem === secondPersonagem) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

    
}

const createCard = (personagem) => {
    const card  = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back  = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${personagem}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem', personagem)

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

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTimer = Number(timer.innerHTML);
        timer.innerHTML = currentTimer +1;
    }, 1000);
}

window.onload = () => {
    // Recupera o nome do jogador do Local Storage ou usa 'Player' como padrão
    const playerName = localStorage.getItem('player') || 'Player';
    spanPlayer.innerHTML = playerName.trim(); // Remove espaços indesejados
    startTimer();
    loadGame();
}