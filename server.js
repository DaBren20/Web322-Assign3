const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expbs = require('express-handlebars');
const path = require("path");
const passport = require('passport');
var db = mongoose.connection;
const bodyParser = require('body-parser');
const flash = require('express-flash');
const clientSession = require('client-sessions');
const session = require('express-session');
//const PORT = process.env.PORT;
//const { check, validationResult } = require('express-validator');

/*function ensureLogin(req, res, next) {
    if (!req.clientSession.userModel) {
      res.redirect("/login");
    } else {
      next();
    }
};*/

/*app.use(clientSession({
    cookieName: "session",
    secret: `${process.env.SESSION_SECRET}`,
    duration: 2 * 60 * 1000,
    activeDuration: 1000 * 60
}));*/

//load the environment variable file
require('dotenv').config({
    path:"./config/keys.env"
});

//let urlencoded = bodyParser.urlencoded({ urlencoded: false});
app.engine('handlebars', expbs( { defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//app.use(urlencoded);
app.use(express.static(path.join(__dirname, 'public')));

//Data Parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

const userRoutes = require('./routes/User');

app.use('/user', userRoutes);

app.use((req,res,next) => {
 
    if(req.query.method=="PUT")
    {
        req.method="PUT"
    }

    else if(req.query.method=="DELETE")
    {
        req.method="DELETE"
    }

    next();
});

app.use(session({
    
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: true
}));

app.use((req,res,next) => {

    res.locals.user = req.session.user;

    next();
});

//load controllers
const homecontroller = require("./controllers/home");
const signupcontroller = require("./controllers/signup");
const mealscontroller = require("./controllers/meals");
const logincontroller = require("./controllers/login");
const splashcontroller = require("./controllers/splash");
const signincontroller = require("./controllers/signedin");
const logoutcontroller = require("./controllers/logout");
const admincontroller = require("./controllers/admin");
const meals2controller = require("./controllers/meals2");
const updatecontroller = require("./controllers/update");


//mapping 
app.use("/", homecontroller);
app.use("/meals", mealscontroller);
app.use("/signup", signupcontroller);
app.use("/login", logincontroller);
app.use("/splash", splashcontroller);
app.use("/signedin", signincontroller);
app.use("/logout", logoutcontroller);
app.use("/admin", admincontroller);
app.use("/meals2", meals2controller);
app.use("/update", updatecontroller);

app.post('/login', (req,res) => {

    const error1 = [];
    const error2 = [];

    if(req.body.email == "") {
        error1.push("This field is required.");
    }

    if(req.body.password == "") {
        error2.push("This field is required");
    }

    //This is if the user failed validation
    if(error1.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages: error1 
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }

    if(error2.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages2: error2
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }
});


//MongoDB connection
mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

//promise was resolved
.then(()=>{
    console.log(`Connection to ${db.host} is successful`)
})
.catch((err)=> console.log(`Error occured : ${err}`)
)

app.post("/signup", (req, res) => {
    var first = req.body.firstname;
    var last = req.body.lastname;
    var mail = req.body.email;
    var pass = req.body.password;
    
    var data =  {
        "first_name": first,
        "last_name": last,
        "email": mail,
        "password": pass
    }

    const user = new User(newUser);

    user.save().catch( err => err);
    console.log(`first name: ${ first }`);
    console.log(` last name: ${ last } `);
    console.log(` email: ${ mail } `);
    console.log(` password: ${ pass } `);
});

app.post('/signup', function(req, res) {
    var first = req.body.firstname;
    var last = req.body.lastname;
    var mail = req.body.email;
    var pass = req.body.password;

    var data =  {
        "first_name": first,
        "last_name": last,
        "email": mail,
        "password": pass
    }

    db.collection('Assignment3').insertOne(data, function(err, collection){
        if(err) {
            throw err;
        }
        else {
            console.log("Record inserted successfully");
        }
    });

});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Express http server listening on: ", PORT);
});