
let result = 0;
let operator;
let currentValue;
let displayValue;
let calcList = [];

const display = document.querySelector('.display')
const currentValueSpan = document.querySelector('.currentValue')
let btns = document.querySelectorAll('button');

console.dir('script loaded')

for (i of btns) {
    switch (i.className) {
        case "number":
            i.addEventListener('click', e => {
                let clickedValue = parseInt(e.target.id)
                
                if (currentValue === undefined) {
                    currentValue = clickedValue 
                } else { 
                currentValue = parseInt(`${currentValue}${clickedValue}`);
                }

                currentValueSpan.innerHTML = currentValue
            })
            break;
        case "operator":
            i.addEventListener('click', e => {
                operator = e.target.id;
                calcList.push(currentValue);
                currentValue = undefined;
                calcList.push(operator);

                adjustDisplayString()
                currentValueSpan.innerHTML = operator;
            })
            break;
        case "symbol":
            i.addEventListener('click', e=> {                              
                switch (e.target.id) {
                    case "brackets":
                        display.innerHTML = '()-button clicked - implementation missing'
                        break;
                        case "plus-minus":
                            currentValue = currentValue * -1;
                            currentValueSpan.innerHTML = currentValue
                            break;
                            case "dot":
                                currentValue = (`${currentValue}.`)
                                currentValueSpan.innerHTML = 'Float conversion missing'
                                break;
                    default:
                        break;
                }
            })
            break;
        case "print":
            i.addEventListener('click', e => {
                display.innerHTML = "result was clicked - implemetation is missing";
            
            }) 
            break;
        case "erase":
            i.addEventListener('click', e => {
                display.innerHTML = 'Let me calculate this for you &#129299'
                currentValueSpan.innerHTML = '';
                calcList = [];
                currentValue = undefined;
                clickedValue = undefined;
                displayValue = undefined;
                operator = undefined;
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

adjustDisplayString = () => {
    displayValue = '';
    for (i = 0; i < calcList.length;i++) {
        displayValue = `${displayValue} ${calcList[i]}`
    }
    display.innerHTML = displayValue;

}