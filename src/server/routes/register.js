const Users = require("../models/User");

module.exports = function (app) {
  app.get("/api/register", async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      res.json({ message: err });
    }
  });

  app.post("/api/register", async (req, res) => {
    try {
      const user = new Users({
        first: req.body.first,
        last: req.body.last,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });

      // do error checking
      // note to self. perform password hash and salt on server side. standard practice to send plain text passwords over https since TLS encrypts it still. hash before storage in database.

      const cookieHeaders = {
        maxAge: 60 * 60 * 1000 * 24, // 24 hours
        // production settings secure needs https for local host
        // httpOnly: true, // not changeable from client side
        // secure: true, // need https
        // sameSite: true, // same domain
      };

      const newUser = await user.save();
      res.cookie("loggedIn", true, cookieHeaders);
      res.cookie("id", `${newUser._id}`, cookieHeaders);
      console.log(newUser);
      console.log(newUser._id);

      res.json(newUser);
    } catch (err) {
      res.json({ message: err });
    }
  });
};
