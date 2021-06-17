const leapYears = function(testYear) {
    //Test if divisible by 400
if (testYear%400 === 0){
    return true
}
//Test if divisible by 100
if (testYear%100 ===0 && testYear%4 ===0){
    false
}
//Test if divisible by 4
    if (testYear % 4 === 0 && testYear % 100 !== 0) {
        return true
    }
return false
};

module.exports = leapYears;
