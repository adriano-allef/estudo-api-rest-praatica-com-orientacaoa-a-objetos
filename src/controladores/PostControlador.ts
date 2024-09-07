import { Request, Response } from "express";
import { autores, posts } from "../bancodedados";
import Autor from "../modelos/Autor";
import Post from "../modelos/Post";



export default class PostControlador {

    listar(req: Request, res: Response){
        return res.json(posts)
    }

    detalhar(req: Request, res: Response){
        const { id } = req.params

        const post = posts.find((post) => {
            return post.id === id
    })

    if(!post){
        return res.status(404).json({
            mensagem: 'Post não encontrado!'
        })
    }
    return res.json(post)
    }

    cadastrar(req: Request, res: Response){
        const { titulo, descricao, autor_id } = req.body

        if(!titulo || !descricao ||autor_id){
            return res.status(400).json({
                mensagem: 'Todos os campos são obrigatórios!'
            })
        }

        const autor = autores.find((elemento) => {
            return elemento.id === autor_id
        })

        if(!autor){
            return res.status(404).json({
                mensagem: 'Autor não encontrado!'
            })
        }

        const post = new Post({
            titulo,
            descricao,
            autor

        })

        return res.status(201).json(post)

        
    }

    editar(req: Request, res: Response){
        const { id } = req.params
        const{ titulo, descricao } = req.body

        const post = posts.find((post) => {
            return post.id === id
    })

    if(!titulo || !descricao ){
        return res.status(400).json({
            mensagem: 'Titulo e descrição são obrigatórios!'
        })
    }

    if(!post){
        return res.status(404).json({
            mensagem: 'Post não encontrado!'
        })
    }

    post.titulo = titulo
    post.descricao = descricao

    return res.status(201).json(post)
        
    }

    excluir(req: Request, res: Response){
        const { id } = req.params
        
        const postIndice = posts.findIndex((post) => {
            return post.id === id
    })

    if(postIndice === -1){
        return res.status(404).json({
            mensagem: 'Post não encontrado!'
        })
    }

    posts.splice(postIndice, 1)

    return res.status(204).send()
    }
}