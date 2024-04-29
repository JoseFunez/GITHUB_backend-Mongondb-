import {Request, Response} from 'express';
import { ComentarioSchema } from '../model/comentario.schema';


export const obtenerComentario = (req: Request, res: Response) => {
    ComentarioSchema.findOne({id_comentario: req.params.id_comentario}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerComentarios = async (req: Request, res: Response) => {
    ComentarioSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarComentario = (req:Request, res:Response)=> {
  const p = new ComentarioSchema(
      {
          "id_comentario": req.body.id_comentario,
          "id_usuario": req.body.id_usuario,
          "comentario": req.body.comentario,
          "fecha_comentario": req.body.fecha_comentario
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const eliminarComentario = (req:Request, res:Response)=> {
    ComentarioSchema.deleteOne({id_comentario: req.params.id_comentario})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}