import {Request, Response} from 'express';
import { ProyectosSchema } from '../model/proyectos.schema';


export const obtenerProyecto = (req: Request, res: Response) => {
    ProyectosSchema.findOne({id_proyecto: req.params.id_proyecto}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerProyectos = async (req: Request, res: Response) => {
    ProyectosSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarProyecto = (req:Request, res:Response)=> {
  const p = new ProyectosSchema(
      {
          "id_proyecto": req.body.id_proyecto,
          "nombre": req.body.nombre,
          "id_usuario": req.body.id_usuario,
          "descripcion_proyecto": req.body.descripcion_proyecto,
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

export const actualizarProyecto = (req:Request, res:Response)=> {
    ProyectosSchema.updateOne({id_proyecto: req.params.id_proyecto}, {

      id_proyecto: req.body.id_proyecto,
      nombre: req.body.nombre,
      id_usuario: req.body.id_usuario,
      descripcion_proyecto: req.body.descripcion_proyecto,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarProyecto = (req:Request, res:Response)=> {
    ProyectosSchema.deleteOne({id_proyecto: req.params.id_proyecto})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
