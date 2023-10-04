// server.js

// server.js

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // for serving static files like css, js
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
    res.render('preferences');
});

app.post('/preferences', async function(req, res) {
    const userPreferences = req.body;

    const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPreferences)
    });

    const data = await response.json();

    // handle the response data
    res.render('recommendations', { data });
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

app.listen(3000, function() {
    console.log('http://localhost:3000');
});


/*

// Event listener should be outside of any request handlers
let form = document.getElementById('preferencesForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted normally

    let formData = new FormData(form); // Create a FormData object from the form
    let userPreferences = Object.fromEntries(formData); // Convert the FormData to a regular object

    console.log("User preferences being sent:", userPreferences);

    let category = "starter"; // replace this with actual category based on form data

    // Send the form data to your Flask application
    fetch('http://localhost:5000/api/recommend/<category>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ preferences: userPreferences }) // send the userPreferences object as the 'preferences' field in the request body
    })
    .then(response => response.json())
    .then(data => {
        // handle the response data
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

app.listen(5000, function() {
    console.log('http://localhost:5000');
});
*/