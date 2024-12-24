const imperialEl = document.getElementById('imperial');
const metricEl = document.querySelector('.metric');
const imperialOptionEl = document.getElementById('imperial-option');
const metricOptionEl = document.getElementById('metric-option');
const weightCategoryImperialEl = document.querySelector('.weight-category-imperial');
const weightCategoryMetricEl = document.querySelector('.weight-category-metric');
console.log(weightCategoryImperialEl)
console.log(weightCategoryMetricEl)

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
            categoryMetric(bmi, metricHeightValue);
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
            categoryImperial(bmiImperial, totalInches);
        }else{
            bmiScoreImperialEl.textContent = 0;
        }
    }

}



function categoryMetric(bmi, height){
    let textContent, weightMin, weightMax
    let heightSquared = height * height;
    if(bmi < 18.5){
        textContent = 'you are underweight';
        weightMin = 0;
        weightMax = 18.5 * heightSquared;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        textContent = 'You are at a healthy weight';
        weightMin = 18.5 * heightSquared;
        weightMax = 24.9 * heightSquared;
    } else if (bmi >= 25 && bmi < 30) {
        textContent = 'You are overweight';
        weightMin = 25 * heightSquared;
        weightMax = 29.9 * heightSquared;
    } else {
        textContent = 'You are obese';
        weightMin = 30 * heightSquared;
        weightMax = Infinity;
    }

    weightCategoryMetricEl.innerHTML = `${textContent}. Your ideal weight is between <strong>${weightMin.toFixed(1)} kg - ${isFinite(weightMax) ? weightMax.toFixed(1) : 'and above'} kg</strong>`;

}



function categoryImperial(bmi, totalInches) {
    let textContent;

    if (bmi < 18.5) {
        textContent = 'You are underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        textContent = 'You are at a healthy weight';
    } else if (bmi >= 25 && bmi < 30) {
        textContent = 'You are overweight';
    } else {
        textContent = 'You are obese';
    }

    let weightRange = calculateImperialWeightRange(totalInches);
    weightCategoryImperialEl.innerHTML = `${textContent}. Your ideal weight is between <strong>${weightRange}</strong>`;
}


function calculateImperialWeightRange(totalInches) {
    let minWeightPounds = 18.5 * (totalInches * totalInches) / 703;
    let maxWeightPounds = 24.9 * (totalInches * totalInches) / 703;

    // Convert the minimum and maximum weights from pounds to stones and pounds
    let minWeightStones = Math.floor(minWeightPounds / 14);
    let minWeightLbs = Math.round(minWeightPounds % 14);
    let maxWeightStones = Math.floor(maxWeightPounds / 14);
    let maxWeightLbs = Math.round(maxWeightPounds % 14);

    return `${minWeightStones}st ${minWeightLbs}lbs - ${maxWeightStones}st ${maxWeightLbs}lbs`;
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