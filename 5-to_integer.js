let args = process.argv[2];
let num = parseInt(args);

if (isNaN(num)){
    console.log("Not a number");
}else {
    console.log("My number: " + num);
}