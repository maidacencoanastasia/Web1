console.log("Simple console.log output");
let n = 10;
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (100 - 1)) + 1;
}

console.log(arr);
// Самый паростой вывод

console.log("Simple for output");
for (let i = 0; i < n; i++) {
  console.log(arr[i]); //Стандартная функция к которой привыкли
}
console.log("Simple while output");
let counter = n;
while (counter >= 0) {
  --counter;
  console.log(arr[counter]); // Всегда будет один Undefind, не очень удобно
}

console.log("Simple do-while output");
let kounter = 0;
do {
  console.log(arr[kounter]); // Не самый оптимальный вариант
  kounter++;
} while (kounter < n);

console.log("for of output");
for (const element of arr) {
  //Модифицированный for довольно удобный
  console.log(element);
}

console.log("for in output");
for (let x in arr) {
  console.log(arr[x]); //Модифицированный for довольно удобный
}
console.log("forEach output");
arr.forEach((element) => console.log(element));

console.log("map output");
var arr2 = arr.map(function (num) {
  return num;
});
console.log(arr2);

console.log("for await output");
(async function () {
  for await (let num of arr) {
    console.log(num);
  }
})();
