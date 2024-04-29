import {Request, Response} from 'express';
import { TagSchema } from '../model/tag.schema';


export const obtenerTag = (req: Request, res: Response) => {
    TagSchema.findOne({id_tag: req.params.id_tag}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerTags = async (req: Request, res: Response) => {
    TagSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarTag = (req:Request, res:Response)=> {
  const p = new TagSchema(
      {
          "id_tag": req.body.id_tag,
          "id_repositorio": req.body.id_repositorio,
          "titulo": req.body.titulo,
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

export const actualizarTag = (req:Request, res:Response)=> {
    TagSchema.updateOne({id_tag: req.params.id_tag}, {
      
      id_tag: req.body.id_tag,
      id_repositorio: req.body.id_repositorio,
      titulo: req.body.titulo,
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

export const eliminarTag = (req:Request, res:Response)=> {
    TagSchema.deleteOne({id_tag: req.params.id_tag})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}