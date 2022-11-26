//!find area of circle

// let radius = prompt("enter the radius of cirlce");
// let AOC = 3.14 * radius ** 2;
// console.log(AOC);

//!square of element

// let array = [2, 4, 6, 8];
// array.forEach(i => {
//  let arr= console.log(i*i)
// })

//!  Find number is ArmStrong number or not

// let number = prompt("Enter a positive integer");
// let n = number.length;
// let sum = 0;


// let temp = number;

// while (temp > 0) {
//   let remainder = temp % 10;

//   sum += remainder ** n;

  
//   temp = parseInt(temp / 10);
// }

// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }


//!  Program to sort array in Descending order

// var array1 = [200, 100, 54, 23, 78, 45];
// for (let i = 1; i < array1.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array1[i] > array1[j]) {
//       let temp = array1[i];
//       array1[i] = array1[j];
//       array1[j] = temp;
//     }
//   }
// }
// console.log(array1);


//!. How to empty an array in JavaScript ?

// var arrayList = ["a", "b", "c", "d", "e", "f"];
// var anotherArrayList = arrayList;
// arrayList = [];
// console.log(anotherArrayList);
// console.log(arrayList);


//! 68.How to convert array to object

// let emp = {
//   id: 1,
//   name: "rohith",
//   college: "chandru",
// };
// console.log(Object.assign({}, emp));

// console.log({ ...emp });

// let arr1 = [
//   ["id", "1"],
//   ["name", " User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];
// console.log(Object.fromEntries(arr1));


//!  Find Average of given array

// var arr = [10, 20, 30];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);


//!  program to convert celsius to fahrenheit

// const celsius = prompt("Enter a celsius value: ");
// const fahrenheit = celsius * 1.8 + 32;

// console.log(
//   `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
// );

//! 12. Swap two numbers

//  without using 3rd variable
let a = 10;
let b = 20;
console.log("Before swapping a value is " + a);
console.log("Before swapping b value is " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping a value is " + a);
console.log("After swapping b value is " + b);




