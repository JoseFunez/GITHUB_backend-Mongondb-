import {Request, Response} from 'express';
import { StarsSchema } from '../model/stars.schema';


export const obtenerStar = (req: Request, res: Response) => {
    StarsSchema.findOne({id_estrella: req.params.id_estrella}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerStars = async (req: Request, res: Response) => {
    StarsSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarStar = (req:Request, res:Response)=> {
  const p = new StarsSchema(
      {
        
          "id_estrella": req.body.id_estrella,
          "id_usuario": req.body.id_usuario,
          "id_repositorio": req.body.id_repositorio,
          "fecha_estrella": req.body.fecha_estrella,
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarStar = (req:Request, res:Response)=> {
    StarsSchema.updateOne({id_estrella: req.params.id_estrella}, {

      id_estrella: req.body.id_estrella,
      id_usuario: req.body.id_usuario,
      id_repositorio: req.body.id_repositorio,
      fecha_estrella: req.body.fecha_estrella,

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarStar = (req:Request, res:Response)=> {
    StarsSchema.deleteOne({id_estrella: req.params.id_estrella})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}