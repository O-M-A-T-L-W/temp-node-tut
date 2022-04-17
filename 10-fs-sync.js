//'fs' for interacting with filesystem
const { readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second)

//Contains the name and path where the new file is or will be created, and the value to be over-written in the new file
writeFileSync('./content/result-sync.txt',`Here is the result  : ${first},${second}`)

// for avoiding the over-writing and instead appending using {flag:a} as 3rd arg

writeFileSync('./content/result-sync.txt',`Here is the result 1 : ${first},${second}`,{flag:'a'})

console.log('done with this task')
console.log('starting the next one')