let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function salariesSum(obj) {
  let worker,
    sum = 0;
  for (worker in salaries) {
    sum += salaries[worker];
  }
  return sum;
}
console.log(salariesSum(salaries));
