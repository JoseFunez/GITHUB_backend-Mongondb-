import {Request, Response} from 'express';
import { SeguidoresSchema } from '../model/seguidores.schema';


export const obtenerSeguidor = (req: Request, res: Response) => {
    
    SeguidoresSchema.findOne({id_seguidor: req.params.id_seguidor}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerSeguidores = async (req: Request, res: Response) => {

    SeguidoresSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarSeguidor = (req:Request, res:Response)=> {
  const p = new SeguidoresSchema(
      {
          "id_seguidor": req.body.id_seguidor,
          "id_usuario": req.body.id_usuario,
          "fecha_seguimiento": req.body.fecha_seguimiento,
          "visibilidad": req.body.visibilidad
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}


export const eliminarSeguidor = (req:Request, res:Response)=> {
  SeguidoresSchema.deleteOne({id_seguidor: req.params.id_seguidor})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
