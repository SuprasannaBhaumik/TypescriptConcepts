"use strict";
exports.__esModule = true;
exports.StaticMemberDemo = void 0;
var StaticMemberDemo = /** @class */ (function () {
    function StaticMemberDemo() {
        this.staticUsage = function () {
            console.log(StaticMemberDemo.TEMPERATURE);
        };
    }
    StaticMemberDemo.TEMPERATURE = 25;
    return StaticMemberDemo;
}());
exports.StaticMemberDemo = StaticMemberDemo;
var myClass = new StaticMemberDemo();
myClass.staticUsage();
