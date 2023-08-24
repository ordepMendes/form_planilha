const form: HTMLFormElement = document.querySelector('form')!;
const inputName: HTMLInputElement = document.querySelector('input[name=name]')!;
const inputEmail: HTMLInputElement = document.querySelector('input[name=email]')!;
const inputAge: HTMLInputElement = document.querySelector('input[name=age]')!;
const button: HTMLButtonElement = document.querySelector('button')!;

const addLoading = () => {
    button!.innerHTML = "<img src='./img/loading.png' class='loading'>";
}

const removeLoading = () => {
    button!.innerHTML = "Enviar";
}


function handleSubmit(event){
    event.preventDefault();
    addLoading();
    const name:string = inputName.value;
    const email: string = inputEmail.value;
    const age: number = parseFloat(inputAge.value);

    fetch('https://api.sheetmonkey.io/form/pxWGhrZe1wiuBxyrHShFBs', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age}),
    }).then(() => {
        removeLoading();
    });
}

form!.addEventListener('submit', handleSubmit);