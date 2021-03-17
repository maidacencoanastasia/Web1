const input = document.getElementById('input');

input.addEventListener('blur', () => {
    if (Number.isInteger(+input.value) == true) {
        input.value = '';
    }
});