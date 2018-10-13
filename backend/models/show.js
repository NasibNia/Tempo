module.exports = function(sequelize , DataTypes){
    var Show = sequelize.define("Show" , {
        name : {
            type: DataTypes.STRING
        },
        date : {
            type : DataTypes.DATE,
        },
        time_start : {
            type : DataTypes.TIME,
        },
        time_end : {
            type: DataTypes.TIME,
        },       

    });

    Show.associate = function(models){
        Show.belongsToMany(models.Band, {through: {model : models.BandShow}});
        Show.belongsToMany(models.Venue, {through: {model : models.VenueShow}});


    };
    // Show.associate = function(models){
    //     Show.belongsToMany(models.Band, {through: {model : models.BandShow}});
    // };
    return Show;
};
    


// const mongoose = require ("mongoose");
// const Schema = mongoose.Schema;

// const showSchema = new Schema(
//     {name : {
//         type: String
//     },
//     time_start : {
//         type : Date,
//         required : true
//     },
//     time_end : {
//         type: Date,
//         required : true
//     },    
//     venue: {
//         type: Schema.Types.ObjectId,
//         ref: "Venue"
//     },   
//     band: [{
//         type: Schema.Types.ObjectId,
//         ref: "Band"
//     }]    
// }
// );

// const Show = mongoose.model("Show", showSchema);
// module.exports = Show;