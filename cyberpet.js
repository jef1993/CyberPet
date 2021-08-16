// let input = prompt("input your details here:");
// console.log(input);

class Animal {
  constructor(hunger = 100, thrist = 100, happniess = 100) {
    (this.hunger = hunger),
      (this.thrist = thrist),
      (this.happniess = happniess);
  }

  play() {
    this.happniess += 10;
    this.hunger -= 9;
    this.thrist -= 3;
  }

  feed() {
    this.hunger += 5;
    this.thrist -= 3;
    this.happniess -= 3;
  }

  giveDrinks() {
    this.thrist += 5;
    this.hunger -= 3;
    this.happniess -= 3;
  }
}

const animal1 = new Animal();
const currentTime = new Date();

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    animal1.happniess -= 1;
    animal1.thrist -= 1;
    animal1.hunger -= 1;
    console.log(animal1);
  }, 1000 * i);
}

// animal1.play();
// console.log(animal1);
