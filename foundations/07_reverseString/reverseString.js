const reverseString = function(str) {
let arr = str.split('');
let str1 = "";
for(let i = arr.length - 1; i >= 0; i--) {
    str1 += arr[i];
    
}
return str1;
};

// Do not edit below this line
module.exports = reverseString;
