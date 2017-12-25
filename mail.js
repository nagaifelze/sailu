var nodemailer = require('nodemailer');
console.log('sending mail.');
const mailOptions = {
    from: 'sailu.qa1@gmail.com', // sender address
    to: 'sailu496@gmail.com', // list of receivers
    subject: 'protractor test reports',
    html:'test reports are here.'
};
nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'sailu.qa1@gmail.com',
        pass: 'ganesha496'
    },
    tls: {
        rejectUnauthorized: false
    }
}).sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err);
    else
        console.log(info);
});