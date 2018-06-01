function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function opearate(a, b, callback) {
    return callback(a, b);
}

function perform() {
    console.log(opearate(2, 4, add));
}

perform();