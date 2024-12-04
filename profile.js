document.addEventListener('DOMContentLoaded', function() {
    let totalProtein = parseFloat(localStorage.getItem('totalProtein')) || 0;
    let totalCarbs = parseFloat(localStorage.getItem('totalCarbs')) || 0;
    let totalFats = parseFloat(localStorage.getItem('totalFats')) ||  0;
    let totalCalories = parseFloat(localStorage.getItem('totalCalories')) || 0;
    document.querySelector('.total-macro p:nth-child(1)').textContent = `Protein: ${totalProtein.toFixed(2)} g`;
    document.querySelector('.total-macro p:nth-child(2)').textContent = `Carbohydrates: ${totalCarbs.toFixed(2)} g`;
    document.querySelector('.total-macro p:nth-child(3)').textContent = `Fats: ${totalFats.toFixed(2)} g`;
    document.querySelector('.total-macro p:nth-child(4)').textContent = `Calories: ${totalCalories.toFixed(2)}`;
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve workouts from localStorage
    const savedWorkout = JSON.parse(localStorage.getItem("cumulativeWorkout")) || [];

    // Display saved workouts in the Today's Workout section
    const workoutList = document.getElementById("todaysWorkoutList");
    if (savedWorkout.length > 0) {
        savedWorkout.forEach((exercise) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${exercise.name}: ${exercise.instructions}`;
            workoutList.appendChild(listItem);
        });
    } else {
        workoutList.innerHTML = "<li>No workouts added yet.</li>";
    }
});