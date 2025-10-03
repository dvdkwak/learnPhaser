import Sprite from './sprite';
import util from './../util/normalize';

class Player extends Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.speed = 200;
  }

  /**
   * Method to be called in the create loop of a scene.
   */
  create() {
    this.body.setMaxVelocity(this.speed);
    this.body.height = 20;
    this.body.width = 15;
    this.body.setOffset(25, 40);
  }

  /**
   * Player update method, to be called in the update loop of a scene.
   */
  update(keys) {
    this.handleMovement(keys);
    this.depth = this.body.y;
  }

  /**
   * Method handling Player Movement.
   */
  handleMovement(keys) {
    let dx = 0;
    let dy = 0;

    if(keys.left.isDown) {
      dx = -1;
    } else if (keys.right.isDown) {
      dx = 1;
    }

    if(keys.up.isDown) {
      dy = -1;
    } else if (keys.down.isDown) {
      dy = 1;
    }

    const normalization = util.getNormalization(dx, dy);

    this.body.setVelocityX(this.speed * dx * normalization);
    this.body.setVelocityY(this.speed * dy * normalization);
  }

}

export default Player;