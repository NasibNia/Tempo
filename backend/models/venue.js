const bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize , DataTypes){
    var Venue = sequelize.define("Venue" , {
        
        userType : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        name : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        address : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        city : {
            type: DataTypes.STRING,
            // allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            unique : true,
            allowNull: false
        },
        password : {
            type: DataTypes.STRING,
            // allowNull: false
        },
        capacity : {
           type : DataTypes.INTEGER,
        //    allowNull: false
        },
        genres: {
            type : DataTypes.TEXT
        },
        description : {
            //when getting this info, must JSON.parse
            type: DataTypes.TEXT,
            allowNull: true
        },
        ticket_price:{
            type : DataTypes.INTEGER
        },
        Year_est:{
            type : DataTypes.DATE
        },
        venue_tier : {
            type : DataTypes.INTEGER,
            min : 1,
            Max : 3
        },
        totalShows : {
            type : DataTypes.INTEGER

        },
        rating  : {
            type : DataTypes.DOUBLE
        },
        readyToBook : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        website :  {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number :  {
            type: DataTypes.STRING,
            allowNull: true
        },
        website_description:  {
            type: DataTypes.STRING,
            allowNull: true
        },
        average_ticket_price: {
            type: DataTypes.STRING,
            allowNull: true
        },
        venue_picture_url: {
            type: DataTypes.STRING,
            allowNull: true
        }

        // reserved : [
        //     {
        //         from : DataTypes.Date,
        //         to   : DataTypes.Date
        //     }
        // ]   

    });

    Venue.associate = (models) => {
        Venue.belongsToMany(models.Show, {through : {model: models.VenueShow}});
    };
    return Venue;
    

};

