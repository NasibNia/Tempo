module.exports = function(sequelize , DataTypes){
        const Rating = sequelize.define("Rating" , {
    
            rating : {
                type : DataTypes.DOUBLE,
            },   
            // user sending the rating is band or not
            userIsBand : {
                type : DataTypes.BOOLEAN,
                allowNull: false
            },           
        });
    
        Rating.associate = function(models){
            Rating.belongsToMany(models.Band, {through: {model : models.BandShow}});
            Rating.belongsTo(models.Band);
            Rating.belongsTo(models.Venue);
            Rating.belongsTo(models.Show);
        };
        return Rating;
    };
