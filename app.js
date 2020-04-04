const keys = [
  {
    type: 'symbol', code: 'Backquote', boardValue: '&#96', boardValueRu: 'ё',
  },
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
  {
    type: 'symbol', code: 'KeyQ', boardValue: 'q', boardValueRu: 'й',
  },
  {
    type: 'symbol', code: 'KeyW', boardValue: 'w', boardValueRu: 'ц',
  },
  {
    type: 'symbol', code: 'KeyE', boardValue: 'e', boardValueRu: 'у',
  },
  {
    type: 'symbol', code: 'KeyR', boardValue: 'r', boardValueRu: 'к',
  },
  {
    type: 'symbol', code: 'KeyT', boardValue: 't', boardValueRu: 'е',
  },
  {
    type: 'symbol', code: 'KeyY', boardValue: 'y', boardValueRu: 'н',
  },
  {
    type: 'symbol', code: 'KeyU', boardValue: 'u', boardValueRu: 'г',
  },
  {
    type: 'symbol', code: 'KeyI', boardValue: 'i', boardValueRu: 'ш',
  },
  {
    type: 'symbol', code: 'KeyO', boardValue: 'o', boardValueRu: 'щ',
  },
  {
    type: 'symbol', code: 'KeyP', boardValue: 'p', boardValueRu: 'з',
  },
  {
    type: 'symbol', code: 'BracketLeft', boardValue: '&#91', boardValueRu: 'х',
  },
  {
    type: 'symbol', code: 'BracketRight', boardValue: '&#93', boardValueRu: 'ъ',
  },
  { type: 'symbol', code: 'Backslash', boardValue: '&#92' },
  { type: 'action', code: 'Delete', boardValue: 'del' },
  { type: 'action', code: 'CapsLock', boardValue: 'caps lock' },
  {
    type: 'symbol', code: 'KeyA', boardValue: 'a', boardValueRu: 'ф',
  },
  {
    type: 'symbol', code: 'KeyS', boardValue: 's', boardValueRu: 'ы',
  },
  {
    type: 'symbol', code: 'KeyD', boardValue: 'd', boardValueRu: 'в',
  },
  {
    type: 'symbol', code: 'KeyF', boardValue: 'f', boardValueRu: 'а',
  },
  {
    type: 'symbol', code: 'KeyG', boardValue: 'g', boardValueRu: 'п',
  },
  {
    type: 'symbol', code: 'KeyH', boardValue: 'h', boardValueRu: 'р',
  },
  {
    type: 'symbol', code: 'KeyJ', boardValue: 'j', boardValueRu: 'о',
  },
  {
    type: 'symbol', code: 'KeyK', boardValue: 'k', boardValueRu: 'л',
  },
  {
    type: 'symbol', code: 'KeyL', boardValue: 'l', boardValueRu: 'д',
  },
  {
    type: 'symbol', code: 'Semicolon', boardValue: '&#59', boardValueRu: 'ж',
  },
  {
    type: 'symbol', code: 'Quote', boardValue: '&#39', boardValueRu: 'э',
  },
  { type: 'action', code: 'Enter', boardValue: 'enter' },
  { type: 'action', code: 'ShiftLeft', boardValue: 'shift' },
  {
    type: 'symbol', code: 'KeyZ', boardValue: 'z', boardValueRu: 'я',
  },
  {
    type: 'symbol', code: 'KeyX', boardValue: 'x', boardValueRu: 'ч',
  },
  {
    type: 'symbol', code: 'KeyC', boardValue: 'c', boardValueRu: 'с',
  },
  {
    type: 'symbol', code: 'KeyV', boardValue: 'v', boardValueRu: 'м',
  },
  {
    type: 'symbol', code: 'KeyB', boardValue: 'b', boardValueRu: 'и',
  },
  {
    type: 'symbol', code: 'KeyN', boardValue: 'n', boardValueRu: 'т',
  },
  {
    type: 'symbol', code: 'KeyM', boardValue: 'm', boardValueRu: 'ь',
  },
  {
    type: 'symbol', code: 'Comma', boardValue: '&#44', boardValueRu: 'б',
  },
  {
    type: 'symbol', code: 'Period', boardValue: '&#46', boardValueRu: 'ю',
  },
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
    boardValueRu = !!keys[i].boardValueRu;
    boardValue = keys[i].boardValue;
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
