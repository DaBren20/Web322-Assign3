const express = require('express')
const router = express.Router();

function ensureLogin(req, res, next) {
    if (!req.clientSession.userModel) {
      res.redirect("/login");
    } else {
      next();
    }
};

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

router.get('/signedin', ensureLogin, (req, res) => {
    res.render('signedin', { title: 'signed in' });
});

router.get('/admin', (req, res) => {
    res.render('admin', { title: 'Admin Page'});
});

router.get('/meals2', (req, res) => {
    res.render('meals2', { title: 'Meal Packages' });
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
    console.log("Session destroyed!");
});


module.exports = router;