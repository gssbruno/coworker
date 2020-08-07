const quickConstructor = require("./index");

args = process.argv.slice(2);

let _class = args.shift();

quickConstructor(_class, args);
