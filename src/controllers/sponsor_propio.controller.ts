import {Request, Response} from 'express';
import { Sponsor_propioSchema } from '../model/sponsor_propio.schema';


export const obtenerSponsor_propio = (req: Request, res: Response) => {
    Sponsor_propioSchema.findOne({id_sponsor_propio: req.params.id_sponsor_propio}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerSponsor_propios = async (req: Request, res: Response) => {
    Sponsor_propioSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarSponsor_propio = (req:Request, res:Response)=> {
  const p = new Sponsor_propioSchema(
      {
          "id_sponsor_propio": req.body.id_sponsor_propio,
          "id_sponsor_elegible": req.body.id_sponsor_elegible,
          "id_usuario": req.body.id_usuario
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarSponsor_propio = (req:Request, res:Response)=> {
  Sponsor_propioSchema.updateOne({id_sponsor_propio: req.params.id_sponsor_propio}, {

      id_sponsor_propio: req.body.id_sponsor_propio,
      id_sponsor_elegible: req.body.id_sponsor_elegible,
      id_usuario: req.body.id_usuario

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarSponsor_propio = (req:Request, res:Response)=> {
  Sponsor_propioSchema.deleteOne({id_sponsor_propio: req.params.id_sponsor_propio})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
