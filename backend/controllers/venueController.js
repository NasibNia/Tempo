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
    }
};