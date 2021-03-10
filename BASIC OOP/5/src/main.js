class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	getFullName() {
		return this.name + '  ' + this.surname;
	}
}
class Student extends User {
  constructor(name, surname,year) {
    super(name, surname);
    this.year = year;
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
		return super.getFullName() + '!';
	}
  
  getCourse() {
    //return 2021 - this.year+" course";
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    if((year - this.year > 5)||(year - this.year < 1)){
      return ("invalid year")
    }else return year - this.year+" course";
  }
  
}
let vasya = new Student("Василий", "Иванович",2018);
console.log(vasya.getFullName());
console.log(vasya.getCourse());