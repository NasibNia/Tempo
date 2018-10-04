const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    address : {
        type : String,
        required : true,
    },
    price_per_hour : {
        type : String
    },
    rating  : {
        type : Number
    },
    reserved : [
        {
            from : Date,
            to   : Date
        }
    ]   
});

const Venue = mongoose.model("Venue", venueSchema);
module.exports = Venue;