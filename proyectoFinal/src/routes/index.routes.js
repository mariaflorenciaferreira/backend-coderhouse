const Router = require('express').Router;
const router = Router();

router.get('/mainRoute',(req,res)=>{
    res.send('first router')
})

module.exports = router;
