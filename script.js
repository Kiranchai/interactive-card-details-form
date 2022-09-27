const numberInput = document.getElementById('number-input');
const cardNumber = document.querySelector('.card-number');


numberInput.addEventListener('keyup', e => {
    cardNumber.textContent = e.target.value;
})

numberInput.addEventListener('focusout', e => {
    const number = [...e.target.value];

});
