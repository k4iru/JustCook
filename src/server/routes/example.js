module.exports = function(app) {
    app.get('/api/test', (req, res) => {
        res.json({test: 'test'});
    });
    app.post('/api/test', (req, res) => {
        res.json({test: 'test'});
    });
}