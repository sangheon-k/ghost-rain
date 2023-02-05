class Hero {
  constructor() {
    this.heroElement = document.getElementById('hero');
    this.left = Number(getComputedStyle(this.heroElement).left.split('px')[0]);

    this.speed = 20;
  }

  move(direction) {
    if (direction === 'right') {
      this.heroElement.className = 'right';
      this.setLeft(this.speed);
    } else if (direction === 'left') {
      this.heroElement.className = 'left';
      this.setLeft(-this.speed);
    }
  }

  setLeft(speed) {
    const newLeft = this.left + speed;

    if (newLeft > BG_WIDTH - HERO_WIDTH || newLeft < 0) return;
    this.heroElement.style.left = newLeft + 'px';

    this.left = newLeft;
  }

  stop() {
    this.heroElement.className = 'stop';
  }
}
