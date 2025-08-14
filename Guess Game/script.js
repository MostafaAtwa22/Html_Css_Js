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
let numberOfHints = 2;

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

// Manage Hints
document.querySelector('.hint span').innerHTML = numberOfHints;
let hintBtn = document.querySelector('.hint');
hintBtn.addEventListener('click', (e) => {
  getHint();
});

function getHint() {
  const enableInputs = document.querySelectorAll('input:not([disabled])');
  const emptyInputs = Array.from(enableInputs).filter(input => input.value === '');
  if (emptyInputs.length > 0 && emptyInputs.length < wordToGuess.length) {
    numberOfHints--;
    document.querySelector('.hint span').innerHTML = numberOfHints;
  }
  if (numberOfHints === 0) {
    hintBtn.disabled = true;
  }
  if (emptyInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyInputs.length);
    const randomInput = emptyInputs[randomIndex];
    const indexToFill = Array.from(enableInputs).indexOf(randomInput);
    if (indexToFill !== -1) {
      randomInput.value = wordToGuess[indexToFill].toUpperCase();
      randomInput.classList.add('yes-in-place');
      message.classList.remove('error');
      message.classList.add('info');
      message.innerHTML = 'Hint: ' + randomInput.value;
    }
  }
  else if (emptyInputs.length === 0) {
    message.classList.add('error');
    message.innerHTML = 'The Fileds is filled';
  }
}

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', handelGuesses);

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
    } else if (wordToGuess.includes(letter)) {
      inputGuessLetter.classList.add('not-in-place');
      successGuess = false;
    } else {
      inputGuessLetter.classList.add('no');
      successGuess = false;
    }
  }

  // if u win
  if (successGuess) {
    message.classList.remove('error');
    message.classList.add('success');
    message.innerHTML = '';
    message.innerHTML = `You Win The word is ${wordToGuess}`;
    if(numberOfHints == 2) {
      message.innerHTML = `Good job u didn't use hints`;
    }
    let allTries = document.querySelectorAll('.inputs > div');
    allTries.forEach((tryDiv) => {
      tryDiv.classList.add('disabled-input');
    })
    checkBtn.disabled = true;
    hintBtn.disabled = true;
  } 
  // if lose
  else {
    document.querySelector(`.try-${currentTry}`).classList.add('disabled-input');
    const curTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    curTryInputs.forEach((input) => {
      input.disabled = true;
    })

    currentTry++;

    const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    nextTryInputs.forEach((input) => {
      input.disabled = false;
    })
    let ele = document.querySelector(`.try-${currentTry}`);
    if (ele){
      document.querySelector(`.try-${currentTry}`).classList.remove('disabled-input');
      ele.children[1].focus();
    } else {
      message.classList.add('error');
      message.innerHTML = 'Game Over You Lose The word is ' + wordToGuess;
      checkBtn.disabled = true;
      hintBtn.disabled = true;
    }
  }
}

function handelBackspace(e) {
  if (e.key == 'Backspace') {
    const inputs = document.querySelectorAll('input:not([disabled])');
    const curIndex = Array.from(inputs).indexOf(e.target);
    if (curIndex > 0) {
      const curInput = inputs[curIndex];
      const prevInput = inputs[curIndex - 1];
      curInput.value = '';
      prevInput.value = '';
      prevInput.focus();
    }
  }
}

window.addEventListener('keydown', handelBackspace);
window.onload = generateInput;