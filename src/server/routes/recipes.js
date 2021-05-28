require("dotenv").config
const fetch = require("node-fetch");
const api_key = process.env.API_KEY;


module.exports = function (app) {
    app.get("/api/recipes", (req, res) => {
      const base_url = "https://api.spoonacular.com/recipes/random";
  
      // assemble the api string
      let api_string = `${base_url}?apiKey=${api_key}&number=6`;
  
      // make fetch request
      let request = fetch(api_string)
  
          // then transform the response into json
        .then((resp) => {
          return resp.json();
        })
        
        // then send the json to client
        .then((json) => {
          res.json(json);
        });
  
    });
  };
  