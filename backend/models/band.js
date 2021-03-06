
// const bcrypt   = require('bcrypt-nodejs');
// // const Sequelize = require('sequelize');
// const bcrypt = require("bcrypt");



module.exports = function(sequelize , DataTypes){
//     // console.log(DataTypes)
    const Band = sequelize.define("Band" , {

        userType : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        name : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            // allowNull: false,
            unique: true
        },
        password : {
            type: DataTypes.STRING,
            // allowNull: false
        },
        genres : {
            //when getting this info, must JSON.parse
            type: DataTypes.TEXT,
            allowNull: true
        },
        rock : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        hiphop : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        pop : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        electronic : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        club : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        jazz : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        acoustics : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: true
        },
        soundcloud : {
            type: DataTypes.TEXT,
            allowNull: true
        },
        spotify : {
            type: DataTypes.TEXT,
            allowNull: true
        },
        facebook : {
            type: DataTypes.TEXT,
            allowNull: true
        },
        profilePic : {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ticket_price:{
            type : DataTypes.INTEGER
        },
        average_draw:{
            type : DataTypes.INTEGER
        },
        readyToGig : {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        // showsPlayed :{
        //     type: DataTypes.INTEGER
        // },
        // showsCancelled : {
        //     type: DataTypes.INTEGER
        // },
        // showsLate: {
        //     type : DataTypes.INTEGER
        // },

        // genre : [
        //         type: DataTypes.TEXT
        // ],
    
        // lookingForVenue : [
        //     {
        //         from : DataTypes.DATE,
        //         to   : DataTypes.DATE,
        //         zipCode : DataTypes.STRING
        //     }
        // ]

    });

    Band.associate = (models) => {
        Band.belongsToMany(models.Show, {through : {model: models.BandShow}});
    };
    return Band;
};





