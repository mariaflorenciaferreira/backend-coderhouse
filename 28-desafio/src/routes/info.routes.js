const Router = require('express').Router;
const router = Router();


const infoProyecto={
    argEntrada:process.argv.slice(2),
    plataforma:process.platfotm,
    nodeVersion:process.version,
    memoriaTotal:process.memoryUsage().rss,
    pathEjecucion:process.execPath,
    processId:process.pid,
    carpeta:process.cwd

}



router.get('/', (req,res)=>{
    res.render('info',{
        informacion:infoProyecto
    })
});




module.exports = router;