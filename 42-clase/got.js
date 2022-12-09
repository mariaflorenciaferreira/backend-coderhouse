const got = require('got')

( async () =>{
    const  { body } = await got.post('https://example.com', {
        json: {
            hello: 'world'
        },
        responseType: 'json'
    })
    console.log(body.data)
} )()
