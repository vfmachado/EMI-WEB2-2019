
console.log("Hello World... I'm using NodeJS");

let x = 0;
console.log(x);

const max = function(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

const max2 = function(a, b) {

    return a > b ? a : b; 

}

const max3 = (a, b) => {
    return a > b ? a : b;
}


const addOne = v => v + 1;

console.log(max(5, 2));
console.log(max2(2, 13));