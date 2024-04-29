import {Request, Response} from 'express';
import { EquipoSchema } from '../model/equipo.schema';


export const obtenerEquipo = (req: Request, res: Response) => {
    EquipoSchema.findOne({id_equipo: req.params.id_equipo}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerEquipos = async (req: Request, res: Response) => {
    EquipoSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarEquipo = (req:Request, res:Response)=> {
  const p = new EquipoSchema(
      {
          "id_equipo": req.body.id_equipo,
          "nombre_equipo": req.body.nombre_equipo,
          "id_organizacion": req.body.id_organizacion,
          "descripcion": req.body.descripcion,
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

export const actualizarEquipo = (req:Request, res:Response)=> {
    EquipoSchema.updateOne({id_equipo: req.params.id_equipo}, {
      
      id_equipo: req.body.id_equipo,
      nombre_equipo: req.body.nombre_equipo,
      id_organizacion: req.body.id_organizacion,
      descripcion: req.body.descripcion,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarEquipo = (req:Request, res:Response)=> {
    EquipoSchema.deleteOne({id_equipo: req.params.id_equipo})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}