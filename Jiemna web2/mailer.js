const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'mailhog',
    port: 1025
});
