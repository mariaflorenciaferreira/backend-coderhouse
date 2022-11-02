
const express=require('express')
const multer= require('multer')

const app=express()

app.use('public',express.static(__dirname +'public'))


// configuracion multer

const storage=multer.diskStorage({
    destination: (req,_file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now() }-${file.originalname}`)
    }
})

const upload=multer({storage})

app.post('/uploadfile',upload.single('miArchivo'),(req,res,next)=>{
    const {file} = req
    if (!file){
        const error =   new Error('Por favor suba un archivo')
        error.httpStatusCode = 400  
        return next(error)
    }
    res.send(file)

})

app.post('/uploadfiles', upload.array('misArchivos'), (req, res, next)=>{
    const {files} = req
    
    if (!files || files.length === 0) {
        const error =   new Error('Por favor suba un archivo como mínimo')
        error.httpStatusCode = 400  
        return next(error)
    }
    res.send(files)
})



app.get('/api',(req,res)=>{
    res.sendFile(__dirname + '/public/indexMulter.html')
})

app.listen(4000,()=>{
    console.log('server on port 4000')
})