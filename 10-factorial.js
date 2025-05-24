let argFactorial = process.argv[2];
let num = parseInt(argFactorial);

function factorial (n) {   
    if (isNaN(n)) {
        return 1;
    }else if (n === 0 || n === 1) {
        return 1;
    }else{
        return n * factorial(n - 1);
    };
}

console.log(factorial(num));  
// NB-num is the same as n, you can name the function parameter anything but it still represent the variable num.
// Recursion is when a function is called inside its own body just like the factorial().
// Return is used to save result for later use why console.log() prints output.