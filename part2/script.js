"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio";
//console.log(interface);
// const day = "Thursday";
// switch (day) {
//   case "monday":
//     console.log("I am monday");
//     break;
//   case "tuesday":
//     console.log("I am tuesday");
//     break;
//   case "wednesday":
//     console.log("I am wednesday");
//     break;
//   default:
//     console.log("I am another day");
// }
// const month = "dec";
// if (month === "jan") {
//   console.log("This month jan");
// } else if (month === "feb") {
//   console.log("This month Feb month");
// } else if (month === "march") {
//   console.log("This month March");
// } else {
//   console.log("Another month");
// }
// const year = 2002;
// if (year === 1988) {
//   console.log("This is 1988");
// } else if (year === 2002) {
//   console.log("This is 2002");
// } else {
//   console.log("This is 2023");
// }

// const book = "funny";
// switch (book) {
//   case "cartoon":
//     console.log("I like cartoon");
//     break;
//   case "novel":
//     console.log("I like novel");
//     break;
//   case "Horror":
//     console.log("I like Horror book");
//     break;
//   default:
//     console.log("I like other Book");
// }
// function logger() {
//   console.log("My name is Jonas");
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const juice = fruitProcessor(5, 10);
// console.log(juice);

// function computerDevice(mouse, keyboard) {
//   console.log(mouse, keyboard);
//   const allDevice = `I need computer with ${mouse} mouse and ${keyboard} keyboard`;
//   return allDevice;
// }
// const allDevice = computerDevice(1, 1);
// console.log(allDevice);

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apple with ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 10);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function mySelf(name, age) {
//   const about = `My name is ${name} and age is ${age}`;
//   return about;
// }
// const myType = mySelf("suphone", 34);
// console.log(myType);

// const mySelfDetail = mySelf("suphonemyint", 35);
// console.log(mySelfDetail);

// function calcAge1(birthYeah) {
//   return 2022 - birthYeah;
// }
// const age1 = calcAge1(1988);
// console.log(age1);

// const calcAge2 = function (birthYeah) {
//   return 2022 - birthYeah;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// const age1 = calcAge1(1991);
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// console.log(age1);

// const age2 = calcAge2(1991);
// const calcAge2 = function (birthYeah) {
//   return 2022 - birthYeah;
// };
// console.log(age2);
// function mySelf() {
//   console.log("My name is Suphone");
// }
// mySelf();

// function job() {
//   console.log("My job is programmer");
// }
// job();

// function mySelfDetail(name, age, job) {
//   const detail = `My name is ${name}, age is ${age} and my job is ${job}`;
//   return detail;
// }
// const MyDetail = mySelfDetail("suphone", 34, "developer");
// console.log(MyDetail);
// function favoriteColor(color) {
//   const faColor = `My favorite color is ${color} color`;
//   return faColor;
// }
// const color = favoriteColor("black,white");
// console.log(color);
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1991));
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2022 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1988, "suphone"));
// console.log(yearsUntilRetirement(1991, "Jonas"));

// const fruitCount = (apple, orange) => {
//   return `Apple is total ${apple} and Orange is total ${orange}`;
// };
// console.log(fruitCount(10, 20));

// const fruitProcessor = (apples, oranges) => {
//   return `Juice with ${apples} apples and ${oranges} oranges`;
// };
// const totalFruit = fruitProcessor(5, 10);
// console.log(totalFruit);
// const mySelf = (name, age, job) => {
//   const deatil = `My name is ${name}, age is ${age} and job is ${job}`;
//   return deatil;
// };

// const detail = mySelf("suphone", 35, "developer");
// console.log(detail);

// function cutFruitPieces(fruit) {
//   return fruit * 6;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// function saveMoney(money) {
//   return money * 2;
// }
// function saveTotalMoney(job, shop) {
//   const totalJob = saveMoney(job);
//   const toalShop = saveMoney(shop);

//   const totalSaving = `My money is save to get Job ${totalJob} kyats and to get Shop ${toalShop} kyats.`;
//   return totalSaving;
// }
// console.log(saveTotalMoney(1000, 500));

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1950, "Bob"));
// function calcAge(birthYear, firstName) {
//   const age = 2022 - birthYear;
//   return `${firstName} is ${age} years old.`;
// }
// const age = calcAge(1988, "Suphone");
// console.log(age);
// const calcAge = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAge(44, 23, 71);
// const scoreKoalas = calcAge(65, 54, 49);
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} and ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} and ${avgDolphins})`);
//   } else {
//     console.log("No team wins ...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(46, 56);

// const calcAge = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAge(85, 54, 41);
// const scoreKoalas = calcAge(23, 34, 27);
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} and ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} and ${avgDolphins})`);
//   } else {
//     console.log("No team wins ...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1988, 1991, 2012, 2020);
// console.log(years);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "jay";
// console.log(friends);

// const firstName = "jonas";
// const job = "teacher";
// const jonas = [firstName, "schemdtman", 2037 - 1991, job, friends];
// console.log(jonas);

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [age1, age2, age3];
// console.log(ages);
// const agesA = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(agesA);
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Joy");
// friends.unshift("Sandi");
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
//console.log(friends.indexOf("Peter"));
//console.log(friends.indexOf("bob"));
//console.log(friends.indexOf("Michael"));
//console.log(friends.indexOf("Steven"));
//console.log(friends.includes("Steven"));
//console.log(friends.includes("bob"));
// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }
// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }
// const calcTip = function (bill) {
//   return (bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// };

// const bills = [125, 555, 44];
// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);
// const tips = [tip1, tip2, tip3];
// console.log(bills, tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
// };
// console.log(jonas);
// const favoriteColor = prompt("what is favorite color");
// console.log(favoriteColor);
// const interestedIn = prompt(
//   "What do you know about Jonas? Choose between firstName, lastName, age,job and friends"
// );
// //console.log(jonas[interestedIn]);
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("wrong request!");
// }
// jonas.location = "Thailand";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);
// console.log(jonas.friends[0]);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYeah;
//   },
// };
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license `;
//   },
// };
// //console.log(jonas.calcAge());
// console.log(jonas.getSummery());
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// for (let rep = 1; rep <= 10; rep++) {
//   console.log("I am winner repetition" + rep);
// }
// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
//   "Hello",
// ];
// const type = [];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   type[i] = typeof jonas[i];
// }

// console.log(type);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// const color = ["yellow", "red", "green"];
// const add = [];
// for (let i = 0; i < color.length; i++) {
//   add.push("pink" + color[i]);
// }
// console.log(add);

// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
//   "Hello",
// ];
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------- Starting Exercise ${exercise}----------`);
//   for (let rep = 1; rep < 4; rep++) {
//     console.log(`Exercise ${exercise}: ${rep}`);
//   }
// }
// let rep = 1;
// while (rep <= 5) {
//   console.log(`Lifting weight reptition ${rep}`);
//   rep++;
// }

// let exe = 1;
// while (exe <= 7) {
//   console.log(`Exercise with my friends ${exe}`);
//   exe++;
// }
// const dice = Math.trunc(Math.random() * 10) + 1;
// console.log(dice);
// let dice = Math.trunc(Math.random() * 10) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }
// let dice = Math.trunc(Math.random() * 10) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 10) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end ...");
//   }
// }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([3, 5, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
