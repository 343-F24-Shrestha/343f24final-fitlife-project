let totalProtein = 0;
let totalCarbs = 0;
let totalFats = 0;
let totalCalories = 0;

// Load stored totals from localStorage if available
if (localStorage.getItem('totalProtein')) {
    totalProtein = parseFloat(localStorage.getItem('totalProtein'));
}
if (localStorage.getItem('totalCarbs')) {
    totalCarbs = parseFloat(localStorage.getItem('totalCarbs'));
}
if (localStorage.getItem('totalFats')) {
    totalFats = parseFloat(localStorage.getItem('totalFats'));
}
if (localStorage.getItem('totalCalories')) {
    totalCalories = parseFloat(localStorage.getItem('totalCalories'));
}

// Update the page with the loaded values
document.getElementById("total-protein").textContent = totalProtein.toFixed(2);
document.getElementById("total-carbs").textContent = totalCarbs.toFixed(2);
document.getElementById("total-fats").textContent = totalFats.toFixed(2);
document.getElementById("total-calories").textContent = totalCalories.toFixed(2);

document.getElementById("nutr-form").addEventListener('submit', function(event) {
    event.preventDefault();

    let foodName = document.getElementById('enter_food').value;
    let protein = parseFloat(document.getElementById('protein').value);
    let carbs = parseFloat(document.getElementById('carbs').value);
    let fats = parseFloat(document.getElementById('fats').value);
    let calories = parseFloat(document.getElementById('calories').value);

    // Add the food's macronutrients to the totals
    totalProtein += protein;
    totalCarbs += carbs;
    totalFats += fats;
    totalCalories += calories;

    // Store updated totals in localStorage
    localStorage.setItem('totalProtein', totalProtein);
    localStorage.setItem('totalCarbs', totalCarbs);
    localStorage.setItem('totalFats', totalFats);
    localStorage.setItem('totalCalories', totalCalories);

    // Update the displayed values
    document.getElementById("total-protein").textContent = totalProtein.toFixed(2);
    document.getElementById("total-carbs").textContent = totalCarbs.toFixed(2);
    document.getElementById("total-fats").textContent = totalFats.toFixed(2);
    document.getElementById("total-calories").textContent = totalCalories.toFixed(2);

    // Reset the form
    document.getElementById("nutr-form").reset();
});

// Reset button event listener
document.getElementById('reset-nutr').addEventListener('click', function() {
    // Reset totals to 0
    totalProtein = 0;
    totalCarbs = 0;
    totalFats = 0;
    totalCalories = 0;

    // Update the display
    document.getElementById('total-protein').textContent = '0';
    document.getElementById('total-carbs').textContent = '0';
    document.getElementById('total-fats').textContent = '0';
    document.getElementById('total-calories').textContent = '0';

    // Reset localStorage
    localStorage.setItem('totalProtein', totalProtein);
    localStorage.setItem('totalCarbs', totalCarbs);
    localStorage.setItem('totalFats', totalFats);
    localStorage.setItem('totalCalories', totalCalories);
});

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const heightFt = parseFloat(document.getElementById('height-ft').value);
    const heightIn = parseFloat(document.getElementById('height-in').value);
    const weightLbs = parseFloat(document.getElementById('weight-lbs').value); 
    const heightInches = (heightFt * 12) + heightIn;
    const weightKg = weightLbs * 0.453592;
    const heightMeters = heightInches * 0.0254;
    const bmi = weightKg / (heightMeters * heightMeters);
    const bmiOutput = document.getElementById('bmi-output');
    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    bmiOutput.classList.remove('hidden');
});