import twilio from 'twilio'

const accountSid = ''
const authToken = ''

const client = twilio(accountSid, authToken)

try {
    const message = await client.messages.create({
        body: 'Hola soy un SMS desde Node.js!',
        from: '',
        to: ''
    })
    console.log(message)
} catch (error) {
    
    console.log(error)
}
