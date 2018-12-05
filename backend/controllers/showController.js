const db = require("../models");

module.exports = {

    // tested and working
    //
    findAllShows : function(req,res){
        db.Show.findAll({
            include : [
                {
                model : db.Band
            }
            ,
            {
                model : db.Venue
            }     
        ],  
        order: [['updatedAt', 'DESC']]
    })
        .then(showsRes =>{
            res.json(showsRes);
        });
    },

    // will be called at route /api/shows/:showId/:user/:userId
    // where :user could be "band" or "venue"
    joinShow : function(req,res){
        console.log("show join controller ", req.body);
        // if band:
        if (req.params.user === "band") {
            db.BandShow.create ({
                BandId : req.params.userId,
                ShowId : req.params.showId                                    
            }).then(showsRes => {
                res.json(showsRes);
            });
        } // if venue
        else if (req.params.user === "venue") {

            // check if there is a venue already associated with this show
            db.Show.findOne({
                where : {
                    id : req.params.showId
                },
                include : [db.Venue]
                })
                .then(showsRes => {
                    // if there is no venue: create the relationship between show and this venue
                    if (showsRes.Venues.length === 0) {
                        db.VenueShow.create ({
                            VenueId : req.params.userId,
                            ShowId : req.params.showId                                    
                        }).then(showsRes => {
                            res.json(showsRes);
                        });
                    } //Otherwise :
                    else {
                        console.log("Venue already exists.");
                        res.json("Venue already exists.");
                    }
            });
           // if :user is neither band or venue: 
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.");
        }

    },

    // tested and working
    // On the route /api/shows/:user/:id where user could be "band" or "venue"
    create: function(req,res){
        console.log("controller.create ", req.body);
        let user = req.params.user;
        console.log("user is  ", user);
        db.Show.create(req.body)
                .then(dbShow => {
                    // if user is "band" :
                    // create relationship btwn band and show in BandShow
                    if (user === "band"){
                        db.BandShow.create({
                            BandId : parseInt(req.params.id),
                            ShowId : dbShow.dataValues.id
                        });
                    } // if user is "venue" :
                      // create relationship btwn band and show in BandShow
                    else if(user === "venue") {
                        db.VenueShow.create({
                            VenueId : parseInt(req.params.id),
                            ShowId : dbShow.dataValues.id
                        });
                    } // if not
                    else {
                        console.log("User params not band or venue.");
                        res.json("User params not band or venue.");
                    }
                })
                .then(showsRes => {
                    res.json(showsRes);
                });
    },

    // tested and working
    findShow : function (req, res){
        db.Show.findOne({
            where : {
                id : req.params.id
            },
            include : [{model : db.Band}, {model : db.Venue}]
            })
            .then(showsRes => {
                res.json(showsRes);
            });
    },

    // tested and working
    deleteShow : function(req,res){
        db.Show.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(showsRes => {
            res.json(showsRes);
        });
    },
    
    updateShow : function(req,res){
        db.Show.update(
            req.body,
            {where :{
                id : req.params.id
            }
        })
        .then(dbShows => res.json(dbShows));
    },

    // tested and works
    destroyRelationship : function (req,res){
        if (req.params.user === "band"){
            db.BandShow.destroy ({
                where:{
                    BandId : req.params.userId,
                    ShowId : req.params.showId
                }
            }).then(showsRes => {
                res.json(showsRes);
            });
        } else if (req.params.user === "venue"){
            db.VenueShow.destroy ({
                where:{
                    VenueId : req.params.userId,
                    ShowId : req.params.showId
                }
            }).then(showsRes => {
                res.json(showsRes);
            });
            
        } else {
            console.log("User params not band or venue.");
            res.json("User params not band or venue.");
        }
    }

};