const play = document.querySelector(".play");
const feed = document.querySelector(".feed");
const drink = document.querySelector(".drink");

const happiness = document.querySelector(".happiness");
const hunger = document.querySelector(".hunger");
const thirst = document.querySelector(".thirst");
const start = document.querySelector(".start");
const menu = document.querySelector(".menu");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over");
const restart = document.querySelector(".restart");
const radio = document.querySelectorAll(".radio");
const type = document.querySelector(".type");

class Animal {
  constructor(hunger = 50, thirst = 50, happiness = 50, decayValue = 5) {
    (this.hunger = hunger),
      (this.thirst = thirst),
      (this.happiness = happiness),
      (this.decayValue = decayValue);
  }

  setValue(value1, value2, value3) {
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

  play(happiness = 10, hunger = -2, thrist = -2) {
    this.setValue(happiness, hunger, thrist);
  }

  feed(happiness = 2, hunger = 10, thrist = -2) {
    this.setValue(happiness, hunger, thrist);
  }

  giveDrinks(happiness = -2, hunger = -2, thrist = 10) {
    this.setValue(happiness, hunger, thrist);
  }
}

class Rabbit extends Animal {
  constructor(hunger, thirst, happiness, decayValue) {
    super(hunger, thirst, happiness, decayValue);
  }

  play() {
    super.play();
  }

  feed() {
    super.feed();
  }

  giveDrinks() {
    super.giveDrinks();
  }
}

class Wolf extends Animal {
  constructor(hunger, thirst, happiness, decayValue = 3) {
    super(hunger, thirst, happiness, decayValue);
  }
  play() {
    super.play(9, -3, -3);
  }

  feed() {
    super.feed(2, 9, -4);
  }

  giveDrinks() {
    super.giveDrinks(-3, -3, 9);
  }
}

class Dragon extends Animal {
  constructor(hunger, thirst, happiness, decayValue = 2) {
    super(hunger, thirst, happiness, decayValue);
  }
  play() {
    super.play(8, -3, -3);
  }

  feed() {
    super.feed(1, 7, -5);
  }

  giveDrinks() {
    super.giveDrinks(-3, -3, 8);
  }
}

let currentAnimal = radio[0].value;
type.innerHTML = "rabbit";
let myAnimal = new Rabbit();
let counter;

radio.forEach((el) =>
  el.addEventListener("click", function (e) {
    currentAnimal = e.target.value;
    type.innerHTML = e.target.value;
    if (currentAnimal === "rabbit") myAnimal = new Rabbit();
    if (currentAnimal === "wolf") myAnimal = new Wolf();
    if (currentAnimal === "dragon") myAnimal = new Dragon();
  })
);

const checkStatus = function () {
  if (myAnimal.hunger <= 0 || myAnimal.thirst <= 0 || myAnimal.happiness <= 0) {
    game.classList.toggle("hidden");
    gameOver.classList.toggle("hidden");
    clearInterval(counter);
  }
};
const updateData = function () {
  document.querySelector(".hunger__value").innerHTML = myAnimal.hunger;
  document.querySelector(".thirst__value").innerHTML = myAnimal.thirst;
  document.querySelector(".happiness__value").innerHTML = myAnimal.happiness;
  checkStatus();
};

const idle = function () {
  if (myAnimal.happiness > 0) myAnimal.happiness -= 1;
  if (myAnimal.hunger > 0) myAnimal.hunger -= 1;
  if (myAnimal.thirst > 0) myAnimal.thirst -= 1;
  updateData();
};

play.addEventListener("click", function () {
  myAnimal.play();
  updateData();
});

feed.addEventListener("click", function () {
  myAnimal.feed();
  updateData();
});

drink.addEventListener("click", function () {
  myAnimal.giveDrinks();
  updateData();
});

start.addEventListener("click", () => {
  updateData();
  game.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  counter = setInterval(idle, 1000 * myAnimal.decayValue);
});

restart.addEventListener("click", () => {
  myAnimal = new Rabbit();
  gameOver.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});
