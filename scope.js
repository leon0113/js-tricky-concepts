const fav = 5; // this is  a global var

function add(first, second) {
    const sum = first + second;
    console.log(sum); // can access
    return sum;
}

const result = add(5, 2);
console.log(second); // can't access