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
var Reel = /** @class */ (function (_super) {
    __extends(Reel, _super);
    function Reel(index) {
        return _super.call(this) || this;
    }
    Reel.prototype.update = function () {
    };
    Reel.prototype.updateSymbol = function (symbol) {
    };
    Reel.WIDTH = 160;
    Reel.SYMBOL_SIZE = 150;
    return Reel;
}(PIXI.Container));
export default Reel;
//# sourceMappingURL=Reel.js.map