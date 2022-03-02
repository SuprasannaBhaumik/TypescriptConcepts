// a class is defined as something which is created using
// new keyword, that takes specific no of arguments
// and returns instance of the class
export type Class = new ( ...args: any) => any;

//defining the mixin for LandVehicle
export function LandVehicleMixin<Base extends Class>(base: Base) {
    return class extends base {
        _wheels: number;

        driveOnLand() {
            console.log(`drive on land using ${this._wheels} wheels`);
        }
    }
}

//defining the mixin for watercraft
export function WaterCraftMixin<Base extends Class>(base: Base) {
    return class extends base {
        make: string;

        driveOnWater() {
            console.log(`this watercraft uses ${this.make} motor in water`);
        }
    }
}

//to use it
//via class:
class Vehicle extends LandVehicleMixin(WaterCraftMixin(class{})) {
    gears: number;

    changeGears() {
        console.log(`changing ${this.gears} gears`);
    }
    constructor() {
        super();
    }
}

const vehicle: Vehicle = new Vehicle();
vehicle.gears = 4;
vehicle.changeGears();
vehicle.make = 'Yamaha';
vehicle.driveOnWater();
vehicle._wheels = 8;
vehicle.driveOnLand();

