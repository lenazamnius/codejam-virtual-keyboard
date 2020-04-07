/* eslint-disable import/extensions */
import {
  keys, arrShiftSymbols, arrNoShiftSymbols, arrSymbolsRu, arrSymbolsEn,
} from './src/data-object.js';

const body = document.querySelector('body');
const boardWrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const boardContainer = document.createElement('div');
const config = {
  language: localStorage.getItem('lang') || 'en',
  capsLock: false,
};

function createKey(value, code, type, valueRu, valueShift) {
  const key = document.createElement('div');
  key.setAttribute('id', `${code}`);
  key.setAttribute('data-type', `${type}`);
  if (valueRu) key.setAttribute('data-ru', `${valueRu}`);
  if (valueShift) key.setAttribute('data-shift', `${valueShift}`);
  if (config.language === 'en') {
    key.innerHTML = value;
  } else if (config.language === 'ru') {
    if (key.dataset.ru) {
      key.innerHTML = valueRu;
    } else {
      key.innerHTML = value;
    }
  }
  switch (value) {
    case 'tab' || 'del' || 'ctrl' || 'win' || 'alt':
      key.classList.add('special', 'key-item');
      break;
    case 'backspace':
    case 'caps lock':
    case 'shift':
    case 'enter':
      key.classList.add('double', 'special', 'key-item');
      break;
    case '&nbsp;':
      key.classList.add('space', 'key-item');
      break;
    default:
      key.classList.add('key-item');
  }
  return key;
}

function createBoard() {
  let keyCode;
  let keyType;
  let boardVal;
  let boardValRu;
  let boardValShift;

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
    boardValRu = keys[i].boardValueRu || !!keys[i].boardValueRu;
    boardValShift = !!keys[i].boardValueShift;
    boardContainer.appendChild(createKey(boardVal, keyCode, keyType, boardValRu, boardValShift));
  }
}

function setAnimation(pressedKey, pressedKeyId) {
  if (pressedKeyId === 'CapsLock') {
    pressedKey.classList.add('on-press');
  } else {
    pressedKey.classList.add('active', 'on-press');
  }
}

function toggleCase(arr, letterCase) {
  arr.forEach((val) => {
    if (config.language === 'en') {
      const keyId = val.getAttribute('id');
      if (keyId.startsWith('Key') || keyId.startsWith('Backquote')) {
        if (letterCase === 'up') val.classList.add('uppercase');
        if (letterCase === 'down') val.classList.remove('uppercase');
      }
    } else if (config.language === 'ru') {
      if (val.dataset.ru) {
        if (letterCase === 'up') val.classList.add('uppercase');
        if (letterCase === 'down') val.classList.remove('uppercase');
      }
    }
  });
}

function capsLock(keysSymbol, pressedKey) {
  if (!config.capsLock) {
    pressedKey.classList.add('pressed');
    toggleCase(keysSymbol, 'up');
    config.capsLock = true;
  } else {
    pressedKey.classList.remove('pressed');
    toggleCase(keysSymbol, 'down');
    config.capsLock = false;
  }
}

function shift(keysSymbol, arrSymbols, capsY, capsN) {
  let symbolsShift = [...document.querySelectorAll('[data-shift=true]')];
  let arrSymb = arrSymbols;
  if (config.language === 'ru') {
    symbolsShift = symbolsShift.slice(1).filter((val) => !val.dataset.ru);
    arrSymb = arrSymbols.slice(1);
  }
  for (let i = 0; i < symbolsShift.length; i += 1) {
    symbolsShift[i].innerHTML = arrSymb[i];
  }
  if (!config.capsLock) {
    toggleCase(keysSymbol, capsY);
  } else {
    toggleCase(keysSymbol, capsN);
  }
}

function toggleLang() {
  const keysLangSymbol = document.querySelectorAll('[data-ru]');
  const curLang = config.language === 'en' ? 'ru' : 'en';
  for (let i = 0; i < keysLangSymbol.length; i += 1) {
    if (curLang === 'ru') {
      keysLangSymbol[i].innerHTML = arrSymbolsRu[i];
    } else {
      keysLangSymbol[i].innerHTML = arrSymbolsEn[i];
    }
  }
  config.language = curLang;
  localStorage.setItem('lang', curLang);
}

function keyDownEvent(event) {
  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyId = pressedKey.getAttribute('id');
  const pressedKeyVal = pressedKey.innerText;
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');

  event.preventDefault();
  setAnimation(pressedKey, pressedKeyId);
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
    if (pressedKeyId === 'Enter') textarea.textContent += '\n';
    if (pressedKeyId === 'CapsLock') capsLock(keysSymbol, pressedKey);
    if (pressedKeyId.startsWith('Shift')) shift(keysSymbol, arrShiftSymbols, 'up', 'down');
    if (event.ctrlKey && event.altKey) toggleLang();
  }
}

function keyUpEvent(event) {
  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyId = pressedKey.getAttribute('id');
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');

  event.preventDefault();
  pressedKey.classList.remove('active', 'on-press');
  if (pressedKeyId.startsWith('Shift')) shift(keysSymbol, arrNoShiftSymbols, 'down', 'up');
}

// ==================================================================  events

createBoard();

document.addEventListener('keydown', (event) => keyDownEvent(event));
document.addEventListener('keyup', (event) => keyUpEvent(event));

boardContainer.addEventListener('mousedown', (event) => {
  const pressedKey = event.target;
  const pressedKeyVal = pressedKey.innerText;
  const pressedKeyId = pressedKey.getAttribute('id');
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');

  setAnimation(pressedKey, pressedKeyId);
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
    if (pressedKey.getAttribute('id') === 'CapsLock') capsLock(keysSymbol, pressedKey);
    if (pressedKey.getAttribute('id').startsWith('Shift')) shift(keysSymbol, arrShiftSymbols, 'up', 'down');
  }
});

boardContainer.addEventListener('mouseup', (event) => {
  const pressedKey = event.target;
  const keysSymbol = document.querySelectorAll('[data-type=symbol]');
  event.target.classList.remove('active', 'on-press');
  if (pressedKey.getAttribute('id').startsWith('Shift')) shift(keysSymbol, arrNoShiftSymbols, 'down', 'up');
});
