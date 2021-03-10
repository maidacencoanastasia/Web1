class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  setName(name) {
    this.name = name;
  }
  setSurname(surname_ch) {
    this.surname = surname_ch;
  }
}
let worker = new Person("Ivan", "Ivanov");
console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.setSurname("Petrov")); //выведет undefined
console.log(worker.getSurname()); //выведет 'Петров'
