//let number = 15;
let number = Math.floor(Math.random() * 100);

const dividers = (number) => {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log(i);
    }
  }
};
console.log("My number is : "+number);
dividers(number);
