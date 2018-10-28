const inputs = document.querySelectorAll('input[name=pet]');
const selection = document.querySelector('.selection');
const results = document.querySelector('.results');

const perro = document.querySelector('.perro');
const gato = document.querySelector('.gato');
const tortuga = document.querySelector('.tortuga');

const catWin = document.querySelector('.cat-win');
const dogWin = document.querySelector('.dog-win');

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', choosePet);
}

function choosePet(event) {
  let pet = event.target.value;

  selection.classList.add('hidden');
  results.classList.remove('hidden');

  computerChoose(pet);
}

function computerChoose(pet) {
  let computer = Math.floor(Math.random()*3);
  if(computer == 0) {
    computer = 'gato';
  } else if( computer == 1) {
    computer = 'perro';
  } else {
    computer = 'tortuga';
  }

  match(pet, computer);
}

function match(pet, computer) {
  if(pet == 'gato' && computer == 'perro') {
    catWin.classList.remove('hidden');
  } else if(pet == 'perro' && computer == 'tortuga') {
    dogWin.classList.remove('hidden');
  }
}
