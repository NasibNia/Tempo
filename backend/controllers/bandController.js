const db = require("../models");

module.exports = {

    // tested and working    
    findAllBands: function (req, res) {
        db.Band.findAll({
            include: [{
                model: db.Show
                // ({
                //     include : [{
                //         model : db.Show
                // }]
                // })
            }],

            order: [['updatedAt', 'DESC']]
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    // tested and working
    create: function (req, res) {
        console.log("before create    ", req.body);
        db.Band.create(req.body)
            .then(bandsRes => {
                console.log("after create     ", bandsRes);
                res.json(bandsRes);
            });
    },

    // tested and working
    findBand: function (req, res) {
        db.Band.findOne({
            where: {
                id: req.params.id
            },
            include: { model: db.Show }
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    findBandByName: function (req, res) {
        db.Band.findOne({
            where: {
                name: req.params.name
            },
            include: { model: db.Show }
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    findBandByGenre : function(req,res){


       
        db.Band.findAll({
            where : {
                // genres = {
                //     $contains: [`${req.params.genres}: true`]
                // } 
                // [req.params.genre]: true
                genres: req.params.genre

            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findReadyBands: function (req, res) {
        db.Band.findAll({
            where: {
                readyToGig: true
            },
            include: [db.Show]
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    // These four need testing
    findBandByTicketPrice: function (req, res) {
        db.Band.findAll({
            include: [{
                model: db.Show
                // ({
                //     include : [{
                //         model : db.Show
                // }]
                // })
            }],
            limit: 8,
            order: [['ticket_price', 'DESC']]
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    findBandByDraw: function (req, res) {
        db.Band.findAll({
            include: [{
                model: db.Show
                // ({
                //     include : [{
                //         model : db.Show
                // }]
                // })
            }],
            limit: 8,
            order: [['average_draw', 'DESC']]
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    // tested and works
    deleteBand: function (req, res) {
        console.log("delete band");
        db.Band.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(bandsRes => {
                res.json(bandsRes);
            });

    },
    updateBand: function (req, res) {
        db.Band.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then(dbBands => res.json(dbBands));
    },

    // Find All of a Specific Genre

    findRockBands : function(req,res){

        db.Band.findAll({
            where : {
                rock: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findJazzBands : function(req,res){

        db.Band.findAll({
            where : {
                jazz: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findPopBands : function(req,res){

        db.Band.findAll({
            where : {
                pop: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findClubBands : function(req,res){

        db.Band.findAll({
            where : {
                club: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findElectronicBands : function(req,res){

        db.Band.findAll({
            where : {
                electronic: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findHiphopBands : function(req,res){

        db.Band.findAll({
            where : {
                hiphop: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },

    findAcousticsBands : function(req,res){

        db.Band.findAll({
            where : {
                acoustics: true
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
    },
    // // Gets current rating and adds new rating to it, adds 1 to totalRated
    // addRating : function(req, res) {
    //     console.log("adding rating to band")
    //     db.Band.findOne({
    //         where : {
    //             id : req.params.id
    //         }})
    //         .then(bandRes => {
    //             db.Venue.update(
    //                 {
    //                     rating : bandRes + req.rating,
    //                     totalRated : bandRes.totalRated + 1
    //                 },
    //                 {where : {
    //                     id:req.params.id
    //                 }
    //             })
    //             .then(updateRes => res.json(updateRes));   
    //             res.json(updateRes);
    //         });
    // },


    // // Gets user info, calculates rating, and responds with obj of rating
    // getRating : function(req,res){
    //     db.Band.findOne({
    //         where : {
    //             id : req.params.id
    //         }})
    //         .then(bandsRes => {
    //             const rating = bandsRes.ratings / bandsRes.totalRated;
    //             res.json({rating : rating});
    //         });
    // }
};