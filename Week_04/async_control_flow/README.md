# Asynchronous Control Flow

## Resources
 - Video: https://us02web.zoom.us/rec/share/mgrIG5u3NcutoKZ670DEYMOlhPOJWAzoWI5fEUYBvxDpvg4lWokfpAZytcnLGLRW.kwf0Dvn0vXMrYMC4 Passcode: 9ZPu?cup
 - Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Sept-19th-2022-Cohort/flex-m01w4


----------------


## Content
- [X] Recap: Higher order functions / Callbacks
- [X] Synchronous vs Asynchronous Programming
- [X] Async Control Flow with setTimeout and setInterval
- [X] Break: 10/15 minutes
- [X] File System Functions
- [X] Events - Async in action



## Callback functions and higher-order functions
-------
* A function that is passed to another function as an argument is called a **Callback**
* The function can then call the callback like it would any other function
* Functions that operate on other functions, either by taking them as arguments or by returning them, are called **higher-order functions**.
  * Higher-order functions allow us to abstract over actions, not just values.
  * .map, .filter, .forEach, .reduce etc

```js
const addTwo = function(num) {
    return num + 2;
}

const doSomething = function(callback) {
    return callback(2);
}

doSomething(console.log) // => 2
doSomething(addTwo) // => 4
```

## Synchronous vs Asynchronous Programming
-------
- JavaScript is synchronous which means it executes one line of code at a time (single threaded).
- Basically, it can do only 1 thing at a time...everything else waits or 'blocks'.
- This can be problematic for executing 'long-running' tasks. Ex. Reading a huge file, database operations, API calls.
- Asynchronous programming allows for tasks to be performed without blocking execution of other operations.
- We generally use async programming when using API's outside of our application (eg. interacting with a database, making a web request, retrieving the user's geolocation coordinates).


## Async Control Flow with setTimeout and setInterval
------

## Synchronous code will always block!

In JavaScript, code is always blocking unless explicitly set up to be non-blocking.

```js
function randomDelay() {
    while(true) {
        if (Math.random() < 0.00000001) {
            break;
        }
    }
}

const a = 1;
randomDelay();
console.log(a);
```
The execution of `randomDelay` *blocks* the execution of `console.log(a)`, even though `randomDelay` would never change the value of `a`.

### setTimeout
* `setTimeout` is an asynchronous function that executes a callback after a specified amount of time.

```js
setTimeout(() => {
  console.log("I had to wait 1s ... :( ")
}, 1000)
```

* In what order will the console.logs execute?

```js
console.log('Canada');
setTimeout(() => {
  // This line of code will run whenever JavaScript finds a moment.
  console.log("USA");
})
console.log('France');
```

* What will each console.log output?

```javascript
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);
```

`setInterval` is similar to `setTimeout`, but continues to run the callback on an interval rather than being executed only once. Like `setTimeout`, `setInterval` returns a value to us so that we can later make reference to the interval (eg. in order to cancel it).

```js
let counter = 0;
// create a handle
const intervalHandle = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);
}, 1000);

//Sometime later we can cancel the counter.
clearInterval(intervalHandle)

//Sometime later we can cancel the counter.
// setTimeout(() => {
  // clearInterval(intervalHandle);
//}, 10000);
```

### Scopes in asynchronous callbacks - a hint of closures!
* In simpler terms, the closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.

## File System Functions
--------

Node has a build-in module that allows us to interact with our file system. We can import in this `fs` module like any other node module and this module gives us both a synchronous and asynchronous way of reading in a file.

* Read File Sync.

```js
const fs = require("fs");

const name = process.argv[2];

console.log("Writing the file");

for (let i = 0; i < 10; i++) {
  fs.writeFileSync("./name.txt", name);
}

const nameInFile = fs.readFileSync("./name.txt", "utf-8");
console.log("File read:", nameInFile);
console.log("Wrote the file");
```

* Read File Async.

```js
fs.readFile('./name.txt', { encoding: 'utf-8' }, (err, data) => {
  if(err) {
    return console.log(err);
  }

  console.log(data.length)
})

console.log('moving on ....')
```

## Events - Async in action
----

* Events are actions or occurences that happen in your application. The system then sends you a signal `("fires")`, so you can respond.
* Events are `"fired"` or `"run"` inside browser and is usually attached to an element. (i.e. user hovers on links, form is submitted...etc.)
* For example: `onClick`, `onKeyDown`, `OnChange`, `OnSubmit`...etc.

* We don't know when these events are occuring, so we need an asynchronous control flow.
* An **Event Handler** is a `callback` function that will be called when an `event` is triggered.

### Event Handlers
* Each event has an `event handler`, that runs when event occurs.
* Each `event handlers` are also called `event listeners`.
* The `listener` listens when `event` occurs, and the `handler` is the **code that runs as a response to event happening**.


```js
const fs = require("fs");
const EventEmitter = require("events");
const fileEvents = new EventEmitter();

const name = process.argv[2];

console.log("Writing the file");

// for (let i = 0; i < 10; i++) {
//   fs.writeFile("./name.txt", name, e => console.log("Wrote file"));
// }

const showFileContent = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
};

// const nameInFile = fs.readFile("./name.txt", "utf-8", showFileContent);
// fs.readFile("./name.txt", "utf-8", (err, data) => {
//   console.log("File read complete");
//   showFileContent(err, data);
// });
fs.readFile("./name.txt", "utf-8", (err, data) => {
  fileEvents.emit("fileRead");
  fileEvents.emit("Ready!");
  showFileContent(err, data);
});

fileEvents.on("fileRead", () => console.log("file read complete"));

fileEvents.on("fileRead", () => console.log("file read complete 2"));
```
---


## Links
- [Node Block vs Non-blocking code](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
- [MDN asynchronous concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Node fs](https://nodejs.org/api/fs.html)