module.exports = function (app) {
    app.get("/timeline", function(req, res) {
        res.render("timeline");
    });
}