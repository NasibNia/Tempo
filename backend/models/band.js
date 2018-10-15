

// const bcrypt   = require('bcrypt-nodejs');
// // const Sequelize = require('sequelize');
// const bcrypt = require("bcrypt");



module.exports = function(sequelize , DataTypes){
//     // console.log(DataTypes)
    const Band = sequelize.define("Band" , {

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
        description : {
            //when getting this info, must JSON.parse
            type: DataTypes.TEXT,
            allowNull: true
        },
        soundcloud : {
            type: DataTypes.STRING,
            allowNull: true
        },
        spotify : {
            type: DataTypes.STRING,
            allowNull: true
        },
        profilePic : {
            type: DataTypes.TEXT,
            allowNull: true
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
        //         type: DataTypes.STRING
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





