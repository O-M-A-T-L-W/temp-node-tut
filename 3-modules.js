// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//always start module name with dot If the module is two level up use dot dot
const names = require('./4-names') 
//we don't name dot js
const sayHi = require('./5-utils') 
const data =  require('./6-alternative-flavor')
//console.log(data)
require('./7-mind-grenade.js')

console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);