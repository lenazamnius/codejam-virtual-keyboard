const keys = [
  { type: 'symbol', code: 'Backquote', boardValue: '&#96' },
  { type: 'symbol', code: 'Digit2', boardValue: '2' },
  { type: 'symbol', code: 'Digit1', boardValue: '1' },
  { type: 'symbol', code: 'Digit3', boardValue: '3' },
  { type: 'symbol', code: 'Digit4', boardValue: '4' },
  { type: 'symbol', code: 'Digit5', boardValue: '5' },
  { type: 'symbol', code: 'Digit6', boardValue: '6' },
  { type: 'symbol', code: 'Digit7', boardValue: '7' },
  { type: 'symbol', code: 'Digit8', boardValue: '8' },
  { type: 'symbol', code: 'Digit9', boardValue: '9' },
  { type: 'symbol', code: 'Digit0', boardValue: '0' },
  { type: 'symbol', code: 'Minus', boardValue: '&#45' },
  { type: 'symbol', code: 'Equal', boardValue: '&#61' },
  { type: 'action', code: 'Backspace', boardValue: 'backspace' },
  { type: 'symbol', code: 'Tab', boardValue: 'tab' },
  { type: 'symbol', code: 'KeyQ', boardValue: 'q' },
  { type: 'symbol', code: 'KeyW', boardValue: 'w' },
  { type: 'symbol', code: 'KeyE', boardValue: 'e' },
  { type: 'symbol', code: 'KeyR', boardValue: 'r' },
  { type: 'symbol', code: 'KeyT', boardValue: 't' },
  { type: 'symbol', code: 'KeyY', boardValue: 'y' },
  { type: 'symbol', code: 'KeyU', boardValue: 'u' },
  { type: 'symbol', code: 'KeyI', boardValue: 'i' },
  { type: 'symbol', code: 'KeyO', boardValue: 'o' },
  { type: 'symbol', code: 'KeyP', boardValue: 'p' },
  { type: 'symbol', code: 'BracketLeft', boardValue: '&#91' },
  { type: 'symbol', code: 'BracketRight', boardValue: '&#93' },
  { type: 'symbol', code: 'Backslash', boardValue: '&#92' },
  { type: 'action', code: 'Delete', boardValue: 'del' },
  { type: 'action', code: 'CapsLock', boardValue: 'caps lock' },
  { type: 'symbol', code: 'KeyA', boardValue: 'a' },
  { type: 'symbol', code: 'KeyS', boardValue: 's' },
  { type: 'symbol', code: 'KeyD', boardValue: 'd' },
  { type: 'symbol', code: 'KeyF', boardValue: 'f' },
  { type: 'symbol', code: 'KeyG', boardValue: 'g' },
  { type: 'symbol', code: 'KeyH', boardValue: 'h' },
  { type: 'symbol', code: 'KeyJ', boardValue: 'j' },
  { type: 'symbol', code: 'KeyK', boardValue: 'k' },
  { type: 'symbol', code: 'KeyL', boardValue: 'l' },
  { type: 'symbol', code: 'Semicolon', boardValue: '&#59' },
  { type: 'symbol', code: 'Quote', boardValue: '&#39' },
  { type: 'action', code: 'Enter', boardValue: 'enter' },
  { type: 'action', code: 'ShiftLeft', boardValue: 'shift' },
  { type: 'symbol', code: 'KeyZ', boardValue: 'z' },
  { type: 'symbol', code: 'KeyX', boardValue: 'x' },
  { type: 'symbol', code: 'KeyC', boardValue: 'c' },
  { type: 'symbol', code: 'KeyV', boardValue: 'v' },
  { type: 'symbol', code: 'KeyB', boardValue: 'b' },
  { type: 'symbol', code: 'KeyN', boardValue: 'n' },
  { type: 'symbol', code: 'KeyM', boardValue: 'm' },
  { type: 'symbol', code: 'Comma', boardValue: '&#44' },
  { type: 'symbol', code: 'Period', boardValue: '&#46' },
  { type: 'symbol', code: 'Slash', boardValue: '&#47' },
  { type: 'symbol', code: 'ArrowUp', boardValue: '&#8593' },
  { type: 'action', code: 'ShiftRight', boardValue: 'shift' },
  { type: 'action', code: 'ControlLeft', boardValue: 'ctrl' },
  { type: 'action', code: 'MetaLeft', boardValue: 'win' },
  { type: 'action', code: 'AltLeft', boardValue: 'alt' },
  { type: 'symbol', code: 'Space', boardValue: '&nbsp;' },
  { type: 'symbol', code: 'AltRight', boardValue: 'alt' },
  { type: 'symbol', code: 'ArrowLeft', boardValue: '&#8592' },
  { type: 'symbol', code: 'ArrowDown', boardValue: '&#8595' },
  { type: 'symbol', code: 'ArrowRight', boardValue: '&#8594' },
  { type: 'action', code: 'ControlRight', boardValue: 'ctrl' },
];

const body = document.querySelector('body');
const boardWrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const boardContainer = document.createElement('div');
let key;
let boardValue;
let keyCode;
let keyType;

function createKey(value, code, type) {
  key = document.createElement('div');
  key.setAttribute('id', `${code}`);
  key.setAttribute('data-type', `${type}`);
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
    keyCode = keys[i].code;
    keyType = keys[i].type;
    boardContainer.appendChild(createKey(boardValue, keyCode, keyType));
  }
}

function keyDownEvent(event) {
  event.preventDefault();
  const pressedKey = document.querySelector(`#${event.code}`);
  const pressedKeyVal = event.key;
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
