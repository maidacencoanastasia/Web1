 //////////////////////////////////////// 1 //////////////////////////////////////
 let result = prompt("Introduceti un numar")

 if (result > 0) {
     alert(1);
 } else if (result < 0) {
     alert(-1);
 } else if (result == 0) {
     alert(0);
 } else if (isNaN(result)) {
     alert("Error");
 }
 ////////////////////////////////////////// 2 ////////////////////////////////////
 let age = prompt("Introduceti age")

 if (!(age >= 14 && age <= 90)) {
     alert(age + ", age is not in [14;90] first method");
 }
 if (age < 14 || age > 90) {
     alert(age + ", age is not in [14;90] second method")
///////////////////////////////////////// 3 ///////////////////////////////////////
     const correct_username = "admin"
     const correct_password = "123"

     const checkPassword = () => {
         let username = document.getElementById("username");
         let password = document.getElementById("password");
         if (username.value == "" || password.value == "") {
             console.log("Ошибка Валидации");
         } else if (username.value == password.value) {
             console.log("Привет");
         } else if (username.value != correct_username) {
             console.log("Неправильный username");
         } else if (password.value != correct_password) {
             console.log("Неправильный пароль");
         } else if (password.value == correct_password && password.value == correct_password) {
             console.log("Все ок");
         } else if (username.value != correct_username && password.value != correct_password) {
             console.log("Все не правильно");
         }
     }
////////////////////////////////////////  4  ///////////////////////////////////////
     const checkiseven = () => {
         let start_interval = parseInt(document.getElementById("start_interval").value);
         let end_interval = parseInt(document.getElementById("end_interval").value);
         for (let i = start_interval; i <= end_interval; i++) {
             if (i % 2 == 0) {
                 console.log(i)
             }
         }
     }
