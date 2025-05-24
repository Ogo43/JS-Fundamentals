let argNum1 = process.argv[2];
let argNum2 = process.argv[3];
let a = parseInt(argNum1);
let b = parseInt(argNum2);


function add (a,b) {
    if (isNaN(a) || isNaN(b)){
        console.log("NaN");
    }else {
        console.log(a+b);
    }   
}   

add(a,b);
