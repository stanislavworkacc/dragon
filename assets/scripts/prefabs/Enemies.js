class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene;
        this.countCreated = 0;
        this.countMax = 10;
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: this.tick,
            callbackScope: this,
        })
    }

    tick() {
        if(this.countCreated < this.count) {
            this.createEnemy();
        } else {
            this.timer.remove();
        }
    }

    checkWorldBounds() {

    }

    createEnemy() {
        let enemy =  this.getFirstDead();

        if(!enemy) {
            enemy = Enemy.genarate(this.scene);
            this.add(enemy);
        } else {
            enemy.reset()
        }

        enemy.move();
    }

    timerCb() {
        new TimerEvent(100, delay, tick, repeatCount, true, callback, callbackContext, arguments)
    }
}