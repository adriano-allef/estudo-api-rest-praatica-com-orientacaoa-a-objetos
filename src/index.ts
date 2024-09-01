import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/ ', (req, res)=>{
    res.json({mensagem: 'Servidor OK'})
})

const porta = process.env.PORT

app.listen(porta, () => {
    console.log(`Servidor inicializado na porta ${porta}`)
})