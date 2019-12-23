import 'Phaser';
import ObjectWipcamp from './ObjectWipCamp';

export default class Monster extends ObjectWipcamp {
    constructor(scene, x, y, key, type) {
      super(scene, x, y, key);
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);

      this.setData("speed", 100);
    }
      walk() {
        this.body.x =  -this.getData("speed");
      }

      

    }
