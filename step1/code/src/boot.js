var MayanDefenseGame = {};

MayanDefenseGame.Boot = function(game) {

};

MayanDefenseGame.Boot.prototype = {

    init: function() {
        // We don't need multi-touch support, so we specify 1 here
        this.input.maxPointers = 1;

        if (this.game.device.desktop) {
            // This section for desktop specific settings
            this.scale.pageAlignHorizontally = true;
        }
        else {
            // This section for mobile settings
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

    preload: function() {
        // In this method we load all the required assets for the preloader
        this.load.image('preloaderBackground', 'res/images/preloader_background.png');
        this.load.image('preloaderBar', 'res/images/preloader_bar.png');
    },

    create: function() {
        this.state.start('Preloader');
    }

}