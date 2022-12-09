require('dotenv').config()
const twilio=require('twilio')

const accountSid = process.env.accountSid
const authToken = process.env.authToken
const client =twilio(accountSid,authToken)

const options = {
    body: 'Holasoy un WSP desde Node.js!',
    mediaUrl: ['https://www.chetu.com/img/twilio/partner/twilio-logo.png'],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5493513273101'
}

;(async () => {
    try {
        const message = await client.messages.create(options)
        console.log(message)
    } catch (error) {
        console.log(error)
    }
})()
