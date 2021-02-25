console.log("Simple console.log output");
let n = 10;
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (100 - 1)) + 1
}

console.log(arr)
// Самый паростой вывод

console.log("Simple for output");
for (let i = 0; i < n; i++) {
    console.log(arr[i])
}
console.log("Simple while output");
let counter = n;
while(counter>=0){
    --counter;
    console.log(arr[counter]); // Всегда будет один Undefind
}

console.log("Simple do-while output");
let kounter = 0;
do {
    console.log(arr[kounter]);
    kounter++;
}while (kounter < n)

console.log("for of output");
for (const element of arr) {
  console.log(element);
}

console.log("for in output");
for (let x in arr) {
    console.log(arr[x]);
}
console.log("forEach output");
arr.forEach(element => console.log(element));

console.log("map output");
var arr2 = arr.map(function(num) {
  return num;
});
console.log(arr2);

console.log("for await output");
(async function() {
  for await (let num of arr) {
    console.log(num);
  }
})();
