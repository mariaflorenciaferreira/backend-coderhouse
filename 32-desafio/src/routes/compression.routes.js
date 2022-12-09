const Router = require('express').Router;
const router = Router();
const os = require('os')



const compression=require('compression')

    const infoComprimida={
        argEntrada:process.argv.slice(2),
        plataforma:process.platfotm,
        nodeVersion:process.version,
        memoriaTotal:process.memoryUsage().rss,
        pathEjecucion:process.execPath,
        processId:process.pid,
        carpeta:process.cwd,
        numCPUs:os.cpus().length
    }  



router.get('/',compression(), (req,res)=>{
    res.render('infoGzip',{
        infoComprimida:infoComprimida
    })
});


module.exports = router;