import {Request, Response} from 'express';
import { Registro_paqueteSchema } from '../model/registro_paquetes.schema';


export const obtenerRegistro_paquete = (req: Request, res: Response) => {
    Registro_paqueteSchema.findOne({id_registro: req.params.id_registro}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerRegistro_paquetes = async (req: Request, res: Response) => {
    Registro_paqueteSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarRegistro_paquete = (req:Request, res:Response)=> {
  const p = new Registro_paqueteSchema(
      {
          "id_registro": req.body.id_registro,
          "id_repositorio": req.body.id_repositorio,
          "nombre_paquete": req.body.nombre_paquete,
          "version_paquete": req.body.version_paquete,
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

export const actualizarRegistro_paquete = (req:Request, res:Response)=> {
    Registro_paqueteSchema.updateOne({id_registro: req.params.id_registro}, {
   
      id_registro: req.body.id_registro,
      id_repositorio: req.body.id_repositorio,
      nombre_paquete: req.body.nombre_paquete,
      version_paquete: req.body.version_paquete,
      fecha_creacion: req.body.fecha_creacion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarRegistro_paquete = (req:Request, res:Response)=> {
    Registro_paqueteSchema.deleteOne({id_registro: req.params.id_registro})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}