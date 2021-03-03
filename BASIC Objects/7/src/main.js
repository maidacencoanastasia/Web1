let person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: `112`,
      email: "email@domain.com",
    },
    address: `Moldova`,
    get nume(){
        return ("hi "+this.name)
    },
    get varsta(){
        return ("you age is "+this.age)
    },
    get salariu(){
        return ("you salary is "+this.salary)
    },
    get contacte(){
        return ("you contacts are "+this.contacts.phone+" and "+this.contacts.email)
    }
  };
  console.log(person.nume)
  console.log(person.varsta)
  console.log(person.salariu)
  console.log(person.contacte)