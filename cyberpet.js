const play = document.querySelector(".play");
const feed = document.querySelector(".feed");
const drink = document.querySelector(".drink");

const happiness = document.querySelector(".happiness");
const hunger = document.querySelector(".hunger");
const thrist = document.querySelector(".thrist");

class Animal {
  constructor(hunger = 50, thrist = 50, happiness = 50) {
    (this.hunger = hunger),
      (this.thrist = thrist),
      (this.happiness = happiness);
  }

  play() {
    this.happiness += 10;

    this.hunger -= 9;
    this.thrist -= 3;
  }

  feed() {
    this.hunger += 5;

    this.thrist -= 3;
    this.happiness -= 3;
  }

  giveDrinks() {
    this.thrist += 5;

    this.hunger -= 3;
    this.happiness += 3;
  }
}

const animal1 = new Animal();

const updateData = function () {
  happiness.childNodes[3].innerHTML = animal1.happiness;
  hunger.childNodes[3].innerHTML = animal1.hunger;
  thrist.childNodes[3].innerHTML = animal1.thrist;
};

const idle = function () {
  animal1.happiness -= 1;
  animal1.hunger -= 1;
  animal1.thrist -= 1;
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
