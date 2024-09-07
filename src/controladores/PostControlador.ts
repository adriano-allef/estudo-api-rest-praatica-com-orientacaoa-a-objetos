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
        // buscar o autor que vai ser editado
        
        
    }

    excluir(req: Request, res: Response){
        

    }
}