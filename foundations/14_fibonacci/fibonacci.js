const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if(n == 0) return 0;
    if(n <= 2) return 1;
let fib = [];
fib[0] = 1;
fib[1] = 1;

for(let i = 2; i < n;i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
}

return fib[n - 1];

};

// Do not edit below this line
module.exports = fibonacci;
