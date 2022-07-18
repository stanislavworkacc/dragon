class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
        console.log('BOOT', this)
    }

    preload() {
        this.load.image('bg', 'assets/sprites/background.png')
    }

    create() {
        this.scene.start('Preload');
    }
}