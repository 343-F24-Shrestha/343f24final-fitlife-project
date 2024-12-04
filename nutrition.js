// Initialize total macronutrients
let totalProtein = 0;
let totalCarbs = 0;
let totalFats = 0;
let totalCalories = 0;

function updateLocalStorage() {
    localStorage.setItem('totalProtein', totalProtein.toFixed(2));
    localStorage.setItem('totalCarbs', totalCarbs.toFixed(2));
    localStorage.setItem('totalFats', totalFats.toFixed(2));
    localStorage.setItem('totalCalories', totalCalories.toFixed(2));
}


// Event listener for food input form
document.getElementById("nutr-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const foodName = document.getElementById("enter_food").value;

    if (!foodName.trim()) {
        alert("Please enter a valid food name.");
        return;
    }

    try {
        // Fetch data from USDA FoodData Central API
        const apiKey = "uHLCMGQLA6jYiNPbLCrNARopwABHXejWYm4qdhGm"; 
        const response = await fetch(
            `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(foodName)}&pageSize=1&api_key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch food data. Please check the food name.");
        }

        const data = await response.json();

        // Ensure at least one food item is returned
        if (!data.foods || data.foods.length === 0) {
            alert("No food data found for the entered name.");
            return;
        }

        // Extract the first food item
        const foodData = data.foods[0];
        const nutrients = foodData.foodNutrients;

        // Extract macronutrient data
        const protein = extractNutrient(nutrients, "Protein") || 0;
        const carbs = extractNutrient(nutrients, "Carbohydrate") || 0;
        const fats = extractNutrient(nutrients, "Total lipid (fat)") || 0;
        const calories = extractNutrient(nutrients, "Energy") || 0;

        // Update totals
        totalProtein += protein;
        totalCarbs += carbs;
        totalFats += fats;
        totalCalories += calories;

        // Update displayed totals
        document.getElementById("total-protein").textContent = totalProtein.toFixed(2);
        document.getElementById("total-carbs").textContent = totalCarbs.toFixed(2);
        document.getElementById("total-fats").textContent = totalFats.toFixed(2);
        document.getElementById("total-calories").textContent = totalCalories.toFixed(2);

        // Add the food to the log
        const foodList = document.getElementById("food-list");
        const listItem = document.createElement("li");
        listItem.textContent = `${foodData.description}: Protein: ${protein}g, Carbs: ${carbs}g, Fats: ${fats}g, Calories: ${calories} kcal`;
        foodList.appendChild(listItem);

        updateLocalStorage();

        // Clear the input field
        document.getElementById("enter_food").value = "";
    } catch (error) {
        console.error(error);
        alert("There was an error retrieving the food data. Please try again.");
    }
});

// Helper function to extract nutrient data
function extractNutrient(nutrients, nutrientName) {
    const nutrient = nutrients.find((n) => n.nutrientName.includes(nutrientName));
    return nutrient ? nutrient.value : null;
}

// Reset totals and food log
document.getElementById("reset-nutr").addEventListener("click", function () {
    totalProtein = 0;
    totalCarbs = 0;
    totalFats = 0;
    totalCalories = 0;

    document.getElementById("total-protein").textContent = "0";
    document.getElementById("total-carbs").textContent = "0";
    document.getElementById("total-fats").textContent = "0";
    document.getElementById("total-calories").textContent = "0";

    const foodList = document.getElementById("food-list");
    foodList.innerHTML = ""; // Clear the food log

    localStorage.removeItem("totalProtein");
    localStorage.removeItem("totalCarbs");
    localStorage.removeItem("totalFats");
    localStorage.removeItem("totalCalories");
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