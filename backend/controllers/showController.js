const db = require("../models");

module.exports = {

    findAllShows : function(req,res){
        db.Show.find({})
                .populate("band")
                .sort({date: -1})
                .then(showsRes =>{
                    res.json(showsRes);
                });
    },

    create: function(req,res){
        db.Show.create(req.body)
                .then(showsRes => {
                    res.json(showsRes);
                });
    },

    findOneShow : function (req, res){
        db.Show.findById({_id : req.params.id})
                .then(showsRes => {
                    res.json(showsRes);
                });
    },
    deleteOneShow : function(req,res){
        db.Show.remove({_id : req.params.id})
                .then(showsRes => {
                    res.json(showsRes);
                });
    },
    updateOneShow : function(req,res){
        db.Show.findOneAndUpdate({_id:req.params.id} , req.body)
        .then(dbShows => res.json(dbShows));
    }
};