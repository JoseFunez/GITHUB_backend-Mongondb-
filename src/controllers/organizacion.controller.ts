import {Request, Response} from 'express';
import { OrganizacionSchema } from '../model/organizacion.schema';


export const obtenerOrganizacion = (req: Request, res: Response) => {
    OrganizacionSchema.findOne({id_organizacion: req.params.id_organizacion}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerOrganizaciones = async (req: Request, res: Response) => {
    OrganizacionSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarOrganizacion = (req:Request, res:Response)=> {
  const p = new OrganizacionSchema(
      {
          "id_organizacion": req.body.id_organizacion,
          "id_usuario" : req.body.id_usuario,
          "descripcion": req.body.descripcion,
          "fecha_creacion": req.body.fecha_creacion,
          "locacion": req.body.locacion,
          "website": req.body.website,
          "numero_miembros": req.body.numero_miembros
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarOrganizacion = (req:Request, res:Response)=> {
    OrganizacionSchema.updateOne({id_organizacion: req.params.id_organizacion}, {
      
      id_organizacion: req.body.id_organizacion,
      id_usuario : req.body.id_usuario,
      descripcion: req.body.descripcion,
      fecha_creacion: req.body.fecha_creacion,
      locacion: req.body.locacion,
      website: req.body.website,
      numero_miembros: req.body.numero_miembros

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarOrganizacion = (req:Request, res:Response)=> {
    OrganizacionSchema.deleteOne({id_organizacion: req.params.id_organizacion})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}
