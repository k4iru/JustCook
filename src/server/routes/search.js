require("dotenv").config();
const fetch = require("node-fetch");

// get your api key at spoonacular and add to .env file
const api_key = process.env.API_KEY;

module.exports = function (app) {
  app.post("/api/search", async (req, res) => {
    const base_url = "https://api.spoonacular.com/recipes/complexSearch";

    // replace white space with +'s
    let queries = req.body.query.replace(/\s/g, "+");

    // assemble the api string
    let api_string = `${base_url}?apiKey=${api_key}&query=${queries}`;

    // make fetch request
    let response = await fetch(api_string);
    let json = await response.json();
    res.json(json);
  });
};
