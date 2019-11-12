var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as PIXI from 'pixi.js';
import SlotGame from './SlotGame';
import Reel from './Reel';
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super.call(this) || this;
        var margin = (SlotGame.height - Reel.SYMBOL_SIZE * 3) / 2;
        _this.reelContainer = new PIXI.Container();
        _this.reelContainer.y = margin;
        _this.reelContainer.x = Math.round(SlotGame.width - Reel.WIDTH * 5);
        // 5本のリールを追加
        for (var i = 0; i < 5; i++) {
            _this.reelContainer.addChild(new Reel(i));
        }
        var coverTop = new PIXI.Graphics();
        coverTop.beginFill(0, 1);
        coverTop.drawRect(0, 0, SlotGame.width, margin);
        var coverBottom = new PIXI.Graphics();
        coverBottom.beginFill(0, 1);
        coverBottom.drawRect(0, Reel.SYMBOL_SIZE * 3 + margin, SlotGame.width, margin);
        var textTop = new PIXI.Text('PIXI MONSTER SLOTS!', UI.defaultTextStyle);
        textTop.x = Math.round((coverTop.width - coverTop.width) / 2);
        textTop.y = Math.round((margin - textTop.height) / 2);
        var textBottom = new PIXI.Text('Spin th wheels!', UI.defaultTextStyle);
        textBottom.x = Math.round((coverBottom.width - coverBottom.width) / 2);
        textBottom.y = Math.round((margin - textBottom.height) / 2);
        coverTop.addChild(textTop);
        coverBottom.addChild(textBottom);
        _this.addChild(_this.reelContainer);
        _this.addChild(coverTop);
        _this.addChild(coverBottom);
        coverBottom.interactive = true;
        coverBottom.buttonMode = true;
        coverBottom.addListener('pointerdown', function () { return _this.startPlay(); });
        return _this;
    }
    UI.prototype.startPlay = function () {
    };
    UI.prototype.update = function () {
    };
    UI.defaultTextStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'],
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        wordWrap: true,
        wordWrapWidth: 400
    });
    return UI;
}(PIXI.Container));
export default UI;
//# sourceMappingURL=UI.js.map