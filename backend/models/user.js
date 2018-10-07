const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// const userSchema = new Schema({
module.exports = function(schema) {
    schema.add({
      local            : {
        email        : String,
        password     : String,
        role         : String
    }

// userSchema.plugin(passportLocalMongoose, {
//   //Updating username field to email rather than default "username" from LocalStrategy
//   usernameField: 'email',
});
};

// const User = mongoose.model("User", userSchema);
// module.exports = User;