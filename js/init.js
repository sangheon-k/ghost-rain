let player = new Hero();

function init() {
  document.addEventListener('keydown', function (e) {
    checkKey(e, true);
  });

  document.addEventListener('keyup', function (e) {
    checkKey(e, false);
  });

  setInterval(() => {
    let ghost = new Ghost();
    ghost.create();
  }, 2000);

  timer();
}

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyCode = e.KeyCode || e.which;

    switch (keyCode) {
      case 39:
        player.move('right');
        e.preventDefault();
        break;
      case 37:
        player.move('left');
        e.preventDefault();
    }
  } else {
    player.stop();
  }
}

function timer() {
  const time = document.getElementById('time');
  let count = 0;
  setInterval(() => {
    time.innerHTML = count < 10 ? '0' + count : count;
    count++;
  }, 1000);
}

init();
