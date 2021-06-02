const Users = require("../models/User");

module.exports = function (app) {

  app.get("/api/login", (req, res) => {
    const loggedIn = req.cookies.loggedIn;
    console.log(loggedIn);
    if (loggedIn == "true") {
      res.send('You are logged in');
    }
    else {
      res.send('you are not logged in');
    }
  });
  app.post("/api/login", (req, res) => {
    
  });
};