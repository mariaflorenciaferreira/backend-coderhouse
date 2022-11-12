const twilio=require('twilio')

const accountSid = process.env.accountSid
const authToken = process.env.authToken
const client =twilio(accountSid,authToken)

const options = {
    body: 'Envio datos de orden de compra',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+549'
}

const envioWpp= (async () => {
    try {
        const message = await client.messages.create(options)
        console.log(message)
    } catch (error) {
        console.log(error)
    }
})

module.exports=envioWpp