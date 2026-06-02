const display = document.getElementById('digit-display');
function len(input){
    return input.length;
}
function appendToDisplay(input){
    if(display.textContent == '0' || display.textContent == 'Error'){
        display.textContent = ''
    }
    display.textContent += input;
}

function clearDisplay(){
    display.textContent = '';
}

function deleteFromDisplay(){
    let display_length = len(display.textContent);
    display.textContent = display.textContent.slice(0, display_length - 1);
}

function calculate(){
    let disp = display.textContent;
    if(isCorrectFormat(disp))
    {
        disp = disp.replaceAll("^", "**")
        disp = disp.replaceAll("X", "*")
        disp = disp.replaceAll("%", "/100")
        display.textContent = eval(disp)
    }
}

function isCorrectFormat(exp){
    if(isNaN(Number(exp[exp.length - 1]))){
        if(exp[len(exp) - 1] == '%'){return true}
        else{
            display.textContent = "Error"
            // display.textContent = ''
            return false
        }
    }
    if(isNaN(Number(exp[0]))){
        if(exp[0] == '-'){
            return true
        }
        else{
            display.textContent = "Error"
            // display.textContent = ''
            return false
        }
    }
    return true;

}