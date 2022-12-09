const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
});



const PORT=process.env.PORT 
const server= app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
server.on('error',error=>console.log('error en servidor'))

