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
    return []; //just a comment
}
let position = 0;
let array = [];
let lengthV = values.length - n;
if(n == 0){
    return array;
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
    let smallValue = numbers[0];
    for (pos; pos >= 0; pos--){
        let currVal = Number(numbers[pos]);
        if(!currVal){
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
if(!number || number.length < 3 || number.length%2 == 0){
    return undefined;
}
let lengthy = number.length - 1;
let value;
for(let i = number.length -1; i >= 0; i--){
    let a = Number(number[i]);
    if(!a){
       return undefined;
    }
    if(i == lengthy){
        value = number[i];
    } else if(i == 0){
        if(number[i] > value){
            value = number[i];
        }
    }

}
return value;
}
//hey;
function middle(values) {
    if(!values ||  values.length < 3 || values.length%2 == 0 ){
        return [];
    }
    let a = values.length/2 - 1;
    let uno = a - .5;
    let dos = a + .5;
    let tres = a + 1.5;
    let array = [values[uno], values[dos], values[tres]];
    return array;
}

function increasing(numbers) {
    if(!numbers || numbers.length < 3){
        return false;
    }
        let isTru = false;
    for(let i = 0; i < numbers.length - 2; i++ ){

        let b = Number.isInteger(numbers[i]);
        if( b == false){
            return false;
        }
        let currNum = numbers[i];
        let oneUp = numbers[i + 1];
        let twoUp = numbers[i + 2];
        let c = Number.isInteger(oneUp);
        let d = Number.isInteger(twoUp);
        if(c == false || d == false){
            return false;
        }

        if(currNum < oneUp && oneUp < twoUp){

            isTru = true;
        }
    }
    if(isTru){
        return true;
    } else {
        return false;
    }

}

function everywhere(values, x) {
    if(!values || values.length < 1 || !x){
    return false;
    }
    for(let i = 0; i < values.length; i++){
        if(values[i] !== x){
            if(values[i - 1] == x || values[i + 1] == x){

            } else{
                return false;
            }

        }
    }
    return true;
}

function consecutive(numbers) {
    if(!numbers || numbers.length < 3){
        return false;
    }
    let isTru = false;
    for(let i = 0; i < numbers.length - 2; i++ ){
        let a = numbers[i];
        let b = numbers[i + 1];
        let c = numbers[i + 2];
        if(Number.isInteger(a) == false || Number.isInteger(b) == false || Number.isInteger(c) == false ){
            return false;
        }
        if(a % 2 == 0 && b % 2 == 0 && c % 2 == 0){
             isTru = true;
        } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1){
             isTru = true;
        }

    }
    return isTru;
}

function balance(numbers) {
    if(!numbers || numbers.length < 2){
        return false;
    }
    let array = numbers;
    let leftHand = [];
    let rightHand = [];
    let lengthy = numbers.length / 2;
    let rightHolder = 0;
    let leftHolder = 0;
    let isTru = false;
    let hitrate = 0;
    let side;
    while(!isTru){
        for(let i = 0; i < numbers.length; i++ ){
            if (Number.isInteger(numbers[i]) == false && !numbers[i]){
                return false;
            }
            if(i >= lengthy){
                rightHand[rightHolder] = array[i];
                rightHolder++;
            } else {
                leftHand[leftHolder] = array[i];
                leftHolder++;
            }
        }
        let right = 0;
        let left = 0;

        for(i = 0; i < rightHolder.length; i++){
            right =  right + rightHolder[i];
        }
        for(i = 0; i < leftHolder.length; i++){
            left =  left + leftHolder[i];
        }

        if(right == left){
            return true;
        } else if(right > left){
            if(lengthy > 0){
                lengthy--;
            }
            if(side == undefined){
                side = false;
            } else if(side == true){
                return false;
            }
        } else if(left > right){
            if(lengthy < numbers.length - 2 ){
                lengthy++;
            }
            if(side == undefined){
                side = true;
            } else if(side == false){
                return false;
            }
        }
    }
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
