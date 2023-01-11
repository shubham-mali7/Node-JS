// Asynchronous Node

// console.log("Start Execution..");

// setTimeout(() => {
//   for (let i = 0; i < 10; i++) {
//     console.log("Iniside for");
//   }
// }, 1000);

// console.log("End Execution..");

const a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
  console.log("value of b is", b, " so a + b is", a + b);
}, 2000);

console.log("value of b is ", b);
console.log(a + b);
