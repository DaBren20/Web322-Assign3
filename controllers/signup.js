const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' } );
});

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Create Your Account' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/meals', (req, res) => {
    res.render('meals', { title: 'Meal Packages' });
});

router.get('/signedin', (req, res) => {
    res.render('signedin', { title: 'signed in' });
});

router.get('/admin', (req, res) => {
    res.render('admin', { title: 'Admin Page'});
});

router.get('/meals2', (req, res) => {
    res.render('meals2', { title: 'Meal Packages' });
});

router.post('/signup', (req,res) => {

    const { firstname, lastname, email, password } = req.body
    
    //console.log(req.body);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `${email}`,
      from: `bkpoliusprosper@myseneca.ca`,
      subject: 'Thank you for signing up!',
      html: `<strong>Thank you for signing up ${firstname} ${lastname}</br>
            Email: ${email}
            </strong>`,
    };
    
    //Asynchronous operation
    sgMail.send(msg)
    .then(()=> {
        res.redirect("/splash");
    })
    
    .catch(err => {
        console.log(`Error ${err}`);
    })

    const error1 = [];
    const error2 = [];
    const error3 = [];
    const error4 = [];
    const error5 = [];

    if(req.body.firstname == "") {
        error1.push("This field is required.");
    }

    if(req.body.lastname == "") {
        error2.push("This field is required");
    }

    if(req.body.email == "") {
        error3.push("This field is required.");
    }

    if(req.body.password == "") {
        error4.push("This field is required");
    }

    else {
        const match = req.body.password.match(/^.{5,12}$/);
        if(match == null) {
            error5.push("Password must be between 5 and 12 characters.");
        }
    }

    //This is if the user failed validation
    if(error1.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error1 
        });
        return;
    }

    if(error2.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error2
        });
        return;
    }

    if(error3.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error3
        });
        return;
    }

    if(error4.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error4
        });
        return;
    }
    
    if(error5.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error5
        });
        return;
    }

    });

    router.get('/logout', function (req, res) {
        req.session.destroy();
        res.redirect('/login');
        console.log("Session destroyed!");
    });
module.exports = router;