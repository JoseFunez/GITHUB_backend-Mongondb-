import {Request, Response} from 'express';
import { IssuesSchema } from '../model/issues.schema';


export const obtenerIssue = (req: Request, res: Response) => {
    IssuesSchema.findOne({id_issues: req.params.id_issues}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerIssues = async (req: Request, res: Response) => {
    IssuesSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarIssue = (req:Request, res:Response)=> {
  const p = new IssuesSchema(
      {
          "id_issues": req.body.id_issues,
          "id_repositorio": req.body.id_repositorio,
          "titulo_issue": req.body.titulo_issue,
          "descripcion_issue": req.body.descripcion_issue,
          "estado_issue": req.body.estado_issue,
          "fecha_creacion_issue": req.body.fecha_creacion_issue,
          "ultima_fecha_actualizacion": req.body.ultima_fecha_actualizacion
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarIssue = (req:Request, res:Response)=> {
    IssuesSchema.updateOne({id_issues: req.params.id_issues}, {

      id_issues: req.body.id_issues,
      id_repositorio : req.body.id_repositorio,
      titulo_issue: req.body.titulo_issue,
      descripcion_issue: req.body.descripcion_issue,
      estado_issue: req.body.estado_issue,
      fecha_creacion_issue: req.body.fecha_creacion_issue,
      ultima_fecha_actualizacion: req.body.ultima_fecha_actualizacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarIssue = (req:Request, res:Response)=> {
    IssuesSchema.deleteOne({id_issues: req.params.id_issues})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}