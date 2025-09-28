import { GameObjects } from 'phaser';

class Sprite extends GameObjects.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

}

export default Sprite;