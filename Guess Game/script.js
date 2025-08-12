// setggins game name
let gameName = "Guess the word";
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('footer').innerHTML = `${gameName} Create By Mostafa © 2025`;

// game options
let numberOfTries = 6;
let numberOfInputs = 6;
let currentTry = 1;

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
}

window.onload = generateInput;