class Player extends Enemy {
    constructor(scene) {
        super(scene, 150, config.height / 2, 'dragon', 'dragon1');
        this.init();
    }

    init() {
        super.init();
        // this.scene.add.existing(this);
        // this.scene.physics.add.existing(this);
        // this.body.enable = true;

        let fire = Fire.generate(this.scene, this)
    }

    move() {
        this.body.setVelocity(0);

        if(this.scene.cursors.left.isDown) {
            this.body.setVelocityX(-500);
        } else if(this.scene.cursors.right.isDown) {
            this.body.setVelocityX(500);
        }


        if(this.scene.cursors.up.isDown) {
            console.log('DOWNNN')
            this.body.setVelocityY(-500);
        } else if(this.scene.cursors.down.isDown) {
            this.body.setVelocityY(500);
        }
    }
}