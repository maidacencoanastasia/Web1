class Validator {
  isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  isDomain(domain) {
    // let re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    // return domain.match(re);
    return (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain))? true : false
  }
  isDate(date) {
    // let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // if (!(date_regex.test(date))) {
    // return false;
    // }
    let temp = date.split('/');
    let d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);
     return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]));
  }

  isPhone(phone) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  }
}
let validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate('12/05/2020'));
console.log(validator.isPhone("+37378658701"));
