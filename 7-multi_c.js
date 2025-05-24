let argTimes = process.argv[2];
let x = parseInt(argTimes);

if (isNaN(x)) {
        console.log("Missing number of occurrences");
    }else{
        for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}