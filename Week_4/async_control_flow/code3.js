const fs = require("fs");
const EventEmitter = require("events");

const fileEvents = new EventEmitter();

// const name = process.argv[2];

fs.readFile("./name.txt", "utf-8", (err, data) => {
  if (err !== null) {
    console.log("err", err);
    fileEvents.emit("error");
  } else {
    console.log("data in file >>", data);
    fileEvents.emit("fileIsRead");
  }

  // console.log("err >>", err);
  // setTimeout(() => {
  // }, 5000);
});

fileEvents.on("fileIsRead", () => {
  console.log("file is read!!!");
});

fileEvents.on("error", () => {
  console.log("Error can't open file :(");
});
