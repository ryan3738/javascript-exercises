const reverseString = function(originalString) {
    //Variable to hold reversed string
let reversedString = ''
// Split up string into an array
// Reverse the array of strings
let stringArray = [...originalString].reverse()

// Put string back together
reversedString=stringArray.join('')

return reversedString
};

module.exports = reverseString;
