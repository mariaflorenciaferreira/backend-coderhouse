const express=require('express')
const handlebars = require('express-handlebars'); 

const app=express()

const PORT=process.env.PORT||4000


app.engine(

    'hbs',
    handlebars.engine({
        extname:'.hbs',
        defaultLayout:'main',
        layoutsDir:__dirname + '/views/layouts',
        partialsDir:__dirname + '/views/partials'
    })

);


app.set('view engine', 'hbs'); // registra el motor de plantillas
app.set('views', './views'); // especifica el directorio de vistas

app.use(express.static('public'))

const fakeApi=()=>[
    
    {name:'fede', lane:'midlaner'},
    {name:'Jayce', lane:'toplaner'}
]



app.get('/',(req,res)=>{
    res.render('main', {listExist:true,list:fakeApi()})
})
app.listen(PORT,()=>{
    console.log('server is running')
})
