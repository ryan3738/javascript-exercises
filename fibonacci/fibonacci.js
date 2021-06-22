const fibonacci = function (fibonacciNumber) {
    let num = Number(fibonacciNumber)
    if (num < 1) {return "OOPS"}

    let a = 1, b = 0, temp;

    while (num >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;



};


module.exports = fibonacci;
