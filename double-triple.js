const first = 0;
const second = false;
if (first == second) {
    console.log('true');
}
else {
    console.log('false');
}

// double == doesn't check data types
// double == converts booolean value true to 1 & false to 0


// triple === check strickly data types


//! object & array comparison
const a = { name: 'ali' };
const b = { name: 'ali' };
if (a === b) {
    console.log('same');
}
else {
    console.log('not same')
}

//? in case of obejct & array both double & triple = will not work directly. hence we need to loop trough it for comparison