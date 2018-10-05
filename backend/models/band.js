const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bandSchema = new Schema ({
    name : {
        type:String,
        required : true
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

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;




