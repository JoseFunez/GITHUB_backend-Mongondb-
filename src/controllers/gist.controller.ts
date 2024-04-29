import {Request, Response} from 'express';
import { GistSchema } from '../model/gist.schema';


export const obtenerGist = (req: Request, res: Response) => {
    GistSchema.findOne({id_gist: req.params.id_gist}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerGists = async (req: Request, res: Response) => {
    GistSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarGist = (req:Request, res:Response)=> {
  const p = new GistSchema(
      {
          "id_gist": req.body.id_gist,
          "id_usuario": req.body.id_usuario,
          "descripcion_gist": req.body.descripcion_gist,
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

export const actualizarGist = (req:Request, res:Response)=> {
    GistSchema.updateOne({id_Gist: req.params.id_Gist}, {
      
      id_gist: req.body.id_gist,
      id_usuario: req.body.id_usuario,
      descripcion_gist: req.body.descripcion_gist,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarGist = (req:Request, res:Response)=> {
    GistSchema.deleteOne({id_gist: req.params.id_gist})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
