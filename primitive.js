//? data types
//! primitive data types
// 1.Number
// 2.string
// 3.boolean
// 4.undefined
// 5.null
// 6.symbol


//! non-primitive data types
// 1.object

let a = 'hello';
let b = a;
console.log(b, a);
a = 'hi';
console.log(b, a);

const x = { job: 'web developer' };
const y = x;
// console.log(x, y);
x.job = 'front end developer';
// console.log(x, y)