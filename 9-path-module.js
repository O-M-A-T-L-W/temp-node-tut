const path = require('path')

console.log(path.sep)

const filePath = path.join(__dirname,'/content', 'subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content', 'subfolder','test.txt') //returns absolute path. __dirname refers to the dir in which the curent file app.js is stored

console.log(absolute);