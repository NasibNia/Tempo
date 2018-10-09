const db = require("../models");

module.exports = {

    findAllBands : function(req,res){
        db.Band.findAll({
            include : [{
                model : db.Show({
                    include : [{
                        model : db.Show
                    }]
                })
            }],  
            order : ['updatedAt', 'DESC']
        })
        .then(bandsRes =>{
            res.json(bandsRes);
        });

        // db.Band.find({})
        //         .populate({
        //             path: 'show',
        //             populate: {
        //             path: 'venue',
        //             model: 'Venue'
        //             } 
        //         })
        //         .sort({date: -1})
        //         .then(bandsRes =>{
        //             res.json(bandsRes);
        //         });
    },

    create: function(req,res){
        console.log("before create    ",req.body);
        db.Band.create(req.body)
                .then(bandsRes => {
                    console.log("after create     ",bandsRes);
                    res.json(bandsRes);
                });
    },

    findOneBand : function (req, res){
        db.Band.findOne({
            where : {
                id : req.params.id
            },
            include : [db.Show]
            })
            .then(bandsRes => {
                res.json(bandsRes);
            });
        // db.Band.findOne({_id : req.params.id})
        //         .then(bandsRes => {
        //             res.json(bandsRes);
        //         });
    },
    deleteOneBand : function(req,res){
        db.Band.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });
        // db.Band.remove({_id : req.params.id})
        //         .then(bandsRes => {
        //             res.json(bandsRes);
        //         });
    },
    updateOneBand : function(req,res){
        db.Band.update(
            req.body,
            {where :{
                id : req.params.id
            }
        })
        .then(dbBands => res.json(dbBands));

        // db.Band.findOneAndUpdate({_id:req.params.id} , req.body)
        // .then(dbBands => res.json(dbBands));
    }
    
};