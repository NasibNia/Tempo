const bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize , DataTypes){
    var Venue = sequelize.define("Venue" , {
        name : {
            type : DataTypes.STRING,
            allowNull: false
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
            allowNull: false
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity : {
           type : DataTypes.INTEGER,
        //    allowNull: false
        },
        // genre: {
        //     type : DataTypes.STRING
        // },
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
        showsRated : {
            type : DataTypes.INTEGER

        },
        rating  : {
            type : DataTypes.DOUBLE
        },
        // reserved : [
        //     {
        //         from : DataTypes.Date,
        //         to   : DataTypes.Date
        //     }
        // ]   
    // } 
    // ,
    // {
    //     instanceMethods: {
    //       generateHash: function (password) {
    //         return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    //       },
    //       validPassword: function (password) {
    //         return bcrypt.compareSync(password, this.password);
    //       }
    //     }
    });

    Venue.associate = (models) => {
        Venue.belongsToMany(models.Show, {through : {model: models.VenueShow}});
    };
    return Venue;
    

};


// const mongoose = require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');
// const bcrypt   = require('bcrypt-nodejs');
// const user = require("./user");

// const Schema = mongoose.Schema;

// const venueSchema = new Schema ({
//     name : {
//         type:String,
//         // required : true
//     },
//     address : {
//         type : String,
//         // required : true,
//     },
//     city : {
//         type: String,
//         // required : true
//     },
//     state: {
//         type: String,
//         // required : true
//     },
//     local            : {
//         email        : String,
//         password     : String
//     },
//    capacity : {
//        type : Number,
//     //    required : true
//     },
//     genre: {
//         type : String
//     },
//     ticket_price:{
//         type : Number
//     },
//     Year_est:{
//         type : Date
//     },
//     venue_tier : {
//         type : Number,
//         min : 1,
//         Max : 3
//     },
//     rating  : {
//         type : Number
//     },
//     reserved : [
//         {
//             from : Date,
//             to   : Date
//         }
//     ],
//     show: {
//         type: Schema.Types.ObjectId,
//         ref: "Show"
//     }    
// });

// // venueSchema.plugin(user);

// venueSchema.plugin(passportLocalMongoose, {
//     //Updating username field to email rather than default "username" from LocalStrategy
//     usernameField: 'email',
//   });

// // methods ======================
// // generating a hash
// venueSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// venueSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// const Venue = mongoose.model("Venue", venueSchema);
// module.exports = Venue;