import 'dotenv/config'
import express from 'express'
import rotas from './rotas'

const app = express()

app.use(express.json())

app.use(rotas)

const porta = process.env.PORT

app.listen(porta, () => {
    console.log(`Servidor inicializado na porta ${porta}`)
})