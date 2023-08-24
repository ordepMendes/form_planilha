var form = document.querySelector('form');
var inputName = document.querySelector('input[name=name]');
var inputEmail = document.querySelector('input[name=email]');
var inputAge = document.querySelector('input[name=age]');
var button = document.querySelector('button');
var addLoading = function () {
    button.innerHTML = "<img src='./img/loading.png' class='loading'>";
};
var removeLoading = function () {
    button.innerHTML = "Enviar";
};
function handleSubmit(event) {
    event.preventDefault();
    addLoading();
    var name = inputName.value;
    var email = inputEmail.value;
    var age = parseFloat(inputAge.value);
    fetch('https://api.sheetmonkey.io/form/pxWGhrZe1wiuBxyrHShFBs', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, age: age }),
    }).then(function () {
        removeLoading();
    });
}
form.addEventListener('submit', handleSubmit);
