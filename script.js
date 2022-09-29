const numberInput = document.getElementById('number-input');
const cardNumber = document.querySelector('.card-number');
const nameInput = document.getElementById('name-input');
const cardName = document.querySelector('.card-name');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('.submit-btn');
const everyInput = document.querySelectorAll('.form-input');
const cvcInput = document.getElementById('cvc-input');
const cardCvc = document.querySelector('.card-cvc');
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

const createCompletePopup = () => {
    return `<div class="complete-container flex-col center">
    <img src="./images/icon-complete.svg" alt="complete icon" class="complete-icon">
    <h1 class="complete-header">THANK YOU!</h1>
    <span class="complete-description">We've added your card details</span>
    <button class="submit-btn">Continue</button>
  </div>`;
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

nameInput.addEventListener('keyup', e => {
    
    cardName.textContent = e.target.value;
    if(cardName.textContent.length === 0){
        cardName.textContent = 'Jane Appleseed';
    }
})

monthInput.addEventListener('keyup', e => {
    
    cardMonth.textContent = e.target.value
    if(cardMonth.textContent.length === 0){
        cardMonth.textContent = '00';
    }
})

yearInput.addEventListener('keyup', e => {
 
    cardYear.textContent = e.target.value
    if(cardYear.textContent.length === 0){
        cardYear.textContent = '00';
    }
})

cvcInput.addEventListener('keyup', e => {
 
    cardCvc.textContent = e.target.value
    if(cardCvc.textContent.length === 0){
        cardCvc.textContent = '000';
    }
})

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    let element = createCompletePopup();
    formContainer.innerHTML = createCompletePopup();

})