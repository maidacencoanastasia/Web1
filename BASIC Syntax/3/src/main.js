// let a = 12;
// let b = 32;
// let c = -12;
a = Math.floor(Math.random() * 100);
b = Math.floor(Math.random() * 100);
c = Math.floor(Math.random() * 100);
let message =
  (a > b) & (a > c)
    ? "a is the biggest"
    : (b > a) & (b > c)
    ? "a is the biggest"
    : "c is the biggest";

console.log("a=" + a + " b=" + b + " c=" + c);
console.log(message);
