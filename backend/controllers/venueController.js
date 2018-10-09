// const db = require("../models");

// module.exports = {
    
    // findAllVenues : function(req,res){
    //     db.Venue.find({})
    //             .populate({
    //                 path: 'show',
    //                 populate: {
    //                 path: 'band',
    //                 model: 'Band'
    //                 } 
    //             })
    //             .sort({date: -1})
    //             .then(venuesRes =>{
    //                 res.json(venuesRes);
    //             });
    // },

    // create: function(req,res){
    //     db.Venue.create(req.body)
    //             .then(venuesRes => {
    //                 res.json(venuesRes);
    //             });
    // },

    // findOneVenue : function (req, res){
    //     db.Venue.findById({_id : req.params.id})
    //             .then(venuesRes => {
    //                 res.json(venuesRes);
    //             });
    // },
    // deleteOneVenue : function(req,res){
    //     db.Venue.remove({_id : req.params.id})
    //             .then(venuesRes => {
    //                 res.json(venuesRes);
    //             });
    // },
    // updateOneVenue : function(req,res){
    //     db.Venue.findOneAndUpdate({_id:req.params.id} , req.body)
    //     .then(dbVenues => res.json(dbVenues));
    // }
// };