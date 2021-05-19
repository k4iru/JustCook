require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());

// create a .env file with API_KEY=YOUR-API-KEY
const api_key = process.env.API_KEY;

// serve files in dist folder (this is the client)
app.use(express.static('dist'));

// api call to search spoonacular for recipes
app.get('/api/search', (req, res) => {
    const base_url = 'https://api.spoonacular.com/recipes/complexSearch';
    res.send('test');
});
// client makes api call to server routes
app.get('/api/test', (req, res) => {
    res.json({test: 'test'});
});

app.listen(8080, () => {
    console.log('listening on 8080');
});