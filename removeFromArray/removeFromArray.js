const removeFromArray = function(array, ...valuesToRemove) {
    let modifiedArray = array || [];
    console.log(array);
    console.log(modifiedArray);
valuesToRemove.map((valueToRemove) => {
    const index = modifiedArray.indexOf(valueToRemove);
        if (index > -1) {
            modifiedArray.splice(index, 1);
            console.log(modifiedArray);
        }
}

)


    // array = [2, 9]
    console.log(modifiedArray);
    return modifiedArray

};
removeFromArray([1, 2, 3], "1", 3)
module.exports = removeFromArray;
