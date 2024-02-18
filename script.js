const resultDisplay = document.getElementById("resultDisplay");
const buttons = document.querySelectorAll(".btn");
let currentExpression = "";

buttons.forEach(button=>{
    button.addEventListener("click", function(){
        const value = this.value
        if(value === "="){
        calculate();
        }else if(value === "/" || value === "*"||value === "+"||value === "-"||value === "%"){
            currentExpression += ' ' + value + ' ';
            resultDisplay.value = ''
        }else if(value==='C'){
            clearOne()
        }else if(value === 'AC'){
            clearAll()
        } else if (value === '%') {
            if (!isNaN(Number(currentExpression[currentExpression.length - 1])) && currentExpression[currentExpression.length - 1] !== '%') {
             
                currentExpression += '/100*';
                resultDisplay.value = '';
            } else {
                currentExpression += value;
                resultDisplay.value += value;
            }
        }
        else{
            currentExpression += value;
            resultDisplay.value += value
        }
        
    })
})

function clearOne(){
    currentExpression = currentExpression.slice(0, -1);
    resultDisplay.value = currentExpression.trim().split(/\s+/).join('');
}
function clearAll(){
    currentExpression = '';
    resultDisplay.value = ''
}

function calculate(){
    const result = eval(currentExpression);
    resultDisplay.value = result;
    currentExpression = result.toString();
}
