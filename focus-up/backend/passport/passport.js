const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../schema/User')

const verifyCallback = (username, password, done) => {

    Users.findOne({ username: username })
        .then((user) => {

            if (!user) { return done(null, false) }
            
            const isValid = validPassword(password, user.hash, user.salt);
            
            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {   
            done(err);
        });
}