// // "use strict";

// // const someGoods = [
// //     { name: 'Радар', bonus: 1300, times: 4 },
// //     { name: 'Сканер', bonus: 2700, times: 3 , category:'MFO'},
// //     { name: 'Дроид', bonus: 800, times: 7 },
// //     { name: 'Захват', bonus: 1200, times: 2 },
// //   ];
// //   const getValuesByKey = function(arr, prop) {
// //     let rez = [];

// //     for(let i=0; i<arr.length; i++){
// //         let ttt = arr[i][prop];
// //         if (ttt){
// //             rez.push(ttt)
// //         }

// //     }
// //     return rez;
// //   };

// //   const concatAllProps = function(arr, prop) {
// //     let rez = [];

// //     for(let i=0; i<arr.length; i++){
// //         let ttt = arr[i][prop];
// //         if (ttt){
// //             rez.push(ttt)
// //         }

// //     }
// //     return rez.join(', ');

// //   }





// //   console.log(getValuesByKey(someGoods, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// //   console.log(getValuesByKey(someGoods, 'times')); // [4, 3, 7, 2]
// //   console.log(getValuesByKey(someGoods, 'category')); // ['MFO']
// //   console.log(concatAllProps(someGoods, 'name')); // 'Радар, Сканер, Дроид, Захват'
// // //   console.log(concatAllProps(someGoods, 'times')); // 16
// // //   console.log(concatAllProps(someGoods, 'bonus')); // 6000
// // Math.sum = (...args)=>Array.from(args).reduce((acc,el)=>acc+el);
// Math.sum = function () {
//     const array = Array.from(arguments);
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(Math.sum(7, 3, 5));
// const someGoods = [{
//         name: 'Радар',
//         bonus: 1300,
//         times: 4
//     },
//     {
//         name: 'Сканер',
//         bonus: 2700,
//         times: 3,
//         category: 'MFO'
//     },
//     {
//         name: 'Дроид',
//         bonus: 800,
//         times: 7
//     },
//     {
//         name: 'Захват',
//         bonus: 1200,
//         times: 2,
//         category: 'FFO'
//     },
// ];
// const getByKeyValue = function (arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         const cObj = arr[i];
//         for (const key in cObj) {
//             const cValue = cObj[key];
//             if (cValue == value) {
//                 return cObj.name + ' : ' + key + ' : ' + value;
//             }
//         }
//     }
// };
// const getValuesByKey = function (arr, prop) {
//     const rez = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[prop]) {
//             rez.push(arr[prop]);
//         }
//     }
//     return rez;
// };
// const concatAllProps = function (arr, prop) {
//     const DELIMITER = ', ';
//     let rezString = '';
//     let rezNumber = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i][prop] === 'string') {
//             rezString += arr[i][prop] + DELIMITER;
//         } else {
//             rezNumber += arr[i][prop];
//         }
//     }
//     return rezNumber ? rezNumber : rezString.slice(0, -DELIMITER.length);
// };
// console.log(getByKeyValue(someGoods, 'MFO')); // Сканер: category: MFO
// console.log(getByKeyValue(someGoods, '800')); // Дроид: bonus : 800
// console.log(concatAllProps(someGoods, 'name')); // 'Радар, Сканер, Дроид, Захват'
// console.log(concatAllProps(someGoods, 'times')); // 16
// console.log(concatAllProps(someGoods, 'bonus')); // 6000

const someGoods = [
  { name: 'Stage 1', start: 1300, bonus: 4, steps:23 },
  { name: 'Stage 2', start: 2700, bonus: 9, steps:6  , odd:true},//не брать  четніе
  { name: 'Stage 3', start: 800, bonus: 7, steps:13  },
  { name: 'Stage 4', start: 1200, bonus: 8, steps:2  , even:true},//не брать не четніе
];

// function setUpGoods(someGoods){
//     for (let i=0; i<someGoods.leng)
// }
console.log(someGoods); // result:[1300, 1304, 1308, 1312.... step раз]