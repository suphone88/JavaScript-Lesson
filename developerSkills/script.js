// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     //const curTemp = temps[i];
//     //if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     //const curTemp = temps[i];
//     //if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

//BUG
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius')),
//   };
//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());
// const jonas = ['jonas', 'schmedtmann', 2037 - 1991, 'teacher'];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }
// const suphone = ['suphone', 'myint', 'developer'];
// for (let i = 0; i < suphone.length; i++) {
//   console.log(suphone[i]);
// }

// const suphone = {
//   firstName: 'suphone',
//   lastName: 'Myint',
//   job: 'developer',
// };
// console.log(suphone);
// const interestedIn = prompt(
//   'What do you know about suphone? choose firstName,lastName,job'
// );

// if (suphone[interestedIn]) {
//   console.log(suphone[interestedIn]);
// } else {
//   console.log('Wrong question');
// }

// const numberAdd = function (text) {
//   const myText = text;
//   //console.log(myText);

//   const numAdd = {
//     value: prompt('Enter the Something'),
//   };
//   //console.log(numAdd.value);
//   const addText = numAdd.value + ' ' + myText;
//   if (addText === `Are you ok? ${myText}`) {
//     console.log('yes, I am fine');
//   } else if (addText === `Hello ${myText}`) {
//     console.log('Hello');
//   } else if (addText === 'Where are you from!') {
//     console.log('I am from Myanmar');
//   } else {
//     console.log("Sorry, I don't know");
//   }
//   return addText;
// };

// console.log(numberAdd('suphone'));

// const numberAdd = function (text) {
//   const myText = text;
//   //console.log(myText);

//   const sayText = {
//     value: prompt('Enter the Something'),
//   };
//   //console.log(numAdd.value);
//   const addText = sayText.value + ' ' + myText;
//   return addText;
// };

// console.log(numberAdd('suphone'));
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days ...`;
  }
  //console.log('...' + str);
  return '... ' + str;
};
//printForecast(data1);
//printForecast(data2);
const data1Forecast = printForecast(data1);
const data2Forecast = printForecast(data2);
console.log(data1Forecast);
console.log(data2Forecast);
