import {Request, Response} from 'express';
import { File_modifSchema } from '../model/file_modif.schema';


export const obtenerFile_modif = (req: Request, res: Response) => {
    File_modifSchema.findOne({id_file_modif: req.params.id_file_modif}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerFile_modifs = async (req: Request, res: Response) => {
    File_modifSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarFile_modif = (req:Request, res:Response)=> {
  const p = new File_modifSchema(
      {

          "id_file_modif": req.body.id_file_modif,
          "id_commit": req.body.id_commit,
          "file_path": req.body.file_path,
          "lines_added": req.body.lines_added,
          "lines_deleted": req.body.lines_deleted,
          "modif_type": req.body.modif_type    
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar', error});
          res.end();
        });
}

export const actualizarFile_modif = (req:Request, res:Response)=> {
    File_modifSchema.updateOne({id_file_modif: req.params.id_file_modif}, {

      id_file_modif: req.body.id_file_modif,
      id_commit: req.body.id_commit,
      file_path: req.body.file_path,
      lines_added: req.body.lines_added,
      lines_deleted: req.body.lines_deleted,
      modif_type: req.body.modif_type

  }).then(updateResponse=>{
      res.send({message:'actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar', error});
      res.end();
    });
}

export const eliminarFile_modif = (req:Request, res:Response)=> {
    File_modifSchema.deleteOne({id_file_modif: req.params.id_file_modif})
  .then(removeResult=>{
      res.send({message:'eliminado', removeResult});
      res.end();
  });
}