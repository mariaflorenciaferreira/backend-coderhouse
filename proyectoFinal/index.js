const express = require("express");
const app = express();
const mongoose = require('mongoose')

const config=require('./src/config/config')
const os = require("os");
const PORT= config.PORT || 8080
// const MODO = config.MODO 

const indexRoutes=require('./src/routes/index.routes')
require('./src/DB/connect-mongo');



app.use('/api',indexRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})



// if (MODO == "cluster") {

//     const numCPUs = os.cpus().length

//     if (cluster.isMaster) {
//         console.log(`Number of CPUs is ${numCPUs}`);
//         console.log(`Master ${process.pid} is running`);

//         // Fork workers
//         for (let i = 0; i < numCPUs; i++) {
//             cluster.fork();
//         }

//         cluster.on("exit", (worker, code, signal) => {
//             console.log(`worker ${worker.process.pid} died`);
//             console.log("Let's fork another worker!");
//             cluster.fork();
//         });
//     } else {
//         const app = express();
//         console.log(`Worker ${process.pid} started`);

//         app.get("/", (req, res) => {
//             res.send("Hello World!");
//         });

        

//         app.listen(PORT, () => {
//             console.log(`App listening on port ${PORT}`);
//         });
//     }

// } else {

//     console.log(`Ejecutando fork`)
//     app.listen(PORT, () => console.log(`running on port ${PORT.p} + ${MODO} `));

// }
