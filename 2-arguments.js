const argument = [0, "Best", "Best School"];

if (argument.length <= 0) {
  console.log("No argument");
} else if (argument.length >= 0 && argument.length <= 4) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}