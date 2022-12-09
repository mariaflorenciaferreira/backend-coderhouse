const {usersDao} =require('../daos/index')


const getUsers=async (req,res)=>{
	productosDao.getAll()
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            console.log(`Problema al recuperar archivo ${error}`)
        })
}

const getUserBy=async(req,res)=>{
    const {username}= req.body
    usersDao.getByUsername(username)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        console.log(err)
    })
}




module.exports = {
	getUsers,
    getUserBy
}