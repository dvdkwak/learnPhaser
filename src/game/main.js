import { David } from './scenes/david';
import { AUTO, Game } from 'phaser';

const config = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#028af8',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [
    David
  ]
};

const StartGame = (parent) => {
  return new Game({ ...config, parent });
}

export default StartGame;