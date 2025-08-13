// setggins game name
let gameName = "Guess the word";
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('footer').innerHTML = `${gameName} Create By Mostafa © 2025`;
let message = document.querySelector('.message');

// game options
let numberOfTries = 6;
let numberOfInputs = 6;
let currentTry = 1;

// Word
const words = ["Create", "Update", "Delete", "Clouds", "Fables", "Flakes", "Stamps", "Folders"];
let wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();

function generateInput () {

  let inputsDiv = document.querySelector('.inputs');

  for (let i = 1; i <= numberOfInputs; i++) {
  
    let innerDiv = document.createElement('div');
    innerDiv.classList.add(`try-${i}`);
    innerDiv.innerHTML = `<span>Try ${i}</span>`;
    
    if (i !== 1) {
      innerDiv.classList.add('disabled-input');
    }

    for (let j = 1; j <= numberOfInputs; j++) {
      let input = document.createElement('input');
      input.type = "text";
      input.id = `guess-${i}-letter-${j}`;
      input.maxLength = "1";
      innerDiv.append(input);
    }

    inputsDiv.append(innerDiv);
  }
  inputsDiv.children[0].children[1].focus();

  // disable all disabled inputs
  let disabledInputs = document.querySelectorAll('.disabled-input input');
  disabledInputs.forEach(element => {
    element.disabled = true;
  });

  let allInnputs = document.querySelectorAll('input');
  allInnputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      this.value = this.value.toUpperCase();
      let next = allInnputs[index + 1];
      if (next) 
        next.focus();
    })

    input.addEventListener('keydown', function(e) {
      const curIndex = Array.from(allInnputs).indexOf(e.target);
      if (e.key === 'ArrowLeft' && curIndex > 0) {
        allInnputs[curIndex - 1].focus();
      }
      if (e.key === 'ArrowRight' && curIndex < allInnputs.length - 1) {
        allInnputs[curIndex + 1].focus();
      }
    })
  });
}

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', handelGuesses);

console.log(wordToGuess);
function handelGuesses() {
  let successGuess = true;
  for (let i = 1; i <= numberOfInputs; i++) {
    let inputGuessLetter = document.querySelector(`#guess-${currentTry}-letter-${i}`);
    let letter = inputGuessLetter.value.toLowerCase();
    let tureGuess = wordToGuess[i - 1];
    if(letter === "") {
      successGuess = false;
      continue;
    }
    if (letter === tureGuess) {
      inputGuessLetter.classList.add('yes-in-place');
      inputGuessLetter.classList.remove('not-in-place');
      inputGuessLetter.classList.remove('no');
    } else if (wordToGuess.includes(letter)) {
      inputGuessLetter.classList.remove('yes-in-place');
      inputGuessLetter.classList.add('not-in-place');
      inputGuessLetter.classList.remove('no');
      successGuess = false;
    } else {
      inputGuessLetter.classList.remove('yes-in-place');
      inputGuessLetter.classList.remove('not-in-place');
      inputGuessLetter.classList.add('no');
      successGuess = false;
    }
  }
  if (successGuess) {
    message.classList.add('success');
    message.innerHTML = `You Win The word is ${wordToGuess}`;
  } else {
    message.classList.add('error');
    message.innerHTML = 'You Lose The word is ' + wordToGuess;
  }
}

window.onload = generateInput;