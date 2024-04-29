import {Request, Response} from 'express';
import { ColaboradoresSchema } from '../model/colaboradores.schema';


export const obtenerColaborador = (req: Request, res: Response) => {
    ColaboradoresSchema.findOne({id_colaborador: req.params.id_colaborador}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerColaboradores = async (req: Request, res: Response) => {
    ColaboradoresSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarColaborador = (req:Request, res:Response)=> {
  const p = new ColaboradoresSchema(
      {
          "id_colaborador": req.body.id_colaborador,
          "id_repositorio": req.body.id_repositorio,
          "nivel_permiso": req.body.nivel_permiso,
          "fecha_union": req.body.fecha_union,
          "ultima_fecha_acceso": req.body.ultima_fecha_acceso,
          "status": req.body.Status,
          "comentarios": req.body.comentarios
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarColaborador = (req:Request, res:Response)=> {
    ColaboradoresSchema.updateOne({id_colaborador: req.params.id_colaborador}, {
      id_colaborador: req.body.id_colaborador,
      id_repositorio : req.body.id_repositorio,
      nivel_permiso: req.body.nivel_permiso,
      fecha_union: req.body.fecha_union,
      ultima_fecha_acceso: req.body.ultima_fecha_acceso,
      status: req.body.Status,
      comentarios: req.body.comentarios,

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarColaborador = (req:Request, res:Response)=> {
    ColaboradoresSchema.deleteOne({id_colaborador: req.params.id_colaborador})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}