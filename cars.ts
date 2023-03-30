import * as readline from "readline";

class Car {
  make: string;
  model: string;
  year: number;
  currentSpeed: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0;
  }

  accelerate(speed: number) {
    this.currentSpeed += speed;
    console.log(`Accelerating to ${this.currentSpeed} mph...`);
  }

  decelerate(speed: number) {
    if (this.currentSpeed >= speed) {
      this.currentSpeed -= speed;
      console.log(`Decelerating to ${this.currentSpeed} mph...`);
    } else {
      console.log("Can't decelerate below 0 mph!");
    }
  }

  stop() {
    this.currentSpeed = 0;
    console.log("Stopping the car...");
  }
}

const myCar = new Car("Honda", "Civic", 2022);

console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}.`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Enter a command (accelerate, decelerate, stop): ");
rl.prompt();

rl.on("line", (line) => {
  const command = line.trim();

  if (command === "accelerate") {
    rl.question("Enter speed to accelerate: ", (speed) => {
      myCar.accelerate(Number(speed));
      rl.prompt();
    });
  } else if (command === "decelerate") {
    rl.question("Enter speed to decelerate: ", (speed) => {
      myCar.decelerate(Number(speed));
      rl.prompt();
    });
  } else if (command === "stop") {
    myCar.stop();
    rl.close();
  } else {
    console.log("Invalid command.");
    rl.prompt();
  }
});
