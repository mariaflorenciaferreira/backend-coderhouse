import express from 'express'
import indexRoute from './src/routes/index.routes.js'
import 'dotenv/config'
import cors from 'cors'







//inicio   chat
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

const httpServer = createServer();
const io = new Server(httpServer);


io.on("connection", async socket => {
	const Chats = new Chat();
	let mensajesChat = await Chats.getAll();
	logger.info("Se contectó un usuario");

	const mensaje = {
		mensaje: "ok",
		mensajesChat
	};

	socket.emit("mensaje-servidor", mensaje);

	socket.on("mensaje-nuevo", async (msg, cb) => {
		console.log(mensajesChat);

		mensajesChat.push(msg);
		console.log(mensajesChat);
		const mensaje = {
			mensaje: "mensaje nuevo",
			mensajesChat
		};

		const id = new Date().getTime();
		io.sockets.emit("mensaje-servidor", mensaje);
		cb(id);
		await Chats.save({
			id,
			mail: msg.mail,
			msg: msg.msg
		});
	});
});


// io.on('connection',async (socket)=>{
//     console.log('usuario conectado')
    
//     // cargar comentarios

//     const comentarios= await  DbComentarios.getAllComments()

//     const listadoComentarios={
//         mensaje:'listado comentarios disponible',
//         comentarios
//     }

//     io.emit('comentarios',listadoComentarios)
    
//     // nuevo comentario
//     socket.on('nuevo-comentario',nuevoComentario=>{
//         console.log('se agrego un nuevo comentario');
//         DbComentarios.save(nuevoComentario)
//         io.emit('comentarios',listadoComentarios)
        
//     })
    
// })


// fin intento de chat


const app = express()

var allowList = ['http://127.0.0.1:5173', 'http://localhost:5173','http://127.0.0.1:8080','http://localhost:8080']

const corsOptions= (req, callback) => {
    let corsOptions

    let isDomainAllowed = allowList.indexOf(req.header('Origin')) !== -1
    
    let isExtensionAllowed = req.path.endsWith('.jpg')
    
    console.log(isExtensionAllowed)

    if (isDomainAllowed) {
        corsOptions = { origin: true }
    }else {
        corsOptions = { origin: false }
        console.log('error de cors')
    }
    callback(null, corsOptions)
}



app.use(express.static('public'))
// app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(indexRoute)

export default app;