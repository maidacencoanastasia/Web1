<<<<<<< HEAD
//let a = 5;
//let b = 9;
a = Math.floor(Math.random() * 10);
b = Math.floor(Math.random() * 100);

const calculateSumofEven = (start, end)=>{
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0)
        sum += i;
    }
    console.log(sum);
}
console.log("["+a+";"+b+"]");
calculateSumofEven(a,b);
=======
//let a = 5;
//let b = 9;
a = Math.floor(Math.random() * 10);
b = Math.floor(Math.random() * 100);

const calculateSumofEven = (start, end)=>{
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0)
        sum += i;
    }
    console.log(sum);
}
console.log("["+a+";"+b+"]");
calculateSumofEven(a,b);
>>>>>>> 845cbaa193b88f53b336e4f40d0061b946513912
