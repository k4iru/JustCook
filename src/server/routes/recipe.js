require("dotenv").config();
const fetch = require("node-fetch");

// get your api key at spoonacular and add to .env file
const api_key = process.env.API_KEY;

module.exports = function (app) {
  app.post("/api/recipe", async (req, res) => {
    const base_url = "https://api.spoonacular.com/recipes";

    id = req.body.id;

    // assemble the api string
    let api_string = `${base_url}/${id}/information?includeNutrition=false&apiKey=${api_key}&number=6`;

    // make fetch request
    let response = await fetch(api_string);
    let json = await response.json();

    res.json(json);
  });
};
