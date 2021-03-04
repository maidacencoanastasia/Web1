let age = Math.floor(Math.random() * 100);
console.log(age);
if (age < 14 || age > 90) console.log("значение переменной age НЕ находится в диапазоне 14 и 90 включительно.");
if (!(age >= 14 && age <= 90)) console.log("значение переменной age НЕ находится в диапазоне 14 и 90 включительно.");