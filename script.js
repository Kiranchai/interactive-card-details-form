const numberInput = document.getElementById('number-input');
const cardNumber = document.querySelector('.card-number');
const errorColor = 'hsl(0, 100%, 66%)';

function containsLetters(string){
    return /[a-zA-Z]/.test(string);
}

function addSpace(str){
    return str + ' ';
}


numberInput.addEventListener('keyup', e => {
    e.preventDefault();
    let input = e.target.value;

    cardNumber.textContent = input;

    if(e.key === 'Backspace'){
        if (cardNumber.textContent.length === 0){
            cardNumber.textContent = '0000 0000 0000 0000';
        }
    }

    if(e.key !== 'Backspace'){
        if (cardNumber.textContent.replace(/ /g, '').length % 4 === 0){
            numberInput.value = addSpace(input);
        }
    }
    
})

numberInput.addEventListener('focusout', e => {
    
    if (containsLetters(e.target.value)){
        numberInput.style.borderColor = errorColor;
    } 
});
