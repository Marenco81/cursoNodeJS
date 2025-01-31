//.js -> por defecto utiliza CommonJS
//.msj ->para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import {mult, sum} from './sum.mjs'

console.log(sum(1,2));

console.log(mult(2,3));