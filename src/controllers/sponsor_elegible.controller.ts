import {Request, Response} from 'express';
import { Sponsor_elegibleSchema } from '../model/sponsor_elegible.schema';


export const obtenerSponsor_elegible = (req: Request, res: Response) => {

    Sponsor_elegibleSchema.findOne({id_sponsor_elegible: req.params.id_sponsor_elegible}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerSponsor_elegibles = async (req: Request, res: Response) => {

    Sponsor_elegibleSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarSponsor_elegible = (req:Request, res:Response)=> {
  const p = new Sponsor_elegibleSchema(
    {
          "id_sponsor_elegible": req.body.id_sponsor_elegible,
          "descripcion": req.body.descripcion
    });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarSponsor_elegible = (req:Request, res:Response)=> {
  Sponsor_elegibleSchema.updateOne({id_sponsor_elegible: req.params.id_sponsor_elegible}, {

      id_sponsor_elegible: req.body.id_sponsor_elegible,
      descripcion: req.body.descripcion

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarSponsor_elegible = (req:Request, res:Response)=> {
  Sponsor_elegibleSchema.deleteOne({id_sponsor_elegible: req.params.id_sponsor_elegible})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
