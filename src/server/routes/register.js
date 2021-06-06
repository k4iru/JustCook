const Users = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

    // hash password
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

      // something must be going wrong here

      //https://stackoverflow.com/questions/62736676/how-do-i-set-authorization-bearer-header-with-nodejs
      const token = jwt.sign(
        { _id: user._id, username: user.username },
        process.env.TOKEN_SECRET,
        (err, token) => {

          let thing = {
            "token": token
          }
          console.log(thing)
          res.json(thing);
        }
      );

      // Authorization is a request header try sending it from client instead.
      //res.setHeader('Authorization', `Bearer ${token}`);
      //res.json({ token: token });

      // res.json({ id: newUser._id, username: newUser.username });
    } catch (err) {
      res.send(err);
    }
  });
};
