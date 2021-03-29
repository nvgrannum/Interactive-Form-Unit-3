
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
        let eventDate = e.target.getAttribute('data-day-and-time');
        if(e.target.checked) {
            eventSum += +dataCost;
        } else {
            eventSum -= +dataCost;
        }
        total.textContent = `Total: $${eventSum}`
    }
});

/*
Payment info section.
*/
const paymentInfo = document.querySelector('[name="user-payment"]');

const creditCardSelected = document.querySelector('#payment option[value="credit-card"]')
const creditCardInfo = document.querySelector('div#credit-card');

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

