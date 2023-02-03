// DEPENDENCIES //
const express = require('express')
const app = express()
const cors = require("cors")
const passport = require('./config/passport')()
require('dotenv').config()
const port = process.env.PORT
const methodOverride = require('method-override');
const path = require("path")
// const cors = require('cors') // ???

// ACCESS MODELS //
const db = require('./models')

// const PORT = process.env.PORT // ???

// ACCESS CONTROLLERS //
const zombiesCtrl = require('./controllers/zombies')
const usersCtrl = require('./controllers/users')





// MIDDLEWARE //
// CORS ALLOWS OUR FRONTEND TO COMMUNICATE WITH THE BACKEND //
app.use(cors())

// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

// SET FOLDER FOR STATIC FILES //
// app.use(express.static('public'))
// SET THE VIEW ENGINE TO EJS FOR OUR APP (THIS ALLOWS US TO RENDER EJS FILES WITHOUT USING '.EJS' AFTER FILE NAMES.) //
// app.set('view engine', 'ejs')
// METHOD-OVERRIDE ALLOWS US TO INTERPRET POST REQUESTS FROM THE BROWSER AS ANOTHER REQUEST TYPE: DELETE, PUT, ETC. //
// app.use(methodOverride('_method'));
// BODY PARSER: USED FOR POST/PUT/PATCH ROUTES: THIS WILL TAKE INCOMING STRINGS FROM THE BODY THAT ARE URL ENCODED AND PARSE THEM INTO AN OBJECT THAT CAN BE ACCESSED IN THE REQUEST PARAMETER AS A PROPERTY CALLED BODY (REQ.BODY). //
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(passport.initialize())






// ROUTES //



// ALL ROUTES AFFECTING THE ZOMBIE MODEL:  THIS TELLS THE APP TO LOOK AT THE 'CONTROLLERS/ZOMBIES.JS' FILE TO HANDLE ALL ROUTES THAT BEGIN WITH 'LOCALHOST:3000/ZOMBIE' //
app.use('/zombies', zombiesCtrl)

// ALL ROUTES AFFECTING THE USER MODEL:  THIS TELLS THE APP TO LOOK AT THE 'CONTROLLERS/USER.JS' FILE TO HANDLE ALL ROUTES THAT BEGIN WITH 'LOCALHOST:3000/USER' //
app.use('/users', usersCtrl)

// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});



// LISTENER //
// app.listen(port, () => {
//     console.log(`App is running at localhost:${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})

