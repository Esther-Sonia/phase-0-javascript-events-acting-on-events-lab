const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace('px', '')) || 0;

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace('px', '')) || 0;

  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}



document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
