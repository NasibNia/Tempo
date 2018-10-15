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

    return Show;
};
