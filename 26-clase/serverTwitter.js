const express=require('express')
const dotenv=require('dotenv').config()

const passport=require('passport')
const twitterStrategy=require('passport-twitter').Strategy
const expresSession=require('express-session')
const app=express()



app.use(expresSession({
    secret:'secret'
}))

app.get('/home',(req,res)=>{
    res.send('home')
})

passport.use(new twitterStrategy({
    consumerKey: process.env.YOUR_CONSUMER_KEY,
    consumerSecret:process.env.YOUR_CONSUMER_SECRET,
    callbackURL:'http://localhost:4000/auth/twitter/callback'
},
    function(token,tokenSecret,profile,done){
        User.findOrCreate({twitterId:profile.id},function(err,user){
            
            if(err){
                return done (err)
            }
            return done(err,user)
        })
        return done(err,user)
    }


))


app.get('/auth/twitter',passport.authenticate('twitter'))
app.get('/auth/twitter/callback',passport.authenticate('twitter', {
    failureRedirect:'/login',
    successRedirect:'/home'
}))





app.listen(4000,()=>{
    console.log(`Server running`)
})