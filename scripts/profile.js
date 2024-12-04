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

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#calendar", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });
});
const quotes1 = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs"
];

// Array of inspirational images
const images = [
    "images/images-4.jpeg",
    "images/images-5.jpeg",
    "images/images-6.jpeg",
    "images/images-7.jpeg",
    "images/images-8.jpeg",
    "images/images-9.jpeg"
];

// Function to get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes1.length);
    return quotes1[randomIndex];
}

// Function to get random image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Update the quote and image in the HTML
document.getElementById("quote-text").innerText = getRandomQuote();
document.getElementById("inspiration-image").src = getRandomImage();