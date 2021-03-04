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
