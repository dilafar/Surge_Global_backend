import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

export default transporter;