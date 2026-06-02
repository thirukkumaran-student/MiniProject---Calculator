const display = document.getElementById('digit-display');
function len(input){
    return input.length;
}
function appendToDisplay(input){
    display.textContent += input;
}

function clearDisplay(){
    display.textContent = '';
}

function deleteFromDisplay(){
    display_length = len(display.textContent);
    console.log(display_length);
    display.textContent = display.textContent.slice(0, display_length - 1);
}