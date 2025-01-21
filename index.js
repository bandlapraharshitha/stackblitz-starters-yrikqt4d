const express = require('express');
const bodyParser = require('body-parser'); // Ensure you have this installed via npm
const app = express(); // Initialize the app

const data=require("./data.json")

// Middleware
app.use(bodyParser.json());

// Default GET route for browser access
app.get('/', (req, res) => {
    res.send('Welcome to the Students API. Use the POST /students/above-threshold endpoint.');
});

// Define your POST route
app.post('/students/above-threshold', (req, res) => {
    const threshold = req.body.threshold;

    // Example JSON student data
    // const students = [
    //     { name: 'Alice Johnson', total: 433 },
    //     { name: 'Bob Smith', total: 410 },
    //     { name: 'Charlie Davis', total: 390 },
    // ];

    // Filter students based on the threshold
    const result = data.filter(data => data.total > threshold);

    // Return the result
    res.json({
        count: result.length,
        data: result,
    });
});

// Start the server
const port = 3010;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.