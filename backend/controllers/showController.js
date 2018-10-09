const db = require("../models");

module.exports = {

    findAllShows : function(req,res){
        db.Show.findAll({
            include : [{
                model : db.Band
            },{
                model : db.Venue
            }     
        ],  
            order : ['updatedAt', 'DESC']
        })
        .then(showsRes =>{
            res.json(showsRes);
        });
    },

    create: function(req,res){
        db.Band.create(req.body)
                .then(dbShow => {
                    db.BandShow.create({
                        BandId : req.body.BandId,
                        ShowId : dbShow.dataValues.id
                })
                .then(showsRes => {
                    res.json(dbShow);
                });
            });
    },

    findOneShow : function (req, res){
        db.Show.findOne({
            where : {
                id : req.params.id
            },
            include : [db.Band]
            })
            .then(showsRes => {
                res.json(showsRes);
            });
    },
    deleteOneShow : function(req,res){
        db.Show.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(showsRes => {
            res.json(showsRes);
        });
    },
    updateOneShow : function(req,res){
        db.Show.update(
            req.body,
            {where :{
                id : req.params.id
            }
        })
        .then(dbShows => res.json(dbShows));
    }

    // findAllShows : function(req,res){
    //     db.Show.find({})
    //             .populate("band")
    //             .populate("venue")
    //             .sort({date: -1})
    //             .then(showsRes =>{
    //                 res.json(showsRes);
    //             });
    // },

    // create: function(req,res){
    //     db.Show.create(req.body)
    //             .then(showsRes => {
    //                 res.json(showsRes);
    //             });
    // },

    // findOneShow : function (req, res){
    //     db.Show.findById({_id : req.params.id})
    //             .then(showsRes => {
    //                 res.json(showsRes);
    //             });
    // },
    // deleteOneShow : function(req,res){
    //     db.Show.remove({_id : req.params.id})
    //             .then(showsRes => {
    //                 res.json(showsRes);
    //             });
    // },
    // updateOneShow : function(req,res){
    //     db.Show.findOneAndUpdate({_id:req.params.id} , req.body)
    //     .then(dbShows => res.json(dbShows));
    // }

};