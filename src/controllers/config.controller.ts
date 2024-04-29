import {Request, Response} from 'express';
import { ConfigSchema } from '../model/config.schema';


export const obtenerConfig = (req: Request, res: Response) => {
    ConfigSchema.findOne({id_config: req.params.id_config}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerConfigs = async (req: Request, res: Response) => {
    ConfigSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarConfig = (req:Request, res:Response)=> {
  const p = new ConfigSchema(
      {

          "id_config": req.body.id_config,
          "id_repositorio": req.body.id_repositorio,
          "tipo_acceso": req.body.tipo_acceso,
          "fecha_creacion": req.body.fecha_creacion,
          
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarConfig = (req:Request, res:Response)=> {
    ConfigSchema.updateOne({id_config: req.params.id_config}, {
      id_config: req.body.id_config,
      id_repositorio: req.body.id_repositorio,
      tipo_acceso: req.body.tipo_acceso,
      fecha_creacion: req.body.fecha_creacion,

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarConfig = (req:Request, res:Response)=> {
    ConfigSchema.deleteOne({id_config: req.params.id_config})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}