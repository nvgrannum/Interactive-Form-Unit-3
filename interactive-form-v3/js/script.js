
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
T-shirt Info section.
*/

const design = document.querySelector('[name="user-design"]');
console.log(design);
const divShirtColor = document.querySelector('div[id="shirt-colors"]');
console.log(divShirtColor);
divShirtColor.hidden=true;
const jsPunShirt = document.querySelectorAll('#shirt-colors option[data-theme="js puns"]');
console.log(jsPunShirt);
const heartJsShirt = document.querySelectorAll('#shirt-colors option[data-theme="heart js"]');
console.log(heartJsShirt);

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