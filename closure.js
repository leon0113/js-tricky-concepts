function stopWatch() {
    let coounter = 0;
    return function () {
        coounter++;
        return coounter;
    }
}
let clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

// ! google = "What is closure in js?"