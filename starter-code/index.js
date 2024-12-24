const imperialEl = document.getElementById('imperial');
const metricEl = document.querySelector('.metric');
const imperialOptionEl = document.getElementById('imperial-option');
const metricOptionEl = document.getElementById('metric-option');

// The input field elements
const metricHeightEl = document.querySelector('.metric-height');
const metricWeightEl = document.querySelector('.metric-weight');
const imperialHeightFeetEl = document.querySelector('.imperial-height-feet');
const imperialHeightInchesEl = document.querySelector('.imperial-height-inches');
const imperialWeightStEl = document.querySelector('.imperial-weight-st');
const imperialWeightLbEl = document.querySelector('.imperial-weight-lb');

//The tables
const imperialTableEl = document.querySelector('.imperial-table');
const metricTableEl = document.querySelector('.metric-table');
console.log(imperialTableEl);
console.log(metricTableEl);

// The elements for the score
const bmiScoreMetricEl = document.querySelector('.bmi-score-metric');
const bmiScoreImperialEl = document.querySelector('.bmi-score-imperial');
const weightScoreMetricEl = document.querySelector('.weight-score-metric');
const weightScoreImperialEl = document.querySelector('.weight-score-imperial');

// Function to calculate the bmi using metric values
function calculateMetric(){
    if(metricHeightEl.value.trim()!== '' && metricWeightEl.value.trim() !== ''){
        let metricHeightValue = metricHeightEl.value / 100;
        let metricWeightValue = metricWeightEl.value;
        if(metricHeightValue > 0 && metricWeightValue > 0){
            let bmi = metricWeightValue / (metricHeightValue * metricHeightValue);
            bmiScoreMetricEl.textContent = bmi.toFixed(2);
        }
    } else {
        console.log('Inputs must not be empty');
    }
}

// Functions to calculate the bmi using imperial values
function calculateImperial(){
    let feet = imperialHeightFeetEl.value.trim();
    let inches = imperialHeightInchesEl.value.trim();
    let stones = imperialWeightStEl.value.trim();
    let extraPounds = imperialWeightLbEl.value.trim();

    if(feet !== '' && inches !== '' && stones !== '' && extraPounds !== ''){
        feet = parseFloat(feet);
        inches = parseFloat(inches);
        stones = parseFloat(stones);
        extraPounds = parseFloat(extraPounds);
        let totalInches = feet * 12 + inches;
        let totalPounds = stones * 14 + extraPounds;
        if(totalInches > 0 && totalPounds > 0){
            let bmiImperial = (totalPounds / (totalInches * totalInches)) * 703;
            bmiScoreImperialEl.textContent = bmiImperial.toFixed(2);
        }else{
            bmiScoreImperialEl.textContent = 0;
        }
    }

}

metricHeightEl.addEventListener('input', calculateMetric);
metricWeightEl.addEventListener('input', calculateMetric);
[imperialHeightFeetEl, imperialHeightInchesEl, imperialWeightStEl, imperialWeightLbEl].forEach(element => {
    element.addEventListener('input', calculateImperial);
})

imperialOptionEl.addEventListener('click', () => {
    metricEl.style.display = 'none';
    metricTableEl.style.display = 'none';
    imperialEl.style.display = 'flex';
    imperialTableEl.style.display = 'flex'
})

metricOptionEl.addEventListener('click', () => {
    metricEl.style.display = 'block';
    metricTableEl.style.display = 'flex';
    imperialEl.style.display = 'none'
    imperialTableEl.style.display = 'none';
})