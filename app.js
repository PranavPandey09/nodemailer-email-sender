// install nodemailer libararay

// import nodemailer
const nodemailer = require('nodemailer');

//3. cofigure mail and send it
async function sendMail(){
    // create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'pranavjii123@gmail.com',
            pass: 'ksob wzou dbra mkii'
        }
    })
    // configure email content.
    const mailOptions = {
        from:'pranavjii123@gmail.com',
        to: 'pranavjii123@gmail.com',
        subject: 'Welcome to NodeJS App',
        text: 'This is an email using nodemail in nodejs',
        html: "<b>Hello world </b>",
    }

    // send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Email sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}
sendMail()