
let result = 0;
let operator;
let isOperating = false;
let currentValue;
let displayValue;

const display = document.querySelector('.display')
const currentValueSpan = document.querySelector('.currentValue')
let btns = document.querySelectorAll('button');

console.dir('script loaded')

for (i of btns) {
    switch (i.className) {
        case "number":
            i.addEventListener('click', e => {
                let clickedValue = parseInt(e.target.id)

                if (displayValue === undefined) {
                    currentValue = clickedValue;
                    displayValue = currentValue;
                    result = clickedValue;
                }
                else if (isOperating) {
                    currentValue = clickedValue;
                    displayValue = `${displayValue} ${clickedValue}`
                    result = operate(result , clickedValue, operator)
                } else {
                   currentValue = parseInt(`${currentValue}${clickedValue}`);
                }
                currentValueSpan.innerHTML = currentValue
                display.innerHTML = displayValue
            })
            break;
        case "operator":
            i.addEventListener('click', e => {
                (isOperating) ? isOperating = false : isOperating = true;
                operator = e.target.id;
                displayValue = `${displayValue} ${operator}`
                display.innerHTML = displayValue;
            })
            break;
        case "symbol":
            i.addEventListener('click', e=> {
                display.innerHTML = "a symbol was clicked - implemetation is missing";
            })
            break;
        case "print":
            i.addEventListener('click', e => {
                display.innerHTML = `${displayValue} =`;
                currentValueSpan.innerHTML = result;

            }) 
            break;
        case "erase":
            i.addEventListener('click', e => {
                display.innerHTML = 'Let me calculate this for you &#129299'
                currentValueSpan.innerHTML = '';
                currentValue = undefined;
                clickedValue = undefined;
                displayValue = undefined;
                operator = undefined;
                isOperating = false;
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