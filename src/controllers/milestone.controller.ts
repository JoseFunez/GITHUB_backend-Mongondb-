import {Request, Response} from 'express';
import { MilestoneSchema } from '../model/milestone.schema';


export const obtenerMilestone = (req: Request, res: Response) => {
    MilestoneSchema.findOne({id_milestone: req.params.id_milestone}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerMilestones = async (req: Request, res: Response) => {
    MilestoneSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarMilestone = (req:Request, res:Response)=> {
  const p = new MilestoneSchema(
      {
          "id_milestone": req.body.id_milestone,
          "id_repositorio": req.body.id_repositorios,
          "nombre": req.body.nombre,
          "descripcion": req.body.descripcion,
          "due_date": req.body.due_date
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarMilestone = (req:Request, res:Response)=> {
    MilestoneSchema.updateOne({id_milestone: req.params.id_milestone}, {
     
      id_milestone: req.body.id_milestone,
      id_repositorio: req.body.id_repositorios,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      due_date: req.body.due_date

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarMilestone = (req:Request, res:Response)=> {
    MilestoneSchema.deleteOne({id_milestone: req.params.id_milestone})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}