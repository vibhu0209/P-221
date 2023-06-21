const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'vibhu0209@gmail.com',
        pass: 'ljcedcqwclegsfiv',
    },
    secure: true,
});

server.listen(process.env.PORT || 3030);
