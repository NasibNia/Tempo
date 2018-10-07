const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt   = require('bcrypt-nodejs');
const user = require("./user");


const Schema = mongoose.Schema;

const bandSchema = new Schema ({
    name : {
        type:String,
        // required : true
    },
    local            : {
        email        : String,
        password     : String
    },
    // members : [
    //     {
    //         name     : String,
    //         imageUrl : String,
    //         role     : String,
    //         bio      : String
    //     }
    // ],
    
    stats  : {
        showsPlayed :{
            type:Number
        },
        showsCancelled : {
            type: Number
        },
        showsLate: {
            type : Number
        },

        venueRating : {
            type : Number        
        },
    },
    genre : [
        {
            type: String,
        }
    ],

    lookingForVenue : [
        {
            from : Date,
            to   : Date,
            zipCode : String
        }
    ],
    show : [
        {type : Schema.Types.ObjectId , ref : 'Show'}
    ]
});

// bandSchema.plugin(user);

// bandSchema.plugin(passportLocalMongoose, {
//     //Updating username field to email rather than default "username" from LocalStrategy
//     usernameField: 'email',
//   });

// methods ======================
// generating a hash
bandSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
bandSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;




