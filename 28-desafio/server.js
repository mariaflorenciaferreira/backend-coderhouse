const app = require('./index');
const yargs = require('yargs/yargs')(process.argv.slice(2));

require('./src/DB/connect-mongo');



const argsPort= yargs
    .default({
        port: 8080
    })
.argv

console.log(argsPort)


const PORT = argsPort || process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT.port}`));


