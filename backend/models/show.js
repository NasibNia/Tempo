const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema(
    {name : {
        type: String
    },
    time_start : {
        type : Date,
        required : true
    },
    time_end : {
        type: Date,
        required : true
    },    
    venue: {
        type: Schema.Types.ObjectId,
        ref: "Venue"
    },   
    band: [{
        type: Schema.Types.ObjectId,
        ref: "Band"
    }]    
}
);

const Show = mongoose.model("Show", showSchema);
module.exports = Show;