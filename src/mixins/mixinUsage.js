"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WaterCraftMixin = exports.LandVehicleMixin = void 0;
//defining the mixin for LandVehicle
function LandVehicleMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.driveOnLand = function () {
            console.log("drive on land using ".concat(this._wheels, " wheels"));
        };
        return class_1;
    }(base));
}
exports.LandVehicleMixin = LandVehicleMixin;
//defining the mixin for watercraft
function WaterCraftMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.driveOnWater = function () {
            console.log("this watercraft uses ".concat(this.make, " motor in water"));
        };
        return class_2;
    }(base));
}
exports.WaterCraftMixin = WaterCraftMixin;
//to use it
//via class:
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super.call(this) || this;
    }
    Vehicle.prototype.changeGears = function () {
        console.log("changing ".concat(this.gears, " gears"));
    };
    return Vehicle;
}(LandVehicleMixin(WaterCraftMixin(/** @class */ (function () {
    function class_3() {
    }
    return class_3;
}())))));
var vehicle = new Vehicle();
vehicle.gears = 4;
vehicle.changeGears();
vehicle.make = 'Yamaha';
vehicle.driveOnWater();
vehicle._wheels = 8;
vehicle.driveOnLand();
