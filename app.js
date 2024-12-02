const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML form (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); // Adjust path as needed
});

// Handle form submission
app.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Simulate an SQL query (vulnerable to SQL Injection)
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    console.log("Executed SQL Query:", query);

    // Return success message
    res.send(`
        <h1>Form Submitted Successfully</h1>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
