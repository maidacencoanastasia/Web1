class Worker {
  constructor(name, surname) {
    this.rate = 0;
    this.days = 0;
    this.name = name;
    this.surname = surname;
  }
  getSalary() {
    return this.rate * this.days;
  }
  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  getRate() {
    return this.rate;
  }
  getDays() {
    return this.days;
  }
}

let vasya = new Worker("Василий", "Иванович");
vasya.rate = 10;
vasya.days = 31;
console.log(vasya.name);
console.log(vasya.surname);
console.log(vasya.rate);
console.log(vasya.days);
console.log(vasya.getSalary());

let alexandr = new Worker("Александр", "Иванович");
alexandr.rate = 15;
alexandr.days = 31;
console.log(alexandr.name);
console.log(alexandr.surname);
console.log(alexandr.rate);
console.log(alexandr.days);
console.log(alexandr.getSalary());

console.log(alexandr.getSalary() + vasya.getSalary() + " Suma of salaries");
