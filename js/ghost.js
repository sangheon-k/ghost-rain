function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Ghost {
  constructor() {
    this.count = 0;
  }

  create() {
    this.enemyTop = 0;
    this.ghostElement = document.createElement('div');

    this.ghostElement.style.position = 'absolute';
    this.ghostElement.style.top = this.enemyTop + 'px';
    this.ghostElement.style.left =
      randomRange(0, BG_WIDTH - GHOST_WIDTH) + 'px';

    this.ghostElement.style.width = GHOST_WIDTH + 'px';
    this.ghostElement.style.height = GHOST_HEIGHT + 'px';
    this.ghostElement.style.background = 'url(./images/ghost.png) no-repeat';

    bgElement.appendChild(this.ghostElement);

    window.requestAnimationFrame(() => {
      this.move(this.enemyTop, this.ghostElement);
    });
  }

  move() {
    this.enemyTop++;
    if (this.enemyTop > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      const ghostLeft = Number(this.ghostElement.style.left.split('px')[0]);
      const heroLeft = Number(player.heroElement.style.left.split('px')[0]);
      if (
        heroLeft < ghostLeft + GHOST_WIDTH &&
        heroLeft + HERO_WIDTH > ghostLeft
      ) {
        this.die();
        return;
      }
      if (this.enemyTop > BG_HEIGHT - GHOST_HEIGHT) {
        this.remove();
        return;
      }
    }

    this.ghostElement.style.top = this.enemyTop + 'px';

    window.requestAnimationFrame(() => {
      this.move();
    });
  }

  remove() {
    this.ghostElement.remove();
  }

  addScore() {
    const scoreNum = document.getElementById('scoreNum');
    const numCount = Number(scoreNum.innerText) + 1;
    scoreNum.innerHTML = numCount;
  }

  die() {
    this.ghostElement.style.backgroundPosition = '-45px';

    const soundEffect = new Audio('./audio/dying.wav');
    soundEffect.play();

    this.addScore();

    setTimeout(() => {
      this.remove();
    }, 3000);
  }
}
