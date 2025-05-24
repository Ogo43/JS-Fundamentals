let args1 = process.argv[2];
let args2 = process.argv[3];

if (args1 === undefined) {
    console.log("undefined is undefined");
}else if (args1 <= 2) {
    console.log(args1 + " is undefined");
}else {
    console.log(args1 + " is " + args2);
};