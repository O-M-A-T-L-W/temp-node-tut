// npm -global command, comes with node
//npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency -g <packageName>
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
//manual approach (Create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defautl)

const _ =require('lodash'); //for using lodash, that dependency must be first installed

const items =[1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)
