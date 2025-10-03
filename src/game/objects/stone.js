import Sprite from './sprite';

class Stone extends Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.body.setImmovable(true);
    this.depth = this.body.y;
  }

}

export default Stone;