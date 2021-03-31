
const username = document.querySelector('input[name="user-name"]');
username.focus();

/*
Job Role section. Listens for change in the selection of the Job Role 
dropdown menu. If 'Other' is the selected role, an input box is displayed
for user to type their job. If it is any other selection, the input box
is hidden and no role can be typed in that field.
*/

let jobRole = document.querySelector('#title');
let otherJobRole = document.querySelector('input.other-job-role');
otherJobRole.hidden=true;

jobRole.addEventListener('change', (e)=>{
    if (e.target.value=='other') {
        otherJobRole.hidden=false;
    } else {
        otherJobRole.hidden=true;
    }
    console.log(e.target.value);
});

/*
T-shirt Info section. Color selection is disabled until a theme is chosen.
When the theme is picked, colors can be selected, but only the colors available
with the matching data-theme. Listens for changes in the design selection choice
and adjusts the color selection accordingly.
*/

const design = document.querySelector('[name="user-design"]');
const divShirtColor = document.getElementById('color');
const jsPunShirt = document.querySelectorAll('#shirt-colors [data-theme="js puns"]');
const heartJsShirt = document.querySelectorAll('#shirt-colors [data-theme="heart js"]');

divShirtColor.disabled=true;

design.addEventListener('change', (e) =>{
    divShirtColor.disabled=false;
    if (e.target.value=='js puns') {
        for (let i=0, j=0; i<heartJsShirt.length, j<jsPunShirt.length; i++, j++){
            heartJsShirt[i].hidden=true;
            jsPunShirt[j].hidden=false;
        }
    } else if (e.target.value=='heart js') {
        for (let i=0, j=0; i<heartJsShirt.length, j<jsPunShirt.length; i++, j++){
            heartJsShirt[i].hidden=false;
            jsPunShirt[j].hidden=true;
        }
    }
});

/*
Register for activities. As the checkboxes are selected and deselected, the event
price adds and subtracts, respectively, from the event total.
*/

let total = document.querySelector('p#activities-cost');
const eventRegister = document.querySelector('div#activities-box');
let eventSum = 0; 

eventRegister.addEventListener('change', (e)=> {
    if(e.target.type=="checkbox") {
        let dataCost = e.target.getAttribute('data-cost');
        //let eventDate = e.target.getAttribute('data-day-and-time');
        if(e.target.checked) {
            eventSum += +dataCost;
        } else {
            eventSum -= +dataCost;
        }
        total.textContent = `Total: $${eventSum}`
    }
});

const checkboxChecks = document.querySelectorAll("input[type='checkbox']");
for (let i=0; i<checkboxChecks.length; i++) {
    checkboxChecks[i].addEventListener('focus',()=> {
        checkboxChecks[i].parentNode.classList.add('focus');
    });
    checkboxChecks[i].addEventListener('blur',()=> {
        checkboxChecks[i].parentNode.classList.remove('focus');
    });
};

/*
Payment info section.
*/
const paymentInfo = document.querySelector('[name="user-payment"]');

const creditCardSelected = document.querySelector('#payment option[value="credit-card"]')
const creditCardInfo = document.querySelector('div#credit-card');
creditCardSelected.selected=true;

const paypalSelected = document.querySelector('#payment option[value="paypal"]')
const paypalInfo = document.querySelector('div#paypal');
paypalInfo.hidden=true;

const bitcoinSelected = document.querySelector('#payment option[value="bitcoin"]')
const bitcoinInfo = document.querySelector('div#bitcoin');
bitcoinInfo.hidden=true;

paymentInfo.addEventListener('change', (e)=> {
    if (e.target.value == "paypal") {
        creditCardInfo.hidden=true;
        bitcoinInfo.hidden=true;
        paypalInfo.hidden=false;
    } else if (e.target.value == 'bitcoin') {
        creditCardInfo.hidden=true;
        bitcoinInfo.hidden=false;
        paypalInfo.hidden=true;
    } else {
        creditCardInfo.hidden=false;
        bitcoinInfo.hidden=true;
        paypalInfo.hidden=true;
    }
});

/*
Validation field.
*/

// Attempt at making a function that cleans up the validation eventlistener.
// function validationTest(target) {
//     let valueTest = 
//     if (valueTest) {
//         alert(`${target} passed`);
//         target.nextElementSibling.classList.add('hint');
//     } else if (target.value == ''){
//         e.preventDefault();
//         target.classList.add('error','error-border');
//         target.nextElementSibling.classList.remove('hint');
//         target.nextElementSibling.textContent = `${target.nextElementSibling.textContent}`
//     } else {
//         e.preventDefault();
//         target.nextElementSibling.textContent = `Input must be formatted correctly.`
//         target.nextElementSibling.classList.remove('hint');
//         target.classList.add('error','error-border');
//     }
// }

const form = document.querySelector('div[class="container"]').firstElementChild;

form.addEventListener('submit', (e) => {
//Username Validation

    let usernameValue = username.value;
    let usernameTest = /[a-z\-']+/i.test(usernameValue);

    if (usernameTest){
        username.parentNode.classList.remove('error', 'error-border', 'not-valid');
        username.parentNode.classList.add('valid');
        username.nextElementSibling.classList.add('hint');
    } else if (usernameValue == '') {
        e.preventDefault();
        username.parentNode.classList.add('error', 'error-border', 'not-valid');
        username.nextElementSibling.classList.remove('hint');
        username.nextElementSibling.textContent="Name field cannot be blank";
        
    } else {
        e.preventDefault();        
        username.nextElementSibling.textContent="Input must be formatted correctly";
        username.parentNode.classList.add('error', 'error-border', 'not-valid');
        username.nextElementSibling.classList.remove('hint');
    };

//Email Validation
    const email = document.querySelector('[name="user-email"]');    
    let emailValue =email.value;
    let emailTest = /[^@]+@[a-z]+\.com/i.test(emailValue);

    if (emailTest){
        email.parentNode.classList.remove('error', 'error-border', 'not-valid');
        email.parentNode.classList.add('valid');
        email.nextElementSibling.classList.add('hint');
    } else if (emailValue == '') {
        e.preventDefault();
        email.parentNode.classList.add('error', 'error-border', 'not-valid');
        email.nextElementSibling.classList.remove('hint');
        email.nextElementSibling.textContent="Email field cannot be blank";
        
    } else {
        e.preventDefault();        
        email.nextElementSibling.textContent="Input must be formatted correctly";
        email.parentNode.classList.add('error', 'error-border', 'not-valid');
        email.nextElementSibling.classList.remove('hint');
    };
//Registration Validation

    let checkboxItems = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkboxItems.length == 0) {
        e.preventDefault();
        document.querySelector('div#activities-box').parentNode.classList.add('not-valid');
        document.querySelector('#activities-hint').classList.remove('hint');
    } else {
        document.querySelector('div#activities-box').parentNode.classList.remove('not-valid');
        document.querySelector('div#activities-box').parentNode.classList.add('valid');
        document.querySelector('#activities-hint').classList.add('hint'); 
    }


//Creditcard Validation
    const cardNum = document.querySelector('[name="user-cc-num"]');
    const cardZip = document.querySelector('[name="user-zip"]');
    const cardCvv = document.querySelector('[name="user-cvv"]');

    let creditValue =cardNum.value;
    let creditTest = /^\d{13,16}$/.test(creditValue);
    let zipValue = cardZip.value;
    let zipTest = /^\d{5}$/.test(zipValue);
    let cvvValue = cardCvv.value;
    let cvvTest = /^\d{3}$/.test(cvvValue);

    if (creditCardSelected.selected) {
    //CC Number Test    
        if (creditTest){
            cardNum.parentNode.classList.remove('error', 'error-border', 'not-valid');
            cardNum.parentNode.classList.add('valid');
            cardNum.nextElementSibling.classList.add('hint');
        } else if (creditValue == '') {
            e.preventDefault();
            cardNum.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardNum.nextElementSibling.classList.remove('hint');
            cardNum.nextElementSibling.textContent="Creditcard field cannot be blank";
            
        } else {
            e.preventDefault();        
            cardNum.nextElementSibling.textContent="Input must be between 13 and 16 digits";
            cardNum.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardNum.nextElementSibling.classList.remove('hint');
    };
    //zipcode test
        if(zipTest) {
            cardZip.parentNode.classList.remove('error', 'error-border', 'not-valid');
            cardZip.parentNode.classList.add('valid');
            cardZip.nextElementSibling.classList.add('hint');
        } else if (zipValue == '') {
            e.preventDefault();
            cardZip.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardZip.nextElementSibling.classList.remove('hint');
            cardZip.nextElementSibling.textContent="Zip cannot be blank";
            
        } else {
            e.preventDefault();        
            cardZip.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardZip.nextElementSibling.classList.remove('hint');
            cardZip.nextElementSibling.textContent="Input must be 5 digits";
    };
    //CVV Test
        if(cvvTest) {
            cardCvv.parentNode.classList.remove('error', 'error-border', 'not-valid');
            cardCvv.parentNode.classList.add('valid');
            cardCvv.nextElementSibling.classList.add('hint');
        } else if (cvvValue == '') {
            e.preventDefault();
            cardCvv.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardCvv.nextElementSibling.classList.remove('hint');
            cardCvv.nextElementSibling.textContent="CVV cannot be blank";
            
        } else {
            e.preventDefault();        
            cardCvv.nextElementSibling.textContent="Input must be 3 digits";
            cardCvv.parentNode.classList.add('error', 'error-border', 'not-valid');
            cardCvv.nextElementSibling.classList.remove('hint');
        }
    }
});
