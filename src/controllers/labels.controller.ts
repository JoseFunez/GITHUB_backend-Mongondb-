import {Request, Response} from 'express';
import { LabelsSchema } from '../model/labels.schema';


export const obtenerLabel = (req: Request, res: Response) => {
    LabelsSchema.findOne({id_label: req.params.id_label}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerLabels = async (req: Request, res: Response) => {
    LabelsSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarLabel = (req:Request, res:Response)=> {
  const p = new LabelsSchema(
      {
          "id_label": req.body.id_label,
          "id_repositorio" : req.body.id_repositorio,
          "nombre": req.body.nombre,
          "descripcion": req.body.descripcion,
          "fecha_creacion": req.body.fecha_creacion,
          "fecha_ultima_actualizacion": req.body.fecha_ultima_actualizacion,
          "nivel_prioridad": req.body.nivel_prioridad,
          "restricciones": req.body.restricciones,
          "scope": req.body.scope
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarLabel = (req:Request, res:Response)=> {
    LabelsSchema.updateOne({id_label: req.params.id_label}, {
      
      id_label: req.body.id_label,
      id_repositorio : req.body.id_repositorio,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fecha_creacion: req.body.fecha_creacion,
      fecha_ultima_actualizacion: req.body.fecha_ultima_actualizacion,
      nivel_prioridad: req.body.nivel_prioridad,
      restricciones: req.body.restricciones,
      scope: req.body.scope

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarLabel = (req:Request, res:Response)=> {
    LabelsSchema.deleteOne({id_label: req.params.id_label})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}