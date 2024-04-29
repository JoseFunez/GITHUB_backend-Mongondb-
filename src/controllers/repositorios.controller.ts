import {Request, Response} from 'express';
import { RepositoriosSchema } from '../model/repositorios.schema';


export const obtenerRepositorio = (req: Request, res: Response) => {
    /*res.send('obtener el usuario: ' + req.params.id);
    res.end();*/

    RepositoriosSchema.findOne({id_repositorio: req.params.id_repositorio}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerRepositorios = async (req: Request, res: Response) => {
    /*res.send('obtener todos los usuarios');
    res.end();*/

    RepositoriosSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarRepositorio = (req:Request, res:Response)=> {
  const p = new RepositoriosSchema(
      {
          "id_repositorio": req.body.id_repositorio,
          "nombre_repositorio": req.body.nombre_repositorio,
          "id_usuario": req.body.id_usuario,
          "fecha_creacion_repositorio": req.body.fecha_creacion_repositorio,
          "fecha_ultima_actualizacion": req.body.fecha_ultima_actualizacion,
          "lenguaje_principal": req.body.lenguaje_principal

        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar el repositorio', error});
          res.end();
        });
}

export const actualizarRepositorio = (req:Request, res:Response)=> {
  RepositoriosSchema.updateOne({id_repositorio: req.params.id_repositorio}, {
      
      id_repositorio: req.body.id_repositorio,
      nombre_repositorio: req.body.nombre_repositorio,
      id_usuario: req.body.id_usuario,
      fecha_creacion_repositorio: req.body.fecha_creacion_repositorio,
      fecha_ultima_actualizacion: req.body.fecha_ultima_actualizacion,
      lenguaje_principal: req.body.lenguaje_principal

  }).then(updateResponse=>{
      res.send({message:'repositorio actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar el repositorio', error});
      res.end();
    });
    //res.end();
}

export const eliminarRepositorio = (req:Request, res:Response)=> {
  RepositoriosSchema.deleteOne({id_repositorio: req.params.id_repositorio})
  .then(removeResult=>{
      res.send({message:'repositorio eliminado', removeResult});
      res.end();
  });
}