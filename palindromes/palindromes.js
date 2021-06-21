const palindromes = function (string) {

    let regex = /[\W_]/g;
    //create new variable to store string
    let lowerRegexString = string.toLowerCase().replace(regex, '') ;
    let reversedString = lowerRegexString.split('').reverse().join('');
    console.log(reversedString)
    //Remove any non letters

    //convert all to lowercase
    //split string into array
    //reverse the array
    //join array into string
    //compare reversed string to original


return lowerRegexString === reversedString
};


module.exports = palindromes;
