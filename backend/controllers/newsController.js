const db = require("../models");

module.exports = {
    findAllNews: function (req, res) {
        db.NewsFeed.findAll({
            order : [['updatedAt', 'DESC']]
        })
        .then(newsRes => {
            console.log("data caught");
            res.json(newsRes);
        });
    },

    create: function (req, res) {
        console.log("before creating the news   ", req.body);
        db.NewsFeed.create(req.body)
            .then(newsRes => {
                console.log("after creating the news    ", newsRes);
                res.json(newsRes);
            });
    }
};
