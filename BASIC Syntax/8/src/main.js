<<<<<<< HEAD
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
=======
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
>>>>>>> 845cbaa193b88f53b336e4f40d0061b946513912
}