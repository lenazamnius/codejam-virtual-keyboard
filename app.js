// eslint-disable-next-line import/extensions
import keys from './src/data-object.js';

const config = {
  capsLock: false,
  language: 'en',
};

const body = document.querySelector('body');
const boardWrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const boardContainer = document.createElement('div');

let key;
let boardValue;
let boardValueRu;
let keyCode;
let keyType;


function createKey(value, code, type, valueRu) {
  key = document.createElement('div');
  key.setAttribute('id', `${code}`);
  key.setAttribute('data-type', `${type}`);
  if (valueRu) key.setAttribute('data-ru', `${valueRu}`);
  key.innerHTML = value;
  key.classList.add('key-item');
  if (value === 'tab' || value === 'del' || value === 'ctrl' || value === 'win' || value === 'alt') {
    key.classList.add('special', 'key-item');
  } else if (value === 'backspace' || value === 'caps lock' || value === 'shift' || value === 'enter') {
    key.classList.add('double', 'special', 'key-item');
  } else if (value === '&nbsp;') {
    key.classList.add('space', 'key-item');
  } else {
    key.classList.add('key-item');
  }
  return key;
}

function createBoard() {
  body.appendChild(boardWrapper);
  boardWrapper.classList.add('wrapper');
  boardWrapper.appendChild(textarea);
  textarea.setAttribute('placeholder', 'Change language with combination "shift + ctrl"');
  textarea.setAttribute('readonly', '');
  boardWrapper.appendChild(boardContainer);
  boardContainer.classList.add('board-container');
  for (let i = 0; i < keys.length; i += 1) {
    boardValue = keys[i].boardValue;
    boardValueRu = !!keys[i].boardValueRu;
    keyCode = keys[i].code;
    keyType = keys[i].type;
    boardContainer.appendChild(createKey(boardValue, keyCode, keyType, boardValueRu));
  }
}

function keyDownEvent(event) {
  event.preventDefault();

  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyVal = pressedKey.innerText;

  pressedKey.classList.add('active');
  if (pressedKey.dataset.type === 'symbol') {
    if (pressedKey.getAttribute('id') === 'Tab') {
      textarea.textContent += '    ';
    } else {
      textarea.textContent += pressedKeyVal;
    }
  } else if (pressedKey.dataset.type === 'action') {
    if (pressedKey.getAttribute('id') === 'Backspace') {
      const inputText = textarea.textContent;
      textarea.textContent = inputText.slice(0, -1);
    } else if (pressedKey.getAttribute('id') === 'CapsLock') {
      const keyLetters = document.querySelectorAll('.key-item');

      if (!config.capsLock) {
        keyLetters.forEach((val) => {
          const keyId = val.getAttribute('id');

          if (keyId.startsWith('Key')) val.classList.add('uppercase');
          config.capsLock = true;
        });
      } else {
        keyLetters.forEach((val) => {
          const keyId = val.getAttribute('id');

          if (keyId.startsWith('Key')) val.classList.remove('uppercase');
          config.capsLock = false;
        });
      }
    }
  }
}

function keyUpEvent(event) {
  event.preventDefault();

  const pressedKey = document.querySelector(`#${event.code}`);

  pressedKey.classList.remove('active');
}

createBoard();

document.addEventListener('keydown', (event) => keyDownEvent(event));
document.addEventListener('keyup', (event) => keyUpEvent(event));

boardContainer.addEventListener('mousedown', (event) => {
  const pressedKey = event.target;
  const pressedKeyVal = pressedKey.innerText;

  event.target.classList.add('active');
  if (pressedKey.dataset.type === 'symbol') {
    if (pressedKey.getAttribute('id') === 'Tab') {
      textarea.textContent += '    ';
    } else {
      textarea.textContent += pressedKeyVal;
    }
  } else if (pressedKey.dataset.type === 'action') {
    if (pressedKey.getAttribute('id') === 'Backspace') {
      const inputText = textarea.textContent;
      textarea.textContent = inputText.slice(0, -1);
    }
  }
});

boardContainer.addEventListener('mouseup', (event) => event.target.classList.remove('active'));
