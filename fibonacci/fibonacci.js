const fibonacci = function (fibonacciNumber) {
    //Return "OOPS" if number is < 1
    let n = Number(fibonacciNumber)
    if (n < 1) {return "OOPS"}
    let fibonacciArray = [1, 1]
    //Make a loop that adds the current number to the previous until i = n


    for (let i = 2; i < n; i += 1){
        console.log(fibonacciArray);
        newValue = (fibonacciArray[i - 1] + fibonacciArray[i - 2])
        fibonacciArray.push(newValue)
        console.log(fibonacciArray);
    }
    console.log('Final Value', fibonacciArray[n - 1]);
    return fibonacciArray[n - 1];


};


module.exports = fibonacci;
