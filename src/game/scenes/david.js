import { Scene } from 'phaser';
import Player from './../objects/player';
import Stone from './../objects/stone';

export class David extends Scene
{
  constructor() {
    super('David');
  }

  preload() {
    this.load.image('poppetje', './assets/poppetje.png');
    this.load.image('steentje', './assets/stone.png');
  }

  create() {
    this.character = new Player(this, 100, 100, 'poppetje');
    this.cursors = this.input.keyboard.createCursorKeys();

    this.stone = new Stone(this, 200, 200, 'steentje');
    this.stone.body.height = 10;
    this.stone.body.setOffset(0, 20);
    console.log(this.stone.body);

    this.physics.add.collider(this.character, this.stone);

    this.character.create();
  }

  // This updates every frame
  update() {
    this.character.update(this.cursors);
  }
}