var Tween = /** @class */ (function () {
    function Tween(object, property, target, time, easing, change, complete) {
    }
    Tween.update = function () { };
    Tween.backout = function (amount) {
        return function (t) { return 0; };
    };
    Tween.lerp = function (a1, a2, t) {
        return 0;
    };
    return Tween;
}());
export default Tween;
//# sourceMappingURL=Tween.js.map