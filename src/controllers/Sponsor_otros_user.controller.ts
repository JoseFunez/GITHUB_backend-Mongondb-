import {Request, Response} from 'express';
import { Sponsor_otros_userSchema } from '../model/sponsor_otros_user.schema';


export const obtenerSponsor_otros_user = (req: Request, res: Response) => {
    Sponsor_otros_userSchema.findOne({id_sponsor_otros_user: req.params.id_sponsor_otros_user}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerSponsor_otros_users = async (req: Request, res: Response) => {
    Sponsor_otros_userSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
} 

export const agregarSponsor_otros_user = (req:Request, res:Response)=> {
    const p = new Sponsor_otros_userSchema(
        {

            "id_sponsor_otros_user": req.body.id_sponsor_otros_user,
            "id_proyecto": req.body.id_proyecto,
            "lista_sponsor": req.body.lista_sponsor,
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
  
  export const actualizarSponsor_otros_user = (req:Request, res:Response)=> {
    Sponsor_otros_userSchema.updateOne({id_sponsor_otros_user: req.params.id_sponsor_otros_user}, {
        
        id_sponsor_otros_user: req.body.id_sponsor_otros_user,
        id_proyecto: req.body.id_proyecto,
        lista_sponsor: req.body.lista_sponsor,
        fecha_creacion: req.body.fecha_creacion
  
    }).then(updateResponse=>{
        res.send({message:'actualizado',updateResponse});
        res.end();
      }).catch(error=>{
        res.send({message:'hubo un error al actualizar', error});
        res.end();
      });
  }
  
  export const eliminarSponsor_otros_user = (req:Request, res:Response)=> {
    Sponsor_otros_userSchema.deleteOne({id_sponsor_otros_user: req.params.id_sponsor_otros_user})
    .then(removeResult=>{
        res.send({message:'eliminado', removeResult});
        res.end();
    });
  }
  