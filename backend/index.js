const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Root Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Lambda API!' });
});

// Lambda GET Route
app.get('/lambda', (req, res) => {
    try {
        res.json({ message: 'Lambda GET request success!' });
    } catch (error) {
        console.error('Error in /lambda:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Catch-All Route
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports.handler = serverless(app);
