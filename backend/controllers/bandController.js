const db = require("../models");

module.exports = {

    // tested and working    
    findAllBands : function(req,res){
        db.Band.findAll({
            include : [{
                model : db.Show
                // ({
                //     include : [{
                //         model : db.Show
                    // }]
                // })
            }],  
            
            order: [['updatedAt', 'DESC']]
        })
        .then(bandsRes =>{
            res.json(bandsRes);
        });
    },

    // tested and working
    create: function(req,res){
        console.log("before create    ",req.body);
        db.Band.create(req.body)
                .then(bandsRes => {
                    console.log("after create     ",bandsRes);
                    res.json(bandsRes);
                });
    },

    // tested and working
    findBand : function (req, res){
        db.Band.findOne({
            where : {
                id : req.params.id
            },
            include : [db.Show]
            })
            .then(bandsRes => {
                res.json(bandsRes);
            });
    },

    // tested and works
    deleteBand : function(req,res){
        console.log("delete band");
        db.Band.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(bandsRes => {
            res.json(bandsRes);
        });

    },
    updateBand : function(req,res){
        db.Band.update(
            req.body,
            {where :{
                id : req.params.id
            }
        })
        .then(dbBands => res.json(dbBands));
    }
    
};