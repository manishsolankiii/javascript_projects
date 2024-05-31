const emoji = document.querySelector('#emoji');
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊', '😗',
  '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳', '🙃', '🥴',
  '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐', '👀', '🤔', '🤪',
  '🥲', '😃', '😁', '😬'
];

emoji.addEventListener('mouseenter', changeEmoji);
emoji.addEventListener('mouseleave', grayScaleEmoji);

function changeEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const newEmoji = emojis[randomIndex];
  emoji.textContent = newEmoji;
  emoji.style.filter = 'grayscale(0)';
}

function grayScaleEmoji() {
  emoji.style.filter = 'grayscale(1)';
}
