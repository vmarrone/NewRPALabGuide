const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Route for serving the authentication page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for handling authentication form submission
app.post('/dashboard', (req, res) => {
    const { username, password } = req.body;
    // Replace with your authentication logic
    if (username === 'badgeadmin' && password === 'badgeadmin@123') {
        res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
    } else {
        res.send('Authentication failed');
    }
});

// Route for serving the badge printing page
app.get('/badgingapp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3001, () => {
    console.log('Badging App is running on port 3001');
});

