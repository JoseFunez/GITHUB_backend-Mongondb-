import {Request, Response} from 'express';
import { ContribuidoresSchema } from '../model/contribuidores.schema';


export const obtenerContribuidor = (req: Request, res: Response) => {
    ContribuidoresSchema.findOne({id_contribuidor: req.params.id_contribuidor}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerContribuidores = async (req: Request, res: Response) => {
    ContribuidoresSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarContribuidor = (req:Request, res:Response)=> {
  const p = new ContribuidoresSchema(
      {
          "id_contribuidor": req.body.id_contribuidor,
          "id_usuario": req.body.id_usuario,
          "id_repositorio": req.body.id_repositorio,
          "cantidad_contribuciones": req.body.cantidad_contribuciones,
          "date_first_ctrb": req.body.date_first_ctrb,
          "date_last_ctrb": req.body.date_last_ctrb
          
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarContribuidor = (req:Request, res:Response)=> {
    ContribuidoresSchema.updateOne({id_contribuidor: req.params.id_contribuidor}, {
      id_contribuidor: req.body.id_contribuidor,
      id_usuario: req.body.id_usuario,
      id_repositorio: req.body.id_repositorio,
      cantidad_contribuciones: req.body.cantidad_contribuciones,
      date_first_ctrb: req.body.date_first_ctrb,
      date_last_ctrb: req.body.date_last_ctrb

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarContribuidor = (req:Request, res:Response)=> {
    ContribuidoresSchema.deleteOne({id_contribuidor: req.params.id_contribuidor})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}