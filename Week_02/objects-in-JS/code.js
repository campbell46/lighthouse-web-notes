const car = "Toyota";
const year = 2022;
const somelargeNumber = 213123213213213213132132131312;
const isRed = true; // false
const _null = null;
const _undefined = undefined;

// Non Primitive Types

const ary = [1, "2", "3", [1], null, true];

const countries = [
  "Canada",
  "USA",
  "Iceland",
  "Australia",
  "South Africa",
  "New Zealand",
];

// console.log(countries[0]);
// console.log(countries[1]);
// console.log(countries[2]);
// console.log(countries[3]);
// console.log(countries[4]);
// console.log(countries[5]);

// OBJECTS

const prefix = "car_";

const obj = {
  car_make: "Toyota",
  car_model: "Camry",
  [`${prefix}year`]: 2022,
};

// console.log(obj);

// dot notation
// console.log(obj.car_make);
// console.log(obj.car_model);
// console.log("--------------------");

// bracket notation
// string interpolation
// console.log(obj[`${prefix}make`]);
// console.log(obj[`${prefix}model`]);

// const instructor = {
//   name: "Ian B",
//   location: "Montral, QC",
//   ary: [1, 2, 3],
//   obj: {
//     obj: {
//       obj: {},
//     },
//   },
//   stop: function () {
//     console.log("stop");
//   },
//   drive: function () {
//     this.newProp = "newProp";
//     console.log("here", this.stop());
//   },
// };

// instructor.drive();
// console.log(instructor);

// const destinations = [
//   "Vancouver",
//   "Calgary",
//   "Edmonton",
//   "Saskatoon",
//   "Regina",
// ];

// for (const destination of destinations) {
//   console.log("destination >>", destination);
// }

// for (let i = 0, l = destinations.length; i < l; i += 1) {
//   // todo
// }

// destinations.forEach(function (destination) {
//   console.log(destination);
// });

const instructors = {
  2: {
    id: "2",
    name: "Taiwo",
  },
  1: {
    id: "1",
    name: "Ian",
  },
};

// for (const key in instructors) {
//   console.log(key, instructors[key]);
// }

Object.keys(instructors).forEach(function (key) {
  console.log(key, instructors[key]);
});

Object.values(instructors).forEach(function (value) {
  console.log(value);
});

Object.entries(instructors).forEach(function (item) {
  console.log(item[0], item[1]);
});
