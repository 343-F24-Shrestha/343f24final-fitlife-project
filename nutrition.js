let totalProtein = 0;
let totalCarbs = 0;
let totalFats = 0;
let totalCalories = 0;

document.getElementById("nutr-form").addEventListener('submit', function(event) {
    event.preventDefault();

   
    let foodName = document.getElementById('enter_food').value;
    let protein = parseFloat(document.getElementById('protein').value);
    let carbs = parseFloat(document.getElementById('carbs').value);
    let fats = parseFloat(document.getElementById('fats').value);
    let calories = parseFloat(document.getElementById('calories').value);

   
    totalProtein += protein;
    totalCarbs += carbs;
    totalFats += fats;
    totalCalories += calories;

    document.getElementById("total-protein").textContent = totalProtein.toFixed(2);
    document.getElementById("total-carbs").textContent = totalCarbs.toFixed(2);
    document.getElementById("total-fats").textContent = totalFats.toFixed(2);
    document.getElementById("total-calories").textContent = totalCalories.toFixed(2);

   
    document.getElementById("nutr-form").reset();
});


document.getElementById('reset-nutr').addEventListener('click', function() {
    
    totalProtein = 0;
    totalCarbs = 0;
    totalFats = 0;
    totalCalories = 0;

    
    document.getElementById('total-protein').textContent = '0';
    document.getElementById('total-carbs').textContent = '0';
    document.getElementById('total-fats').textContent = '0';
    document.getElementById('total-calories').textContent = '0';
});

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const heightFt = parseFloat(document.getElementById('height-ft').value);
    const heightIn = parseFloat(document.getElementById('height-in').value);
    const weightLbs = parseFloat(document.getElementById('weight-lbs').value);

    // Convert height to inches
    const heightInches = (heightFt * 12) + heightIn;

    // Convert weight to kg and height to meters
    const weightKg = weightLbs * 0.453592;
    const heightMeters = heightInches * 0.0254;

    // Calculate BMI
    const bmi = weightKg / (heightMeters * heightMeters);

    // Display the BMI result
    const bmiOutput = document.getElementById('bmi-output');
    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    bmiOutput.classList.remove('hidden');
});