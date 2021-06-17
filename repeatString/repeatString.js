const repeatString = function(initialString, repeatQuantity) {
    if (repeatQuantity < 0){ return 'ERROR'}
let repeatedString = '';
for (let i = 0; i < repeatQuantity; i++){
repeatedString = repeatedString.concat(initialString)
}
return repeatedString

};


repeatString('hey', 3)
module.exports = repeatString;
