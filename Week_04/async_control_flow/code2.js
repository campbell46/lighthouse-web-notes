const fs = require("fs");

const name = process.argv[2];

console.log("Writing to file");

for (let i = 0; i < 10; i++) {
  fs.writeFileSync("./name.txt", name);
  // console.log("in loop");
}

console.log("Print me!!");

fs.readFile("./name.txt", { encoding: "utf-8" }, (err, data) => {
  console.log("data in file", data);
});

const nameInFile = fs.readFileSync("./name.txt", "utf-8");

console.log("Name in file", nameInFile);

console.log("DONE!!");
