const nodemailer = require('nodemailer');

export function post(req, res) {

    console.log(req.body);

    // Load data
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport(
        `smtps://${process.env.EMAIL_USER}:${process.env.EMAIL_PASSWORD}@${process.env.EMAIL_HOST}`
    );

    const mailOptions = {
        from: '"Pamek AB" <info@pamek.nu>',
        to: 'info@pamek.nu',
        subject: `Meddelande - ${subject}`,
        text: `Meddelande från ${name}\n\nEmail: ${email}\n\nTelefonnummer: ${tel}\n\nÄmne:${subject}\n\nMeddelande:\n ${message}`,
    };

    // Send the mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(500).send();
        }
        return res.json({message: 'Message sent: ' + info.response}).send();
    });
}
