import {Request, Response} from 'express';
import { Discuss_comentSchema } from '../model/discuss_coment.schema';


export const obtenerDiscuss_coment = (req: Request, res: Response) => {
    Discuss_comentSchema.findOne({id_comentario: req.params.id_comentario}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerDiscuss_coments = async (req: Request, res: Response) => {
    Discuss_comentSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarDiscuss_coment = (req:Request, res:Response)=> {
  const p = new Discuss_comentSchema(
      {
          "id_comentario": req.body.id_comentario,
          "id_usuario": req.body.id_usuario,
          "id_discusion": req.body.id_discusion,
          "contenido": req.body.contenido,
          "fecha_creacion": req.body.fecha_creacion
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarDiscuss_coment = (req:Request, res:Response)=> {
    Discuss_comentSchema.updateOne({id_comentario: req.params.id_comentario}, {

      id_comentario: req.body.id_comentario,
      id_usuario: req.body.id_usuario,
      id_discusion: req.body.id_discusion,
      contenido: req.body.contenido,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarDiscuss_coment = (req:Request, res:Response)=> {
    Discuss_comentSchema.deleteOne({id_comentario: req.params.id_comentario})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}