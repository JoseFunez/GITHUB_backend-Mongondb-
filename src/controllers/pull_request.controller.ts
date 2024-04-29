import {Request, Response} from 'express';
import { Pull_requestSchema } from '../model/pull_request.schema';


export const obtenerPull_request = (req: Request, res: Response) => {
    Pull_requestSchema.findOne({id_pull_request: req.params.id_pull_request}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerPull_requests = async (req: Request, res: Response) => {
    Pull_requestSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarPull_request = (req:Request, res:Response)=> {
  const p = new Pull_requestSchema(
      {

          "id_pull_request": req.body.id_pull_request,
          "id_repositorio": req.body.id_repositorio,
          "titulo": req.body.titulo,
          "description": req.body.description,
          "estado": req.body.estado,
          "fecha_creacion": req.body.fecha_creacion,
          "fecha_cierre": req.body.fecha_cierre,
          "fecha_merge": req.body.fecha_merge,
          "rama_base": req.body.rama_base,
          "numero_commits": req.body.numero_commits,
          "review_status": req.body.review_status
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarPull_request = (req:Request, res:Response)=> {
    Pull_requestSchema.updateOne({id_pull_request: req.params.id_pull_request}, {
      id_pull_request: req.body.id_pull_request,
      id_repositorio: req.body.id_repositorio,
      titulo: req.body.titulo,
      description: req.body.description,
      estado: req.body.estado,
      fecha_creacion: req.body.fecha_creacion,
      fecha_cierre: req.body.fecha_cierre,
      fecha_merge: req.body.fecha_merge,
      rama_base: req.body.rama_base,
      numero_commits: req.body.numero_commits,
      review_status: req.body.review_status

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarPull_request = (req:Request, res:Response)=> {
    Pull_requestSchema.deleteOne({id_pull_request: req.params.id_pull_request})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}