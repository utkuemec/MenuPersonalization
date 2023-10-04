// formHandler.js
/*
// Event listener should be outside of any request handlers
let form = document.getElementById('recommendationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted normally

    let food = document.getElementById('food').value;
    let drink = document.getElementById('drink').value;

    // Send the form data to your Flask application
    fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            food: food, 
            drink: drink 
        }) // send the userPreferences object as the 'preferences' field in the request body
    })
    .then(response => response.json())
    .then(data => {
        // handle the response data
        //document.getElementById('result').innerText = JSON.stringify(data);
        // Handle the response data
        let resultDiv = document.getElementById('result');
        
        let foodOutput = "Recommended Foods:\n";
        data.recommended_foods.forEach(food => {
            foodOutput += `Name: ${food.name}, Category: ${food.category}\n`;
        });

        let drinkOutput = "\nRecommended Drinks:\n";
        data.recommended_drinks.forEach(drink => {
            drinkOutput += `Name: ${drink.name}, Category: ${drink.category}\n`;
        });

        resultDiv.innerText = foodOutput + drinkOutput;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
*/