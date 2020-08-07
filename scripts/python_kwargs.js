const clip = require("clipboardy");
const { makeClassKwargs } = require("../python");

args = process.argv.slice(2);

let _class = args.shift();

const constructor = makeClassKwargs(_class, ...args);

console.log(constructor);

clip.writeSync(constructor);
