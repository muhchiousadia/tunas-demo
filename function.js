// Function declaration

function welcome() {
  console.log("Welcome to JavaScript!");
}

welcome();

// Parameters and return value

function subtract(x, y) {
  return x - y;
}

let answer = subtract(50, 20);
console.log(answer);

// Default parameter

function introduce(name = "Guest") {
  console.log(`Hi, ${name}!`);
}

introduce();
introduce("Elon Musk");

// Function expression

const divide = function (x, y) {
  return x / y;
};

console.log(divide(20, 5));

// Pass function as an argument

function welcomeUser(welcomeFunction, name) {
  welcomeFunction(name);
}

function sayWelcome(name) {
  console.log(`Welcome, ${name}!`);
}

welcomeUser(sayWelcome, "Mark Zuckerberg");
