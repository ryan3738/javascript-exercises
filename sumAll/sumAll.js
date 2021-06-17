const sumAll = function(number1, number2) {
    //Check for parameter that is not a number
    if (typeof number1 !== "number" || typeof number2 !== 'number'){
        return "ERROR"
    }
    //Check for non positive values
    if (number1 < 0 || number2 < 0){
        return "ERROR"
    }

let smallerNumber = number1;
let largerNumber = number2;
//Check which number is larger
if (number1 > number2){
    smallerNumber = number2
    largerNumber = number1
}

let finalSum = 0;

//Add values to the finalSum starting at the lower number until the larger number is reached
    for (i = smallerNumber; i <= largerNumber; i++){
    finalSum += i;
}

//Return the result
return finalSum
};


console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
module.exports = sumAll;
