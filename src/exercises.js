function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
}
let lastEleA = a.length - 1;
let lastEleB = b.length - 1;
if (a[0] === b[0] || a[lastEleA] ===  b[lastEleB]){
    return true;
} else {
    return false;
}
}

function endsMeet(values, n) {
if(!values ||values.length < n || n < 0){
    return [];
}
let position = 0;
let array = [];
let lengthV = values.length - n;
if(n == 0){
    array[position] = values[lengthV - 1];
} else {
    for(let a = n; a > 0; a--){
        array[position] = values[position];
        position++;
    }

    for(let a = n; a > 0; a-- ){
        array[position] = values[lengthV];
        position++;
        lengthV++;
    }
}

return array;

}

function difference(numbers) {
    if(!numbers || numbers.length < 1){
        return undefined;
    }
    let pos = numbers.length - 1;
    let isTrue = true;
    let largeValue = 0;
    let smallValue = 0;
    for (pos; pos >= 0; pos--){
        let currVal = Number(numbers[pos]);
        if(currVal == false){
            isTrue = false;
        } else {
            if(currVal > largeValue){
                largeValue = currVal;
            }
            if(currVal < smallValue){
                smallValue = currVal;
            }
        }
    }
     if(!isTrue){
         return undefined;
     } else {
         let value = largeValue - smallValue;
         return value;

     }
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
