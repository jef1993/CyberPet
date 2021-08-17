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
        this.maxminvalue();
    }

    feed() {
        this.hunger += 5;
        this.thrist -= 3;
        this.happiness -= 3;
        this.maxminvalue();
    }

    giveDrinks() {
        this.thrist += 5;
        this.hunger -= 3;
        this.happiness += 3;
        this.maxminvalue();
    }
    maxminvalue() {
        // check if the value is = 100 or > 100 we change the value to 100
        if (this.thrist >= 100) {
            this.thrist = 100;
        }

        if (this.thrist <= 0) {
            this.thrist = 0;
        }

        if (this.hunger >= 100) {
            this.hunger = 100;
        }

        if (this.hunger <= 0) {
            this.hunger = 0;
        }

        if (this.happiness >= 100) {
            this.happiness = 100;
        }

        if (this.happiness <= 0) {
            this.happiness = 0;
        }

        // check if the value is =0 or < 0 we change the value to 0

    }



}

const animal1 = new Animal();

const updateDataOnScreen = () => {
    document.getElementById("happy").innerHTML = animal1.happiness;
    hunger.childNodes[3].innerHTML = animal1.hunger;
    thrist.childNodes[3].innerHTML = animal1.thrist;
};

const idle = function() {
    animal1.happiness -= 1;
    animal1.hunger -= 1;
    animal1.thrist -= 1;
    animal1.maxminvalue();
    updateDataOnScreen();
};

play.addEventListener("click", function() {
    animal1.play();
    animal1.maxminvalue();
    updateDataOnScreen();
});

feed.addEventListener("click", function() {
    animal1.feed();
    animal1.maxminvalue();
    updateDataOnScreen();
});

drink.addEventListener("click", function() {
    animal1.giveDrinks();
    animal1.maxminvalue();
    updateDataOnScreen();
});

setInterval(function() {
    idle();
}, 10000);


// const happiness = document.querySelector(".happiness");

// if {
//     happiness = 50 < 100
// }