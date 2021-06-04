require('dotenv').config();
const Users = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../validation");

module.exports = function (app) {
  app.get("/api/login", (req, res) => {
    const loggedIn = req.cookies.loggedIn;
    console.log(loggedIn);
    if (loggedIn == "true") {
      res.send("You are logged in");
    } else {
      res.send("you are not logged in");
    }
  });
  app.post("/api/login", async (req, res) => {
    const { error } = await loginValidation(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await Users.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(409)
        .json({ message: "username or password incorrect" });
    }

    const passwordValidation = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordValidation) {
      return res
        .status(400)
        .json({ message: "username or password incorrect" });
    }

    // create + assign token

    const token = jwt.sign({_id: user._id, username: user.username}, process.env.TOKEN_SECRET);
    res.header('authtoken', token).send(token);
  });
};
