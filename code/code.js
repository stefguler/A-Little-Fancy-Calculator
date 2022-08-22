
let result = 0;
let operator;
let currentValue;
let displayValue;
let calcList = [];
let bracketFlag = false;

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
                if (operator == 'brackets') {
                    if (!bracketFlag) {
                        operator = "("
                        bracketFlag = true;
                    }
                    else {
                        operator = ")";
                        bracketFlag = false;
                    }
                }
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
                operator = e.target.id;
                calcList.push(currentValue);
                let value = evaluateResult();
                calcList.push(operator)
                calcList.push(value)
                currentValueSpan.innerHTML = value;
                adjustDisplayString()
                calcList = [];
                currentValue = value;
                bracketFlag = false;        
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

adjustDisplayString = () => {
    displayValue = '';
    for (i = 0; i < calcList.length;i++) {
        displayValue = `${displayValue} ${calcList[i]}`
    }
    display.innerHTML = displayValue;
}

evaluateResult = () => {
    let result = '';
    /*calcList.push(currentValue);*/
    for (i = 0; i < calcList.length;i++) {
        result = result + calcList[i]
    }
    console.log(result)
    return eval(result)
}