/* A function that takes an array of intents and returns the sum of the intent value. */
module.exports.Calculate = function (intent) {
    let sum = 0;

    for (let index = 0; index < intent.length; index++) {
        sum += intent[index];
    }
    return sum;

}