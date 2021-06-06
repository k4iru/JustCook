require("dotenv").config();
const fetch = require("node-fetch");

// get your api key at spoonacular and add to .env file
const api_key = process.env.API_KEY;

module.exports = function (app) {
  app.post("/api/search", (req, res) => {
    const base_url = "https://api.spoonacular.com/recipes/complexSearch";

    // replace white space with +'s
    queries = req.body.query.replace(/\s/g, "+");

    // assemble the api string
    let api_string = `${base_url}?apiKey=${api_key}&query=${queries}`;

    // get call to the spoonacular api

    // make fetch request
    let request = fetch(api_string)

        // then transform the response into json
      .then((resp) => {
        return resp.json();
      })
      
      // then send the json to client
      .then((json) => {
        //console.log(json)
        res.json(json);
      });

  });
};
