const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Formulário enviado');
  localStorage.setItem('player', input.value);
  window.location.href = 'pages/game.html';
};

input.addEventListener('input', validateInput);

form.addEventListener('submit', handleSubmit);