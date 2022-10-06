//! falsy:
// false
// number = 0
// empty string
// null
// undefined
// NaN

//! truthy :
// true
// any number (without 0)
// string ( including single white space -> ' ')
// empty array
// empty object


let x = {};
if (x) {
    console.log('variable is truth');
}
else {
    console.log('variable is false');
}
