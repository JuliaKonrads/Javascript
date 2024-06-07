let fruit = "Apple";
fruit = "Orange"; 
console.log("The fruit is", fruit);

var myAge = 36;
var add = 3.5;
var result = add + myAge
console.log("Resultat", result);

var currentYear = 2024;
var year1 = 1969;
var result = currentYear - year1;
console.log("Resultat", result);

var num1 = 65;
var num2 = 240;
var result = num1 / num2;
console.log("Resultat", result);

var firstNum = 0.2708;
var secNum = 100;
var result = firstNum * secNum;
console.log("Resultat", result);

console.log("Julia Konradsson".toUpperCase());

console.log(" Remove whitespace ".trim())

console.log("How many characters long is this string?".length);

const carSpeed = 85;
if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("Carry on");
}

const wordCount = 0;
if (wordCount === 0) {
  console.log("Get writing");
}

const currentTemperature = 15;
const goneForARun = false;
if (currentTemperature > 10 && !goneForARun) {
  console.log("Go for a run!");
}

const name ="Mary";
if (name.length > 10) {
  console.log("You have a long name!");
} else if (name.length < 5) {
  console.log("You have a short name!");
}

const printName = () => {
  console.log("Julia Konradsson");
};

printName();
printName();

const printGreeting = (name) => {
  console.log(`Hello ${name}`);
};

printGreeting("Bob");
printGreeting("Sue")

const multiply = (a, b) => {
  return a * b;
};
const first = multiply(8, 8);
console.log(first);

const second = multiply(50,2);
console.log(second);

const warmEnough = (temperature) => {
  return temperature > 10;
};
if (warmEnough(15)) {
  console.log("Go for a run!");
}

