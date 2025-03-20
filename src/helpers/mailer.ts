import nodemailer from 'nodemailer'
export const sendMail = async ({email, emailType, userId}:any) => {
    try {

        //TODO: configure mail for usage
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const mailOptions = {
            from: 'sam@email.com', // sender address
            to: email, // list of receivers
            subject: emailType==='VERIFY'?'Verify your email':'Reset Your password', // Subject line
            html: "<b>Hello world?</b>", // html body
        }
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);


    } catch (error) {
        console.log("Error sending mail", error);
    }
}