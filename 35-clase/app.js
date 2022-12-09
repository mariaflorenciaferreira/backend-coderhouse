import { createTransport } from 'nodemailer';

// const TEST_MAIL = 'juston.walsh@ethereal.email'
const TEST_MAIL = '@gmail.com'

const transporter = createTransport({
    // host: 'smtp.ethereal.email',
    service: 'gmail',
    port: 587,
    auth: {
        user: TEST_MAIL,
        // pass: 'N1jzev31QP5JwPXSz4'
        pass: ''
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments:[
        {
            path:'https://raw.githubusercontent.com/andris9/Nodemailer/master/assets/nm_logo_200x136.png'
        }
    ]
} 

;(async () => {
    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error)
    }
})()


//google app nodemailer
//contraseña de google
