const {createTransport} =require ('nodemailer');


const TEST_MAIL =process.env.TEST_MAIL
const PASSWORD =process.env.PASSWORD

const productos='productoscarrito'

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: PASSWORD
    }
});

const mailOptions = {
    from: 'Tercera entrega',
    to: TEST_MAIL,
    subject: 'Mail de prueba de compra',
    html: `<h1 >Contenido de prueba desde entrega </h1> <p>Productos comprados: ${productos}</p>`,

} 

const envioMail = (async () => {
    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error)
    }
})

module.exports=envioMail