
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
                    currentValue = parseFloat(`${currentValue}${clickedValue}`);
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
                if (currentValue != undefined) calcList.push(currentValue);
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
                        if (currentValue != undefined) currentValue = currentValue * -1;
                        currentValueSpan.innerHTML = currentValue
                    break;
                    case "dot":
                        currentValue = (`${currentValue}.`)
                        currentValueSpan.innerHTML = currentValue
                        
                    break;
                    default:
                    break;
                }
            })
            break;
        case "print":
            i.addEventListener('click', e => {
                operator = e.target.id;
                if (currentValue != undefined) calcList.push(currentValue);
                if (bracketFlag) calcList.push(")");
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
        case "reset":
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
        case "softreset":
            i.addEventListener('click', e => {
                currentValueSpan.innerHTML = 0;
                clickedValue = 0;
                currentValue = 0;
            })
            break;
        case "del":
            i.addEventListener('click', e => {
                if (currentValue.toString().length > 1) {
                    let splitVal = currentValue.toString().split('')
                    splitVal.pop();
                    currentValue = parseFloat(splitVal.join(''));
                } else {
                    currentValue = 0;
                }
                    currentValueSpan.innerHTML = currentValue;
            })
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