const removeFromArray = function() {
    let arr1 = [...arguments];
    let arr2 = [];
    arr1.shift();

   for(let i = 0; i < arguments[0].length; i++) {
    if(!arr1.includes(arguments[0][i])) arr2.push(arguments[0][i]);
   }

   return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
