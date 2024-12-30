
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 5))

// function great() {
//   console.log('hello world')
// }
// great();

// function great(name) {
//   console.log('heello ' + name + ' welcom to our new course')
// }

// great('habib') //arguments

// ***** anonymous function ****
// var result = function (a, b) {
//   console.log(a + b);
// }
// result(10, 20)

// function sum(a, b) {
//   return a + b;
// }
// var result = sum(5, 5);
// console.log(result);

// console.log('the som som of two numbers is ' + result)

// const age = 20;
// let message = `i am ${age} years old.`;
// console.log(message);

// +++++++++ Arrow function
// const sum = (a, b) => {
//   let result = `the sum of ${a} and ${b} is ${a + b}`;
//   console.log(result)
// }
// sum(5, 5)

// function calculator(num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case "+":
//       return num1 + num2;
      
    
//     case "-":
//      result = num1 - num2;
//       return result
    
//     default:
//       return "no oparator found"
//   }
// }
// console.log(calculator(5, 2, "+"));

// const isRevers = (star) => {
//   for (let char = 0; char <= star.length; char++){
//     console.log(star[char])
//   }
// }
// isRevers("vinod thapa")

// var arr = [];
// console.log(typeof arr)
// var obj = [];
// console.log(typeof obj)


// const peram = (str) => {
//   let totalAlpha = "";
//   for (let char = 97; char <= 122; char++){
//     totalAlpha =totalAlpha + String.fromCharCode(char)
//   }
//   console.log(totalAlpha);
// }

// const peram = (str) => {
//   let input = str.toLowerCase().split();
//   console.log(input);
// }
// console.log(peram("The quick brown Fox jumps ove the lazy Dog"))