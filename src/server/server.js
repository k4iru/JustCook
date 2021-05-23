require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
// middleware to handle json 
app.use(express.json());

// serve client files using absolute path
app.use(express.static(path.join(__dirname, 'dist')));

<<<<<<< Updated upstream
// serve files in dist folder (this is the client)
app.use(express.static('dist'));

// api call to search spoonacular for recipes
app.post('/api/search', (req, res) => {
    const base_url = 'https://api.spoonacular.com/recipes/complexSearch';

    // replace white space with +'s
    queries = req.body.query.replace(/\s/g, '+');

    let api_string = `${base_url}?apiKey=${api_key}&query=${queries}`;
    //console.log(api_string);

    // get call to the spoonacular api. very verbose, consider switching to node-fetch or request
    https.get(api_string, resp => {
        let body = "";
        
        // on data read
        resp.on("data", chunk => {
            body += chunk;
        });

        // on finish data read
        resp.on("end", () => {
            try {
                let json = JSON.parse(body);
                //console.log(json);
                res.json(json);
            } catch(error) {
                console.error(error.message);
            }
        });
    }).on("error", err => {
        console.error(err.message);
    });
});

//api call to fill home page with random recipes
app.get("/api/fetch", (req, res) => {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${api_key}`;
  let body = "";

  https
    .get(url, (resp) => {
      // on data read
      resp.on("data", (chunk) => {
        body += chunk;
      });
      // on finish data read
      resp.on("end", () => {
        try {
          let json = JSON.parse(body);
          //console.log(json);
          res.json(json);
        } catch (error) {
          console.error(error.message);
        }
      });
    })
    .on("error", (err) => {
      console.error(err.message);
    });
});



// client makes api call to server routes
app.get('/api/test', (req, res) => {
    res.json({test: 'test'});
});
=======
// routes
// add api routes to the routes folder and require them here while passing the app
require('./routes/test')(app);
require('./routes/search')(app);
>>>>>>> Stashed changes

app.listen(process.env.PORT || 8080, () => {
    console.log(`listening on port: ${process.env.PORT}`);
});