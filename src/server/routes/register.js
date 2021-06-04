const Users = require("../models/User");
const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation");

module.exports = function (app) {
  // app.get("/api/register", async (req, res) => {
  //   try {
  //     const users = await Users.find();
  //     res.json(users);
  //   } catch (err) {
  //     res.json({ message: err });
  //   }
  // });

  app.post("/api/register", async (req, res) => {
    // Joi validation against schema
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // has password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    // create object schema
    const user = new Users({
      first: req.body.first,
      last: req.body.last,
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });

    try {
      // check if username or email exists
      const UserExist = await Users.findOne({ username: user.username });
      const EmailExist = await Users.findOne({ email: user.email });

      // return 409 if in database
      if (UserExist) return res.status(409).send("Username Exists");
      if (EmailExist) return res.status(409).send("Email Exists");

      const newUser = await user.save();
      // do error checking
      // note to self. perform password hash and salt on server side. standard practice to send plain text passwords over https since TLS encrypts it still. hash before storage in database.

      // const cookieHeaders = {
      //   maxAge: 60 * 60 * 1000, // expire cookies in 1 hour
      //   // production settings secure needs https for local host

      //   // httpOnly: true, // not changeable from client side
      //   // secure: true, // need https
      //   // sameSite: true, // same domain
      // };
      // res.cookie("loggedIn", true, cookieHeaders);
      // res.cookie("id", `${newUser._id}`, cookieHeaders);

      const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
      res.header('authtoken', token).send(token);
      console.log(token);
      // res.json({ id: newUser._id, username: newUser.username });

    } catch (err) {
      res.status(400).send(err);
    }
  });
};
