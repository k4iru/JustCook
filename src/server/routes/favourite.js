
module.exports = function (app) {
    app.get("/api/favourite", (req, res) => {
      res.send('favourote');
    });
  };