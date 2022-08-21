
let result;
let val1;
let val2;
let operator;
let isOperating = false;
const display = document.querySelector('.display')
let displayValue;

let btns = document.querySelectorAll('button');

console.dir('script loaded')
for (i of btns) {
    console.log(i.className)
    switch (i.className) {
        case "number":
            i.addEventListener('click', e => {
                clickedValue = parseInt(e.target.id);
                if (isOperating) {
                    displayValue = `${displayValue}` 
                    result = operate(clickedValue, result, operator)
                } else {
                    displayValue = `${displayValue}${clickedValue}`
                }
                display.innerHTML = displayValue
            })
            break;
        case "operator":
            i.addEventListener('click', e => {
                (isOperating) ? isOperating = false : isOperating = true;
                operator = e.target.id;
                displayValue = `${displayValue} ${operator}`
                display.innerHTML = displayValue
            })
            break;
        case "symbol":
            i.addEventListener('click', e=> {
                display.innerHTML = "a symbol was clicked - implemetation is missing";
            })
            break;
        case "print":
            i.addEventListener('click', e => {
                display.innerHTML = result;
                displayValue = result;
            }) 
            break;
        case "erase":
            i.addEventListener('click', e => {
                display.innerHTML = 'Let me calculate this for you &#129299'
            })
            break;
        default:
            break;
    }
}

operate = (val1, val2, operator) => {
    switch (operator) {
        case "%":
            return val1 % val2;
            break;
        case "÷":
            return val2 == 0 ? "err: 0 division" : val1 / val2;
            break;
        case "x":
            return val1 * val2;
        case "-":
            return val1 - val2;
        case "+":
            return val1 + val2;
        default:
            break;
    }
}