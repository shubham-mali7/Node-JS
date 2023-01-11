// Promises

const a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});

console.log("value of b is ", b);

// ------- async / await tried by me

// let a = 20;
// let b = 0;

// const add = async () => {
//   b = await 10;
//   console.log("value of b is", b);
//   return a + b;
// };

// const check = add()
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //   node .\index13.js
// //   value of b is 10
// //   30   (out)
