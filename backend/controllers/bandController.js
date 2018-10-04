const db = require("../models");

module.exports = {

    findAllBands : function(req,res){
        db.Band.findAll({})
                .sort({date: -1})
                .then(bandsRes =>{
                    res.json(bandsRes);
                });
    },

    create: function(req,res){
        db.Band.create(req.body)
                .then(bandsRes => {
                    res.json(bandsRes);
                });
    },

    findOneBand : function (req, res){
        db.Book.findById({_id : req.params.id})
                .then(bandsRes => {
                    res.json(bandsRes);
                });
    },
    deletOneBand : function(req,res){
        db.Book.remove({_id : req.params.id})
                .then(bandsRes => {
                    res.json(bandsRes);
                });
    },
    updateOneBand : function(req,res){
        db.Book.findOneAndUpdate({_id:req.params.id} , req.body)
        .then(dbBands => res.json(dbBands));
    }
};