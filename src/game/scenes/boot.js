import { Scene } from 'phaser';

export class Boot extends Scene
{
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', './assets/bg.png');
    this.load.image('pokeball', './assets/pokeball.jpg');
    console.log('this is the preload');
  }

  create() {
    this.add.image(512, 384, 'background');
    this.pokeball = this.add.image(512, 385, 'pokeball');
    console.log('this is the create');
  }

  // This updates every frame
  update() {

  }
}