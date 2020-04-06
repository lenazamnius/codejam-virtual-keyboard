// eslint-disable-next-line import/extensions
import { keys, arrShiftSymbols, arrNoShiftSymbols } from './src/data-object.js';
// eslint-disable-next-line import/extensions
// import capsLock from './src/action-functions.js';

const body = document.querySelector('body');
const boardWrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const boardContainer = document.createElement('div');
const config = {
  capsLock: false,
  language: 'en',
};

let key;
let keyCode;
let keyType;
let boardVal;
let boardValRu;
let boardValShift;

function createKey(value, code, type, valueRu, valueShift) {
  key = document.createElement('div');
  key.setAttribute('id', `${code}`);
  key.setAttribute('data-type', `${type}`);
  if (valueRu) key.setAttribute('data-ru', `${valueRu}`);
  if (valueShift) key.setAttribute('data-shift', `${valueShift}`);
  key.innerHTML = value;
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
  boardWrapper.appendChild(boardContainer);
  boardContainer.classList.add('board-container');
  textarea.setAttribute('placeholder', 'Change language with combination "shift + ctrl"');
  textarea.setAttribute('readonly', '');

  for (let i = 0; i < keys.length; i += 1) {
    keyCode = keys[i].code;
    keyType = keys[i].type;
    boardVal = keys[i].boardValue;
    boardValRu = !!keys[i].boardValueRu;
    boardValShift = !!keys[i].boardValueShift;
    boardContainer.appendChild(createKey(boardVal, keyCode, keyType, boardValRu, boardValShift));
  }
}

function toggleCase(arr, letterCase) {
  arr.forEach((val) => {
    if (val.getAttribute('id').startsWith('Key')) {
      if (letterCase === 'up') val.classList.add('uppercase');
      if (letterCase === 'down') val.classList.remove('uppercase');
    }
  });
}

function capsLock(pressedKey, keysSymbol) {
  if (!config.capsLock) {
    pressedKey.classList.add('pressed');
    toggleCase(keysSymbol, 'up');
    // keysSymbol.forEach((val) => {
    //   if (val.getAttribute('id').startsWith('Key')) val.classList.add('uppercase');
    // });
    config.capsLock = true;
  } else {
    pressedKey.classList.remove('pressed');
    toggleCase(keysSymbol, 'down');
    // keysSymbol.forEach((val) => {
    //   if (val.getAttribute('id').startsWith('Key')) val.classList.remove('uppercase');
    // });
    config.capsLock = false;
  }
}

function shift(keysSymbol) {
  const symbolsShift = document.querySelectorAll('[data-shift=true]');
  for (let i = 0; i < symbolsShift.length; i += 1) {
    symbolsShift[i].innerHTML = arrShiftSymbols[i];
  }
  if (!config.capsLock) {
    toggleCase(keysSymbol, 'up');
    // keysSymbol.forEach((val) => {
    //   if (val.getAttribute('id').startsWith('Key')) val.classList.add('uppercase');
    // });
  } else {
    toggleCase(keysSymbol, 'down');
    // keysSymbol.forEach((val) => {
    //   if (val.getAttribute('id').startsWith('Key')) val.classList.remove('uppercase');
    // });
  }
}

// =====================================================================       KEY DOWN event
function keyDownEvent(event) {
  event.preventDefault();

  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyId = pressedKey.getAttribute('id');
  const pressedKeyVal = pressedKey.innerText;
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');

  if (pressedKeyId === 'CapsLock') {
    pressedKey.classList.add('on-press');
  } else {
    pressedKey.classList.add('active', 'on-press');
  }
  if (pressedKey.dataset.type === 'symbol') {
    if (pressedKeyId === 'Tab') {
      textarea.textContent += '    ';
    } else {
      textarea.textContent += pressedKeyVal;
    }
  } else if (pressedKey.dataset.type === 'action') {
    if (pressedKeyId === 'Backspace') {
      const inputText = textarea.textContent;
      textarea.textContent = inputText.slice(0, -1);
    }
    if (pressedKeyId === 'CapsLock') capsLock(pressedKey, keysSymbol);
    if (pressedKeyId.startsWith('Shift')) shift(keysSymbol);
  }
}

// =====================================================================       KEY UP event
function keyUpEvent(event) {
  event.preventDefault();
  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyId = pressedKey.getAttribute('id');
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');
  pressedKey.classList.remove('active', 'on-press');

  if (pressedKeyId.startsWith('Shift')) {
    const symbolsShift = document.querySelectorAll('[data-shift=true]');
    for (let i = 0; i < symbolsShift.length; i += 1) {
      symbolsShift[i].innerHTML = arrNoShiftSymbols[i];
    }
    if (!config.capsLock) {
      keysSymbol.forEach((val) => {
        if (val.getAttribute('id').startsWith('Key')) val.classList.remove('uppercase');
      });
    } else {
      keysSymbol.forEach((val) => {
        if (val.getAttribute('id').startsWith('Key')) val.classList.add('uppercase');
      });
    }
  }
}

createBoard();


document.addEventListener('keydown', (event) => keyDownEvent(event));
document.addEventListener('keyup', (event) => keyUpEvent(event));

// =====================================================================       ON CLICK event
boardContainer.addEventListener('mousedown', (event) => {
  const pressedKey = event.target;
  const pressedKeyVal = pressedKey.innerText;
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');

  if (event.target.innerText === 'caps lock') {
    event.target.classList.add('on-press');
  } else {
    event.target.classList.add('active', 'on-press');
  }
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
    if (pressedKey.getAttribute('id') === 'CapsLock') capsLock(pressedKey, keysSymbol);
    // else if (pressedKey.getAttribute('id').startsWith('Shift')) {
    //   const symbolsShift = document.querySelectorAll('[data-shift=true]');
    //   for (let i = 0; i < symbolsShift.length; i += 1) {
    //     symbolsShift[i].innerHTML = arrShiftSymbols[i];
    //   }
    //   if (!config.capsLock) {
    //     keysSymbol.forEach((val) => {
    //       if (val.getAttribute('id').startsWith('Key')) val.classList.add('uppercase');
    //     });
    //   } else {
    //     keysSymbol.forEach((val) => {
    //       if (val.getAttribute('id').startsWith('Key')) val.classList.remove('uppercase');
    //     });
    //   }
    // }
  }
});

boardContainer.addEventListener('mouseup', (event) => event.target.classList.remove('active', 'on-press'));
