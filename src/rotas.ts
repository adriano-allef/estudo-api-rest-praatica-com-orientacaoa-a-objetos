import { Router } from 'express'

const rotas = Router()

rotas.get('/ ', (req, res)=>{
    res.json({mensagem: 'Servidor OK'})
})



export default rotas