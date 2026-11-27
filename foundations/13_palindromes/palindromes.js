const palindromes = function (str) {
const cleaned = str.replace(/[^a-zA-Z0-9]/g, '');
const str1 = cleaned.toLowerCase();
let str2 = str1.split("").reverse().join("");

if(str1 === str2) return true;
else return false;
};

// Do not edit below this line
module.exports = palindromes;
