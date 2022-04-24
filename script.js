let inputFields = document.querySelectorAll('.input-value input')
let rangeFields = document.querySelectorAll('.range-value input')
let progress = document.querySelector('.progress')
let priceGap = 1000
function rangeInputVal(e) {
    e.preventDefault();
    let minValue = +(rangeFields[0].value);  
    let maxValue = +(rangeFields[1].value);

    if(maxValue - minValue < priceGap) {
        if(e.target.getAttribute('id') == 'minRange') {
            rangeFields[0].value = maxValue - priceGap
        }else {
            rangeFields[1].value = minValue + priceGap
        }
    }else {
        inputFields[0].value = minValue
        inputFields[1].value = maxValue
        progress.style.left = `${minValue / rangeFields[0].max * 100}%`
        progress.style.right = `${100 - (maxValue / rangeFields[1].max * 100)}%`
    }

}

rangeFields.forEach(inp => inp.addEventListener('input', rangeInputVal))

function inputNumber(e) {
    e.preventDefault();
    let minValue = +(inputFields[0].value);  
    let maxValue = +(inputFields[1].value);

    if(maxValue - minValue >= priceGap  && maxValue <= 10000) {
        if(e.target.getAttribute('id') == 'min') {
            rangeFields[0].value = minValue
            progress.style.left = `${minValue / rangeFields[0].max * 100}%`
        }else {
            rangeFields[1].value = maxValue
            progress.style.right = `${100 - (maxValue / rangeFields[1].max * 100)}%`
        }
    };
}

inputFields.forEach(inp => inp.addEventListener('input', inputNumber));