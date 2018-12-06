const db = require("../models");

module.exports = {

    // get all ratings
    findAllRatings : function(req,res){
        console.log("inside find all ratings")
        db.Rating.findAll({
        
        //     include : [
        //         {
        //         model : db.Band
        //     }
        //     ,
        //     {
        //         model : db.Venue
        //     }     
        // ],  
        order: [['updatedAt', 'DESC']]
    }).then(ratingRes =>{
            res.json(ratingRes);
        });
    },

    // Create new rating, needs rater, show, rated
    create: function(req,res){
        console.log("rating create controller", req.body);
        console.log("user is  ", req.params.user);
        // db.Rating.create(req.body)
        db.Rating.create(

        {
            "userIsBand": true,
            "BandId": 1,
            "ShowId": 1,
            "VenueId": 1,
        })
            .then(ratingRes => {
                res.json(ratingRes);
            });
    },
    
    createRating: function(req, res) {
        console.log("ratings.createRatings ", req.body);
        db.Rating.create(req.body
        ).then(ratingRes => {
            res.json(ratingRes);
        });
    },

    findRating : function (req, res){
        db.Rating.findAll({
            where : {
                id : req.params.id
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                res.json(ratingRes);
            });
    },

    deleteRating : function(req,res){
        db.Rating.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(ratingRes => {
            res.json(ratingRes);
        });
    },
    
    updateRating : function(req,res){
        db.Rating.update(
            req.body,
            {where :{
                id : req.params.id
            }
        })
        .then(ratingRes => res.json(ratingRes));
    },

    findRatingsById : function (req, res){
        if (req.params.user === "band"){
            db.Rating.findAll({
                where : {
                    BandId : req.params.id,
                    userIsBand : true
                }})
                .then(ratingRes => {
                    console.log(ratingRes)
                    res.json(ratingRes);
                });
        } else if (req.params.user === "venue") {
        db.Rating.findAll({
            where : {
                VenueId : req.params.id,
                userIsBand : false
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                res.json(ratingRes);
            });
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.")
        }
    },
    findNullRatingsById : function (req, res){
        if (req.params.user === "band"){
            db.Rating.findAll({
                where : {
                    BandId : req.params.id,
                    userIsBand : true,
                    rating : null
                }})
                .then(ratingRes => {
                    console.log(ratingRes)
                    res.json(ratingRes);
                });
        } else if (req.params.user === "venue") {
        db.Rating.findAll({
            where : {
                VenueId : req.params.id,
                userIsBand : false,
                rating : null
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                res.json(ratingRes);
            });
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.")
        }
    },
    findPastRatings : function (req, res){
        if (req.params.user === "band"){
            db.Rating.findAll({
                where : {
                    BandId : req.params.id,
                    userIsBand : true,
                    rating : {$not: null}
                }})
                .then(ratingRes => {
                    console.log(ratingRes)
                    res.json(ratingRes);
                });
        } else if (req.params.user === "venue") {
        db.Rating.findAll({
            where : {
                VenueId : req.params.id,
                userIsBand : false,
                rating : {$not: null}
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                res.json(ratingRes);
            });
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.")
        }
    },    
    getUserRatings : function (req, res){
        if (req.params.user === "band"){
            db.Rating.findAll({
                where : {
                    BandId : req.params.id,
                    userIsBand : false,
                    rating : {$not: null}
                }})
                .then(ratingRes => {
                    console.log(ratingRes)
                    res.json(ratingRes);
                });
        } else if (req.params.user === "venue") {
        db.Rating.findAll({
            where : {
                VenueId : req.params.id,
                userIsBand : true,
                rating : {$not: null}
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                res.json(ratingRes);
            });
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.")
        }
    },
    calculateRatingById : function (req, res){
        if (req.params.user === "band"){
            db.Rating.findAll({
                where : {
                    BandId : req.params.id,
                    userIsBand : false,
                    rating : {$not: null}
                }})
                .then(ratingRes => {
                    console.log(ratingRes)
                    res.json(ratingRes);
                });
        } else if (req.params.user === "venue") {
        db.Rating.findAll({
            where : {
                VenueId : req.params.id,
                userIsBand : true,
                rating : {$not: null}
            }})
            .then(ratingRes => {
                console.log(ratingRes)
                let rating = 0;
                for (let i = 0; i < ratingRes.length; i++){
                    rating += ratingRes[i].rating;
                }
                rating = rating / ratingRes.length
                res.json({rating : rating});
            });
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.")
        }
    },
};