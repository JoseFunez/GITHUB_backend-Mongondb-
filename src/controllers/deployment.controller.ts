import {Request, Response} from 'express';
import { DeploymentSchema } from '../model/deployment.schema';


export const obtenerDeploy = (req: Request, res: Response) => {
    DeploymentSchema.findOne({id_deploy: req.params.id_deploy}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerDeploys = async (req: Request, res: Response) => {
    DeploymentSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarDeploy = (req:Request, res:Response)=> {
  const p = new DeploymentSchema(
      {
          "id_deploy": req.body.id_deploy,
          "id_usuario": req.body.id_usuario,
          "id_repositorio": req.body.id_repositorio,
          "entorno": req.body.entorno,
          "date_deploy": req.body.date_deploy,
          "status": req.body.status
          
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarDeploy = (req:Request, res:Response)=> {
    DeploymentSchema.updateOne({id_deploy: req.params.id_deploy}, {

      id_deploy: req.body.id_deploy,
      id_usuario: req.body.id_usuario,
      id_repositorio: req.body.id_repositorio,
      entorno: req.body.entorno,
      date_deploy: req.body.date_deploy,
      status: req.body.status

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarDeploy = (req:Request, res:Response)=> {
    DeploymentSchema.deleteOne({id_deploy: req.params.id_deploy})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}