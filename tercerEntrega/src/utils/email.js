// const { createTransport }= require ('nodemailer');
// require('dotenv').config()
// const parseArgs = require ("minimist");


// const MAIL_PORT=process.env.MAIL_PORT
// const MAIL_TEST = process.env.MAIL_TEST 
// const MAIL_PASS=process.env.MAIL_PASS

// const transporter = createTransport({
//     service: 'gmail',
//     port: parseInt(MAIL_PORT),
//     auth: {
//         user: MAIL_TEST,
//         pass: MAIL_PASS
//     }
// });

// const mailOptions = {
//     from: 'Tercera entrega coder',
//     to: MAIL_TEST,
//     subject: 'Mail de prueba desde Tercer entrega',
//     html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">tercer entrega con Nodemailer</span></h1>',
//     attachments:[
//         {
//             path:'https://raw.githubusercontent.com/andris9/Nodemailer/master/assets/nm_logo_200x136.png'
//         }
//     ]
// } 

// ;(async () => {
//     try {
//         const info = await transporter.sendMail(mailOptions)
//         console.log(info)
//     } catch (error) {
//         console.log(error)
//     }
// })()

