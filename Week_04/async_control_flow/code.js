function randomDelay() {
  setTimeout(() => {
    while (true) {
      if (Math.random() < 0.0000000001) {
        break;
      }
    }
  }, 0);
}

const a = 1;
randomDelay();
console.log(a);

// // setTimeout and setInterval

// const callback = () => {
//   console.log("I'm here 1");
//   // console.log("response", response);
// };

let counter = 0;
let intervalHandle;

const callback2 = () => {
  const year = 2022;

  const insideFunction = () => {
    const name = "ian";
  };

  // console.log("I'm here 0");
  counter = counter + 1;
  console.log(counter);
  if (counter === 10) {
    clearInterval(intervalHandle); // clearTimeout
  }
};

intervalHandle = setInterval(callback2, 1000);

// console.log("intervalHandle >>", intervalHandle);

// calling api here and sending callback to receive data
// setTimeout(callback, 1000);

// console.log("I'm here 2");

// let counter = 0;

// // create a handle
// // const intervalHandle =

// setInterval((item) => {
//   counter++;
//   console.log(e);
//   console.log("Counter: ", counter);
// }, 1000);

// // const callback = function () {
// //   counter++;
// //   console.log("Counter: ", counter);
// // };

// // setInterval(callback, 1000);

// // [1, 2, 3].forEach((item) => {
// //   console.log(item);
// // });
