import {Request, Response} from 'express';
import { FileSchema } from '../model/file.schema';


export const obtenerFile = (req: Request, res: Response) => {
    FileSchema.findOne({id_file: req.params.id_file}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerFiles = async (req: Request, res: Response) => {
    FileSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarFile = (req:Request, res:Response)=> {
  const p = new FileSchema(
      {

          "id_file": req.body.id_file,
          "id_repositorio": req.body.id_repositorio,
          "nombre": req.body.nombre,
          "extension": req.body.extension,
          "tamanio": req.body.tamanio,
          "fecha_creacion": req.body.fecha_creacion,
          "date_last_modif": req.body.date_last_modif
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarFile = (req:Request, res:Response)=> {
    FileSchema.updateOne({id_file: req.params.id_file}, {
      id_file: req.body.id_file,
      id_repositorio: req.body.id_repositorio,
      nombre: req.body.nombre,
      extension: req.body.extension,
      tamanio: req.body.tamanio,
      fecha_creacion: req.body.fecha_creacion,
      date_last_modif: req.body.date_last_modif

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarFile = (req:Request, res:Response)=> {
    FileSchema.deleteOne({id_file: req.params.id_file})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}