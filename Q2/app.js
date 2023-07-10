const input = document.querySelector('.input')
const output = document.querySelector('.out-paragraph')

const submit = () => {
    const text = input.value;
    output.innerText = text;
    input.value = ''
}

function clearOut() {
    console.log('hi');
    output.innerText = '';
}