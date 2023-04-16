const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../schema/user')
const validPassword = require('./passwordUtils').validPassword;


const verifyCallback = async(username, password, done) => {
    try{
        const user = await  User.findOne({ username: username })
        if (!user) { return done(null, false) }
                
        const isValid = validPassword(password, user.hash, user.salt);
        
        if (isValid) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }catch(err) {   
                done(err);
     };
    }

const strategy  = new LocalStrategy(verifyCallback);
passport.use(strategy);


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(userId, done) => {
    try{
        const user = await User.findById(userId)
        console.log('Deserialized user:', user);
        done(null, user);
    }catch(err){
        console.log('Error deserializing user:', err);
        done(err);
    }
});