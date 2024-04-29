import {Request, Response} from 'express';
import { CommitsSchema } from '../model/commits.schema';


export const obtenerCommit = (req: Request, res: Response) => {
    CommitsSchema.findOne({id_commit: req.params.id_commit}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerCommits = async (req: Request, res: Response) => {
    CommitsSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarCommit = (req:Request, res:Response)=> {
  const p = new CommitsSchema(
      {

          "id_commit": req.body.id_commit,
          "id_usuario": req.body.id_usuario,
          "id_repositorio": req.body.id_repositorio,
          "commit_message": req.body.commit_message,
          "commit_date": req.body.commit_date,
          "changes_count": req.body.changes_count
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarCommit = (req:Request, res:Response)=> {
    CommitsSchema.updateOne({id_commit: req.params.id_commit}, {
      
      id_commit: req.body.id_commit,
      id_usuario: req.body.id_usuario,
      id_repositorio: req.body.id_repositorio,
      commit_message: req.body.commit_message,
      commit_date: req.body.commit_date,
      changes_count: req.body.changes_count

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarCommit = (req:Request, res:Response)=> {
    CommitsSchema.deleteOne({id_commit: req.params.id_commit})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}