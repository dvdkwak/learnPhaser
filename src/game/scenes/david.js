import { Scene } from 'phaser';
import Player from './../objects/player';

export class David extends Scene
{
  constructor() {
    super('David');
  }

  preload() {
    console.log('This is the David scene');
    this.load.image('poppetje', './assets/poppetje.png');
  }

  create() {
    this.character = new Player(this, 100, 100, 'poppetje');
    this.cursors = this.input.keyboard.createCursorKeys();
    console.log(this.character.texture);
    console.log(this.character.body);
    this.character.body.velocity.setLength(100);
  }

  // This updates every frame
  update() {
    this.character.body.setVelocity(0);
    if(this.cursors.right.isDown) {
      this.character.body.setVelocityX(100);
    }
    if(this.cursors.left.isDown) {
      this.character.body.setVelocityX(-100);
    }
    if(this.cursors.up.isDown) {
      this.character.body.setVelocityY(-100);
    }
    if(this.cursors.down.isDown) {
      this.character.body.setVelocityY(100);
    }
  }
}