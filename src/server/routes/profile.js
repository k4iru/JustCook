const verify = require('./verifyToken');

module.exports = function (app) {
    app.get("/api/favourite", verify , (req, res) => {
      res.send(req.user);

      // find user information
    });
};