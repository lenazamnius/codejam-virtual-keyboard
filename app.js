const keyValues = [
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
// const keyValues = ['&#96', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45', '&#61', 'backspace',
//   'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91', '&#93', '&#92', 'del',
//   'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#59', '&#39', 'enter',
//   'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#44', '&#46', '&#47', '&#8593', 'shift',
//   'ctrl', 'win', 'alt', ' ', 'alt', '&#8592', '&#8595', '&#8594', 'ctrl'];
let key;

function createKey(value) {
  key = document.createElement('div');
  key.innerHTML = value;
  key.classList.add('key-item');
  if (value === ' ') {
    key.classList.add('space');
    key.classList.add('key-item');
  } else if (value === 'backspace' || value === 'caps lock' || value === 'shift' || value === 'enter') {
    key.classList.add('double');
    key.classList.add('special');
    key.classList.add('key-item');
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
  for (let i = 0; i < keyValues.length; i += 1) {
    // boardContainer.appendChild(createKey(keyValues[i]));
    boardContainer.appendChild(createKey(Object.values(keyValues[i])[0]));
  }
}

createBoard();

function keyDownEvent(event) {
  if (event.code) {

  }
}

document.addEventListener('keydown', (event) => keyDownEvent(event));
// document.addEventListener('keyup', (evt) => keyUpEvent(evt));
