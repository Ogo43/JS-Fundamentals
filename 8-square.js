let argSqr = process.argv[2];
let x = parseInt(argSqr);

if (isNaN(x)) {
    console.log("Missing size")
}else {
    for (let i = 0; i < x; i++) {
        console.log("X".repeat(x));
    }
}