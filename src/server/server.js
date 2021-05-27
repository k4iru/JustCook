require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
// middleware to handle json 
app.use(express.json());

// serve client files using absolute path
// dist file is not in this folder, go up 2 levels
app.use(express.static(path.join(__dirname, '../../dist')));


// routes
// add api routes to the routes folder and require them here while passing the app
require('./routes/test')(app);
require('./routes/search')(app);

// TODO
require('./routes/login')(app);
require('./routes/register')(app);
require('./routes/favourite')(app);

app.listen(process.env.PORT || 8080, () => {
    console.log(`listening on port: ${process.env.PORT}`);
});