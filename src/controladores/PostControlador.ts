import { Request, Response } from "express";
import { autores, posts } from "../bancodedados";
import Autor from "../modelos/Autor";



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
    }

    editar(req: Request, res: Response){
        // buscar o autor que vai ser editado
        
        
    }

    excluir(req: Request, res: Response){
        

    }
}