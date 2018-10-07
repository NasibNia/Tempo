const db = require("../models");
const passport =require ("../config")

module.exports = {

    bandSignup : async (req, res, next) => {
        try {
          const user = new db.User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          });
          await user.setPassword(req.body.password);
          await user.save();
    
          const emailData = getSignUpText(req.body.email, req.body.firstName, req.body.lastName);
          nodemailer(emailData);
    
          // log in after signing up.
          // - Add a conditional check for what type of login is occurring
          // - pass the corresponding string into the authenticate method. for the type of login occurring
          passport.authenticate('local')(req, res, next)
        } catch (err) {
          res.status(422).json(err);
        }
      }

};


