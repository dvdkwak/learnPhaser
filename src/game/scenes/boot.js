import { Scene } from 'phaser';

export class Boot extends Scene
{
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', './assets/bg.png');
    this.load.image('pokeball', './assets/pokeball.jpg');
  }

  create() {
    this.add.image(512, 384, 'background');
    this.add.image(512, 385, 'pokeball');
  }
}