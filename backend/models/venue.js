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
    city : {
        type: String,
        required : true
    },
    state: {
        type: String,
        required : true
    },
   capacity : {
       type : Number,
       required : true
    },
    genre: {
        type : String
    },
    ticket_price:{
        type : Number
    },
    Year_est:{
        type : Date
    },
    venue_tier : {
        type : Number,
        min : 1,
        Max : 3
    },
    rating  : {
        type : Number
    },
    reserved : [
        {
            from : Date,
            to   : Date
        }
    ],
    show: {
        type: Schema.Types.ObjectId,
        ref: "Show"
    }    
});

const Venue = mongoose.model("Venue", venueSchema);
module.exports = Venue;