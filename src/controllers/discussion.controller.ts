import {Request, Response} from 'express';
import { DiscussionSchema } from '../model/discussion.schema';


export const obtenerDiscussion = (req: Request, res: Response) => {
    DiscussionSchema.findOne({id_discusion: req.params.id_discusion}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerDiscussions = async (req: Request, res: Response) => {
    DiscussionSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarDiscussion = (req:Request, res:Response)=> {
  const p = new DiscussionSchema(
      {
          "id_discusion": req.body.id_discusion,
          "id_repositorio": req.body.id_repositorio,
          "id_usuario": req.body.id_usuario,
          "contenido": req.body.contenido,
          "titulo": req.body.titulo,
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

export const actualizarDiscussion = (req:Request, res:Response)=> {
    DiscussionSchema.updateOne({id_discusion: req.params.id_discusion}, {

      id_discusion: req.body.id_discusion,
      id_repositorio: req.body.id_repositorio,
      id_usuario: req.body.id_usuario,
      contenido: req.body.contenido,
      titulo: req.body.titulo,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarDiscussion = (req:Request, res:Response)=> {
    DiscussionSchema.deleteOne({id_discusion: req.params.id_discusion})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}