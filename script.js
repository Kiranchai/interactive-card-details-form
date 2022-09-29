const numberInput = document.getElementById('number-input');
const cardNumber = document.querySelector('.card-number');
const everyInput = document.querySelectorAll('.form-input');
const lightGrayishVioletColor = 'hsl(270, 3%, 87%)';
const errorColor = 'hsl(0, 100%, 66%)';

function containsLetters(string){
    return /[a-zA-Z]/.test(string);
}

function addSpace(str){
    return str + ' ';
}

function leftBlank(input){
    return input.length === 0 ? true : false;
}


const createError = (body) =>{
    const span = document.createElement('span');
    span.innerHTML = `${body.errorMessage}`;
    span.classList.add('error');
    return span;
}

const isLastItemSpan = (input) => {
    return input.parentElement.lastChild.nodeName === 'SPAN' ? true : false;
}

everyInput.forEach(input => {
    input.addEventListener('focusout', e => {

        

        if(!isLastItemSpan(input) && leftBlank(e.target.value)){
            input.style.borderColor = errorColor;
            input.parentElement.appendChild(createError({errorMessage:`Can't be blank`}));
            
        }
         else{
            
            if(isLastItemSpan(input) && !leftBlank(e.target.value) ){

                input.parentElement.removeChild(input.parentElement.lastChild);
                input.style.borderColor = lightGrayishVioletColor;
                input.style.borderWidth = '1px';
            }

            
        }

        if(input.id === 'number-input'){
            if (containsLetters(e.target.value) && !leftBlank(e.target.value)){
                numberInput.style.borderColor = errorColor;
                numberInput.style.borderWidth = '1px';
                input.parentElement.appendChild(createError({errorMessage:`Wrong format, numbers only`}));
            } 
            else if(!containsLetters(e.target.value) && isLastItemSpan(input) && !leftBlank(e.target.value)){
                numberInput.style.borderColor = lightGrayishVioletColor;
                numberInput.style.borderWidth = '1px';
                input.parentElement.removeChild(input.parentElement.lastChild);
            }
        }
    })
})


numberInput.addEventListener('keyup', e => {
    e.preventDefault();
    let input = e.target.value;

    cardNumber.textContent = input;

    if(e.key == 8 || e.key == 46 || e.key === 'Backspace'){
        if (cardNumber.textContent.length === 0){
            cardNumber.textContent = '0000 0000 0000 0000';
        }
    }

    if(e.key !== 'Backspace' && e.key !== 'Delete'){
        if (cardNumber.textContent.replace(/ /g, '').length % 4 === 0){
            numberInput.value = addSpace(input);
        }
    }
    
})
