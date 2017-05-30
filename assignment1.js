/**
 * question
 * Write a JavaScript code that will prompt user to enter a list of comma separated integers and returns the total occurrences of each number in an order(ascending/descending).
 INPUT:     5,4,2,8,2,1,4,5,8,5,2,8,8,8
 OUTPUT:    1: 1
 2: 3
 4: 2
 5: 2
 8: 5
 */

//solution 1

var input = [5, 4, 2, 8, 2, 1, 4, 5, 8, 5, 2, 8, 8, 8];
findOccurance(input);
function findOccurance(input) {

    input.sort();
    var output = {};
    for (var i = 0; i < input.length; i++) {

        if (!output[input[i]]) {
            output[input[i]] = 1;

        } else {
            output[input[i]] += 1;
        }

    }

    console.log(output);
}
