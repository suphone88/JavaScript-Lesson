// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIJohn);
// console.log(BMIMark);

// const MarkHigherBMI = BMIMark > BMIJohn;
// console.log(MarkHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's ${BMIMark} is higher than John's!`);
// } else {
//   console.log(`John's ${BMIJohn} is higher than Mark's!`);
// }

// const age = 18;
// const isOldEnough = age >= 19;

// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(String(23) + 20);
// console.log(23 + 23);
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / 2);
// let n = "1" + 1;
// n = n - 1;
// console.log(n);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// const age = "18";
// if (age === 18) console.log("You just became an adult (strict)");
// if (age == 18) console.log("You just became an adult (loose)");
//prompt("What's your favourite number?");
//const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//   console.log("cool! 23 is an amzaing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy!");
// }
// const day = "tuesday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }
// const age = 23;
// age >= 20
//   ? console.log("I like to drink wine")
//   : console.log("l like to drink water");

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// let drink = undefined;
// console.log(typeof drink);
// if (drink) {
//   console.log("I like drink");
// } else {
//   console.log("I do not like drink");
// }
// const age = 15;
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

let work = "developer";
work = "web developer";
console.log(typeof work);
console.log(work);

var job = "programmer";
job = "teacher";
console.log(job);
