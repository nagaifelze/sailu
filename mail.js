var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sailu.qa1@gmail.com',
        pass: 'ganesha496'
    }
});
var sendEMail = function(){
    const mailOptions = {
        from: 'sailu.qa1@gmail.com', // sender address
        to: 'sailu496@gmail.com', // list of receivers
        subject: 'protractor test reports',
        html:'test reports are here.'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });
};
module.exports = nodemailer;
exports.sendEMail = sendEMail;