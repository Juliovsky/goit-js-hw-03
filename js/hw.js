"use strict";
// ----------------------
//      do wile
// ----------------------
// let name;
// let sname;
// let age;
// let nextStep;

// function ask() {
//     name = prompt("enter your name");
//     sname = prompt("enter your surname");
//     age = prompt('enter your name');
// }

// function say() {
//     console.log(name);
//     console.log(sname);
//     console.log(age);

// }
// do {
//     ask();
//     say();
//     nextStep = confirm("try once more");
// } while (nextStep);

// --------------------------
// // for
// --------------------------
// let i = 0;
// let msg;

// function title(msg, count) {
//     if (count === undefined) {
//         count = 3;
//     }
//     for (i = 0; i < count; i++){
// console.log(msg);
//     }
// }

// title("pidr")
// --------------------------
// MAssive arguments
// ---------------------------
let maxValue;


function max(a, b, c) {
    let maxValue = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments[i];
        }
    }
    return maxValue;
}


console.log(max(33, 33, 48,99,54));


// let arr = [1, 10, 2, 3, 99, 4, 5, 6, 18, 7, 8];

// arr.sort();
// console.log(arr);

// let spliced = arr.splice(2, 0, 10, 13);

// console.log(arr);

// let students = ["Alex", "Pete", "Ann", "Fred", "Tod"]; 

// let from = prompt('Enter from');
// let count = prompt('Enter count');

// let res = students.splice(from,count);

// console.log(res);

// arr.reverse();
// console.log(arr);



// let input = prompt('Put number to add in  maggive');

// while (input != null) {
//     arr = arr.concat(Number(input));
//     input = prompt('Put number to add in  maggive');
// }

// console.log(arr);







// let arr = [1, 2, 3];
// let input = prompt("Please put a new element of the massive");

// while (input != null) {
//     arr = arr.concat(Number(input));
//     input = prompt("Please put a new element of the massive");
// }

// console.log(arr);