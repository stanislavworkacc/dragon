class Fire {
    constructor() {

        this.init();
    }
    
    static generateAttributes() {
        const x = config.width + 150;
        const y = Phaser.Math.Between(100, config.height - 100);

        const texture = 'enemy';
        const id = Phaser.Math.Between(1, 4);
        const frame = `enemy${id}`;

        return {x, y, frame}
    }

    static genarate(scene) {
        const {x, y, frame} = Enemy.generateAttributes();
        // const x = config.width + 150;
        // const y = Phaser.Math.Between(100, config.height - 100);

        const texture = 'enemy';
        // const id = Phaser.Math.Between(1, 4);
        // const frame = `enemy${id}`;

        return new Enemy(scene, x, y, texture, frame);
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.velocity = -300;

        this.scene.events.on('update', this.update, this);
    }

    update() {
        if(this.active && this.x < -this.width) {
            this.setAlive(false);
        }
    }

    setAlive(status) {
        this.body.enable = status;
        this.setVisible(status);
        this.setActive(status);
    }

    move() {
        this.body.setVelocityX(this.velocity);
    }

    reset() {
        const {x, y, frame} = Enemy.generateAttributes();

        this.x = x;
        this.y = y;

        this.setFrame(frame);
        this.setAlive(true);
    }
}