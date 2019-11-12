import * as PIXI from 'pixi.js';
import UI from './UI';
var SlotGame = /** @class */ (function () {
    function SlotGame() {
        var _this = this;
        this.onReady = function () { };
        if (!document.body) {
            throw new Error('window is not ready');
        }
        this.app = new PIXI.Application({
            width: SlotGame.width,
            height: SlotGame.height,
            backgroundColor: 0x1099bb
        });
        document.body.appendChild(this.app.view);
        for (var i = 0; i < SlotGame.resources.length; i++) {
            var resources = SlotGame.resources[i];
            this.app.loader.add(resources);
        }
        this.app.loader.load(function () {
            _this.ui = new UI();
            _this.onReady();
        });
    }
    SlotGame.prototype.start = function () {
        var _this = this;
        if (!this.ui) {
            this.onReady = function () { return _this.start(); };
            return;
        }
        this.app.stage.addChild(this.ui);
        this.app.ticker.add(function () {
            _this.ui.update();
        });
    };
    SlotGame.width = 800;
    SlotGame.height = 640;
    SlotGame.resources = [
        './assets/chiple.png',
        './assets/kerberos.png',
        './assets/load.png',
        './assets/snaker.png',
    ];
    return SlotGame;
}());
export default SlotGame;
//# sourceMappingURL=SlotGame.js.map