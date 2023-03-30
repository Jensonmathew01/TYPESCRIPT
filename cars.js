"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.currentSpeed += speed;
        console.log("Accelerating to ".concat(this.currentSpeed, " mph..."));
    };
    Car.prototype.decelerate = function (speed) {
        if (this.currentSpeed >= speed) {
            this.currentSpeed -= speed;
            console.log("Decelerating to ".concat(this.currentSpeed, " mph..."));
        }
        else {
            console.log("Can't decelerate below 0 mph!");
        }
    };
    Car.prototype.stop = function () {
        this.currentSpeed = 0;
        console.log("Stopping the car...");
    };
    return Car;
}());
var myCar = new Car("Honda", "Civic", 2022);
console.log("My car is a ".concat(myCar.year, " ").concat(myCar.make, " ").concat(myCar.model, "."));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.setPrompt("Enter a command (accelerate, decelerate, stop): ");
rl.prompt();
rl.on("line", function (line) {
    var command = line.trim();
    if (command === "accelerate") {
        rl.question("Enter speed to accelerate: ", function (speed) {
            myCar.accelerate(Number(speed));
            rl.prompt();
        });
    }
    else if (command === "decelerate") {
        rl.question("Enter speed to decelerate: ", function (speed) {
            myCar.decelerate(Number(speed));
            rl.prompt();
        });
    }
    else if (command === "stop") {
        myCar.stop();
        rl.close();
    }
    else {
        console.log("Invalid command.");
        rl.prompt();
    }
});
