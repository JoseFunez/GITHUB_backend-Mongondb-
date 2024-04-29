import {Request, Response} from 'express';
import { Miembro_equipoSchema } from '../model/miembro_equipo.schema';


export const obtenerMiembro_equipo = (req: Request, res: Response) => {
    Miembro_equipoSchema.findOne({id_miembro: req.params.id_miembro}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerMiembro_equipos = async (req: Request, res: Response) => {
    Miembro_equipoSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarMiembro_equipo = (req:Request, res:Response)=> {
  const p = new Miembro_equipoSchema(
      {
          "id_miembro": req.body.id_miembro,
          "id_usuario": req.body.id_equipo,
          "rol": req.body.rol
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarMiembro_equipo = (req:Request, res:Response)=> {
    Miembro_equipoSchema.updateOne({id_miembro: req.params.id_miembro}, {
      
      id_miembro: req.body.id_miembro,
      id_usuario: req.body.id_equipo,
      rol: req.body.rol

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarMiembro_equipo = (req:Request, res:Response)=> {
    Miembro_equipoSchema.deleteOne({id_miembro: req.params.id_miembro})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}