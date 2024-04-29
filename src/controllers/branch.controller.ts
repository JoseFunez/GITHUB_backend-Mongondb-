import {Request, Response} from 'express';
import { BranchSchema } from '../model/branch.schema';


export const obtenerBranch = (req: Request, res: Response) => {
    BranchSchema.findOne({id_branch: req.params.id_branch}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerBranchs = async (req: Request, res: Response) => {
    BranchSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarBranch = (req:Request, res:Response)=> {
  const p = new BranchSchema(
      {

          "id_branch": req.body.id_branch,
          "id_repositorio": req.body.id_repositorio,
          "nombre": req.body.nombre,
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

export const actualizarBranch = (req:Request, res:Response)=> {
    BranchSchema.updateOne({id_branch: req.params.id_branch}, {
      id_branch: req.body.id_branch,
      id_repositorio: req.body.id_repositorio,
      nombre: req.body.nombre,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarBranch = (req:Request, res:Response)=> {
    BranchSchema.deleteOne({id_branch: req.params.id_branch})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}