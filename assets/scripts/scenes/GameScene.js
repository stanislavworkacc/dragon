class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    
    create() {
        this.creareBackground();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = new Player(this);
        this.enemies = new Enemies(this);
    }



    update() {
        this.bg.tilePositionX += 0.5
        this.player.move();
        this.enemies.checkWorldBounds();
        // this.enemy.move();
    }

    creareBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0);
    }
}