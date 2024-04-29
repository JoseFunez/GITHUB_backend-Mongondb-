import {Request, Response} from 'express';
import { SecretosSchema } from '../model/secretos.schema';


export const obtenerSecreto = (req: Request, res: Response) => {
    SecretosSchema.findOne({id_secrets: req.params.id_secrets}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerSecretos = async (req: Request, res: Response) => {
    SecretosSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarSecreto = (req:Request, res:Response)=> {
  const p = new SecretosSchema(
      {

          "id_secrets": req.body.id_secrets,
          "id_repositorio": req.body.id_repositorio,
          "nombre": req.body.nombre,
          "valor": req.body.valor,
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

export const actualizarSecreto = (req:Request, res:Response)=> {
    SecretosSchema.updateOne({id_secrets: req.params.id_secrets}, {
        
      id_secrets: req.body.id_secrets,
      id_repositorio: req.body.id_repositorio,
      nombre: req.body.nombre,
      valor: req.body.valor,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarSecreto = (req:Request, res:Response)=> {
    SecretosSchema.deleteOne({id_secrets: req.params.id_secrets})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}