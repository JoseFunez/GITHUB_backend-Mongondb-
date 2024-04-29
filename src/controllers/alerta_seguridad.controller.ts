import {Request, Response} from 'express';
import { Alerta_seguridadSchema } from '../model/alerta_seguridad.schema';


export const obtenerAlerta = (req: Request, res: Response) => {
    Alerta_seguridadSchema.findOne({id_alerta: req.params.id_alerta}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerAlertas = async (req: Request, res: Response) => {
    Alerta_seguridadSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarAlerta = (req:Request, res:Response)=> {
  const p = new Alerta_seguridadSchema(
      {
          "id_alerta": req.body.id_alerta,
          "id_repositorio": req.body.id_repositorio,
          "descripcion": req.body.descripcion,
          "gravedad": req.body.gravedad,
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

export const actualizarAlerta = (req:Request, res:Response)=> {
    Alerta_seguridadSchema.updateOne({id_alerta: req.params.id_alerta}, {
   
      id_alerta: req.body.id_alerta,
      id_repositorio: req.body.id_repositorio,
      descripcion: req.body.descripcion,
      gravedad: req.body.gravedad,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarAlerta = (req:Request, res:Response)=> {
    Alerta_seguridadSchema.deleteOne({id_alerta: req.params.id_alerta})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}