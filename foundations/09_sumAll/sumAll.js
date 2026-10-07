const sumAll = function() {
   if(arguments[0] < 0 || !Number.isInteger(arguments[0])) return "ERROR";
else if(arguments[1] < 0 || !Number.isInteger(arguments[1])) return "ERROR";
else {
    let min;
    let max;
    if(arguments[0] < arguments[1]) {
      max = arguments[1];
      min = arguments[0];
    } else if(arguments[0] > arguments[1]) {
        max = arguments[0];
      min = arguments[1];
    } else {
        return arguments[0];
    }

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
