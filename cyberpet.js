const play = document.querySelector(".play");
const feed = document.querySelector(".feed");
const drink = document.querySelector(".drink");

const happiness = document.querySelector(".happiness");
const hunger = document.querySelector(".hunger");
const thirst = document.querySelector(".thirst");

class Animal {
  constructor(hunger = 50, thirst = 50, happiness = 50) {
    (this.hunger = hunger),
      (this.thirst = thirst),
      (this.happiness = happiness);
  }

  // let self = this.hunger.bind(this);

  maxminValue(value1, value2, value3) {
    value1 >= 0
      ? this.happiness + value1 >= 100
        ? (this.happiness = 100)
        : (this.happiness += value1)
      : this.happiness + value1 <= 0
      ? (this.happiness = 0)
      : (this.happiness += value1);
    value2 >= 0
      ? this.hunger + value2 >= 100
        ? (this.hunger = 100)
        : (this.hunger += value2)
      : this.hunger + value2 <= 0
      ? (this.hunger = 0)
      : (this.hunger += value2);

    value3 >= 0
      ? this.thirst + value3 >= 100
        ? (this.thirst = 100)
        : (this.thirst += value3)
      : this.thirst + value3 <= 0
      ? (this.thirst = 0)
      : (this.thirst += value3);
  }

  play() {
    this.maxminValue(10, -2, -2);
  }

  feed() {
    this.maxminValue(3, 8, -6);
  }

  giveDrinks() {
    this.maxminValue(-5, -4, 10);
  }
}

const animal1 = new Animal();

const updateData = function () {
  document.querySelector(".hunger__value").innerHTML = animal1.hunger;
  document.querySelector(".thirst__value").innerHTML = animal1.thirst;
  document.querySelector(".happiness__value").innerHTML = animal1.happiness;
};

const idle = function () {
  if (animal1.happiness > 0) animal1.happiness -= 1;
  if (animal1.hunger > 0) animal1.hunger -= 1;
  if (animal1.thirst > 0) animal1.thirst -= 1;
  updateData();
};

play.addEventListener("click", function () {
  animal1.play();
  updateData();
});

feed.addEventListener("click", function () {
  animal1.feed();
  updateData();
});

drink.addEventListener("click", function () {
  animal1.giveDrinks();
  updateData();
});

setInterval(function () {
  idle();
}, 5000);
