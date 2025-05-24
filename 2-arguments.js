const argument = [0, "Best", "Best School"];

if (argument.length === "") {
  console.log("No argument");
} else if (argument.length >= 0 && argument.length <= 16) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}