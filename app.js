const keys = [
  { Backquote: '&#96' },
  { Digit1: '1' },
  { Digit2: '2' },
  { Digit3: '3' },
  { Digit4: '4' },
  { Digit5: '5' },
  { Digit6: '6' },
  { Digit7: '7' },
  { Digit8: '8' },
  { Digit9: '9' },
  { Digit0: '0' },
  { Minus: '&#45' },
  { Equal: '&#61' },
  { Backspace: 'backspace' },
  { Tab: 'tab' },
  { KeyQ: 'q' },
  { KeyW: 'w' },
  { KeyE: 'e' },
  { KeyR: 'r' },
  { KeyT: 't' },
  { KeyY: 'y' },
  { KeyU: 'u' },
  { KeyI: 'i' },
  { KeyO: 'o' },
  { KeyP: 'p' },
  { BracketLeft: '&#91' },
  { BracketRight: '&#93' },
  { Backslash: '&#92' },
  { Delete: 'del' },
  { CapsLock: 'caps lock' },
  { KeyA: 'a' },
  { KeyS: 's' },
  { KeyD: 'd' },
  { KeyF: 'f' },
  { KeyG: 'g' },
  { KeyH: 'h' },
  { KeyJ: 'j' },
  { KeyK: 'k' },
  { KeyL: 'l' },
  { Semicolon: '&#59' },
  { Quote: '&#39' },
  { Enter: 'enter' },
  { ShiftLeft: 'shift' },
  { KeyZ: 'z' },
  { KeyX: 'x' },
  { KeyC: 'c' },
  { KeyV: 'v' },
  { KeyB: 'b' },
  { KeyN: 'n' },
  { KeyM: 'm' },
  { Comma: '&#44' },
  { Period: '&#46' },
  { Slash: '&#47' },
  { ArrowUp: '&#8593' },
  { ShiftRight: 'shift' },
  { ControlLeft: 'ctrl' },
  { MetaLeft: 'win' },
  { AltLeft: 'alt' },
  { Space: ' ' },
  { AltRight: 'alt' },
  { ArrowLeft: '&#8592' },
  { ArrowDown: '&#8595' },
  { ArrowRight: '&#8594' },
  { ControlRight: 'ctrl' },
];
const body = document.querySelector('body');
const boardWrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const boardContainer = document.createElement('div');
let key;

textarea.setAttribute('placeholder', 'Change language with combination "shift + ctrl"');

function createKey(value, keyName) {
  key = document.createElement('div');
  key.setAttribute('id', `${keyName}`);
  key.innerHTML = value;
  key.classList.add('key-item');
  if (value === 'tab' || value === 'del' || value === 'ctrl' || value === 'win' || value === 'alt') {
    key.classList.add('special', 'key-item');
  } else if (value === 'backspace' || value === 'caps lock' || value === 'shift' || value === 'enter') {
    key.classList.add('double', 'special', 'key-item');
  } else if (value === ' ') {
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
  textarea.setAttribute('readonly', '');
  boardWrapper.appendChild(boardContainer);
  boardContainer.classList.add('board-container');
  let keyObjValues;
  let keyName;
  for (let i = 0; i < keys.length; i += 1) {
    keyObjValues = Object.values(keys[i]);
    keyName = Object.keys(keys[i]);
    boardContainer.appendChild(createKey(keyObjValues[0], keyName[0]));
  }
}

createBoard();

function keyDownEvent(event) {
  event.preventDefault();
  const pressedKey = event.code;
  const pressedKeyVal = event.key;
  textarea.textContent += pressedKeyVal;
  document.querySelector(`#${pressedKey}`).classList.add('active');
  // if (event.code ===) {

  // }
}

function keyUpEvent(event) {
  event.preventDefault();
  const pressedKey = event.code;
  document.querySelector(`#${pressedKey}`).classList.remove('active');
  // if (event.code ===) {

  // }
}


document.addEventListener('keydown', (event) => keyDownEvent(event));
document.addEventListener('keyup', (event) => keyUpEvent(event));
