const db = require("../models");

module.exports = {
    
    // tested and working
    findAllVenues : function(req,res){
        db.Venue.findAll({

        include : [{
                model : db.Show
                // ({
                //     include : [{
                //         model : db.Show
                //     }]
                // })
            }],  
            order : [['updatedAt', 'DESC']]
        })
        .then(venuesRes =>{
            res.json(venuesRes);
        });
    },

    // tested and working
    create: function(req,res){
        db.Venue.create(req.body)
            .then(venuesRes => {
                res.json(venuesRes);
            });
    },

    // tested and working
    findVenue : function (req, res){
        db.Venue.findOne({
            where : {
                id : req.params.id
            },
            include : [db.Show]
            })
            .then(venuesRes => {
                res.json(venuesRes);
            });
    },

    // tested and working
    deleteVenue : function(req,res){
        db.Venue.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(venuesRes => {
            res.json(venuesRes);
        });
    },
    
    updateVenue : function(req,res){
        db.Venue.update(
            req.body ,
            {where : {
                id:req.params.id
            }
        })
        .then(dbVenues => res.json(dbVenues));
    },

    // Gets current rating and adds new rating to it, adds 1 to totalRated
    // addRating : function(req, res) {
    //     console.log("adding rating to venue")
    //     db.Venue.findOne({
    //         where : {
    //             id : req.params.id
    //         }})
    //         .then(venueRes => {
    //             db.Venue.update(
    //                 {
    //                     rating : venueRes + req.rating,
    //                     totalRated : venueRes.totalRated + 1
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
    //     db.Venue.findOne({
    //         where : {
    //             id : req.params.id
    //         }})
    //         .then(venueRes => {
    //             const rating = venueRes.ratings / venueRes.totalRated;
    //             res.json({rating : rating});
    //         });
    // }
};