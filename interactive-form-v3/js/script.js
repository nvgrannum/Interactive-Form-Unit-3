
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
const divShirtColor = document.querySelector('div[id="shirt-colors"]');
const jsPunShirt = document.querySelectorAll('#shirt-colors option[data-theme="js puns"]');
const heartJsShirt = document.querySelectorAll('#shirt-colors option[data-theme="heart js"]');

divShirtColor.hidden=true;

design.addEventListener('change', (e) =>{
    if (e.target.value=='js puns') {
        divShirtColor.hidden=false;
        for (let i=0, j=0; i<heartJsShirt.length, j<jsPunShirt.length; i++, j++){
            heartJsShirt[i].hidden=true;
            jsPunShirt[j].hidden=false;
        }
    } else if (e.target.value=='heart js') {
        divShirtColor.hidden=false;
        for (let i=0, j=0; i<heartJsShirt.length, j<jsPunShirt.length; i++, j++){
            heartJsShirt[i].hidden=false;
            jsPunShirt[j].hidden=true;
        }
    }
});

/*
Register for activities.
*/

let total = document.querySelector('p#activities-cost');
console.log(total);
const eventRegister = document.querySelector('div#activities-box');
console.log(eventRegister);
let eventSum = 0;


eventRegister.addEventListener('change', (e)=> {
    if(e.target.type=="checkbox") {
        let dataCost = e.target.querySelector('data-cost').value;
        if(e.target.checked) {
            console.log(dataCost);
            eventSum += dataCost;
        } else if (e.target.checked = false) {
            eventSum = eventSum - dataCost;
        }
        total.textContent = `Total:$${eventSum}`
        console.log(total);
    }
});

