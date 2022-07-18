class StartScene extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    create() {
        this.creareBackground();
        this.createText();
        this.setEvents();
    }

    createText() {
        this.add.text(config.width / 2, 500, 'Tap to play', {
            font: '40px CurseCasual',
            fill: '#fff'
        }).setOrigin(0.5)
    }

    creareBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
    }

    setEvents() {
        this.input.on('pointerdown', () => {
            console.log('pointerown')
            this.scene.start('Game');
        })
    }
}