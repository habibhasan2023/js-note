// var fruits = ['banana', 'apple', 'orange', 'mango'];

// for (let item of fruits) {
//   console.log(item)
// }

// fruits.forEach((curElem, index, arr) => {
// console.log(`${curElem} ${index} `)

//   console.log(arr)
// })


//============= imp topic ======
// const myEach = fruits.forEach((curElm, index, arr) => {
//   return `${curElm} ${index}`
// })
// console.log(myEach)

//====================================
// %%%%%%%%%%%%%%% MAP %%%%%%%%%%
//=====================================

// var fruits = ['banana', 'apple', 'orange', 'mango'];
// fruits.map((curElm, index, arr) => {
//   console.log(`${curElm} ${index}`)
//   console.log(arr)
// })

//👍👍👍 Map Notun Array rady kore but Main Arrayke Change kore nah... ja ForEach pare na Undefined ase 👍👍👍

//============= imp topic ======
// const myMap = fruits.map((curElm, index, arr) => {
//   return `${curElm} ${index}`;
// });
// console.log(myMap)
// console.log(fruits)



// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((curElm) => {
//   console.log(curElm * 2);
// })

// const snNum = numbers.map((curElm) => {
//   return (curElm * 2);
// })
// console.log(snNum)

//let fruits = ["apple", "orange", "banana", "mango"];

//console.log(fruits.splice(1));
//console.log(fruits.splice(0));
// fruits.splice(-1, 0, "grapes");
// console.log(fruits)

// ######## splice add Array #####
//const month = ["jan", "feb", "june", "sep"];
// month.splice(month.length, 0, "dec");
// console.log(month);

// const indexMonth = month.indexOf("june");
// console.log(indexMonth)
// month.splice(indexMonth, 1, "JUNE")
// console.log(month)

// const indexDelete = month.indexOf("feb");
// month.splice(indexDelete, 1);
// console.log(month)





// @@@@@@@@@@@   FIND   @@@@@@@@@@@@@@@@@

//const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 6, 8];

// const result = numbers.find((curElm) => {
//   return curElm > 1;
// })
// console.log(result)

// const result = numbers.map((curElem) => {
//   return curElem * 5;
// })
// console.log(result);

// const resultt = result.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(resultt)

// =========================================
//🧑🏻‍💻🧑🏻‍💻  FILTER  🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻
//===========================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.filter((curElm) => {
//   return curElm > 6;
// })
// console.log(result);

// let value = 5
// const numbers = [1, 2, 3, 4, 5, 6, 5, 7, 8];
// const result = numbers.filter(curElm => {
//   return curElm === value;
//   //return curElm !== value;
// });
// console.log(result);

//-----------------------------------------
//🧠🧠Erray takle [] use korte hoy.. and Object takle . use korte hoy🧠🧠
//-----------------------------------------

// const products = [
//   { name: "laptop", Price: 1200 },
//   { name: "phone", Price: 400 },
//   { name: "Tab", Price: 300 },
//   { name: "watch", Price: 100 },
// ];

// const filterPro = products.filter((curElem) => {
//   return curElem.Price <= 500;
// });
// console.log(filterPro)

//const numbers = [1, 2, 3, 4, 3, 5, 6];
// let uniqe = numbers.filter((curElm, index, arr) => {
//   console.log(arr[index])
// })

//console.log([new Set(numbers)])
//console.log([...new Set(numbers)])


//========================================
// @@ 🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻 REDUCE 🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻@@@
//==========================================

// const productPrice = [100, 200, 300, 400, 500];
// const totalPrice = productPrice.reduce((accum, curElem) => {
//   return (accum + curElem);
// }, 0);

// console.log(totalPrice)



// =====🧠🧠 SLICE(start, end)🧠🧠
// let text = "hello world";
// let result = text.slice(3, 10);
// console.log(result)


//===========================
//@@@@@@@@@@@@@@@ MATH @@@@@@@@@@@@@@
//============================
// const piValue = Math.PI;
// console.log(piValue);

// console.log(Math.abs(5));
// console.log(Math.abs(-5));

// const round = Math.round(3.6);
// console.log(round)

// const round = Math.ceil(3.3);
// console.log(round)

// const floor = Math.floor(3.6);
// console.log(floor)

//  const floor = Math.trunc(3.6);
// console.log(floor)

//  const floor = Math.trunc(-3.6);
// console.log(floor)

let sqre = Math.sqrt(25);
console.log(sqre)

