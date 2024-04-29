import {Request, Response} from 'express';
import { UsuariosSchema } from '../model/usuarios.schema';


// (Controlador de usuarios) login
export const login = async (req: Request, res: Response) => {

    // asd.456
  const usuario = await UsuariosSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {password: false});
  if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
  }
  else 
    res.send({status: false, message: 'Login incorrecto'});
  res.end();
}

export const obtenerUsuario = (req: Request, res: Response) => {
    /*res.send('obtener el usuario: ' + req.params.id);
    res.end();*/

    UsuariosSchema.findOne({id_usuario: req.params.id_usuario}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error));
}

export const obtenerUsuarios = async (req: Request, res: Response) => {
    /*res.send('obtener todos los usuarios');
    res.end();*/

    UsuariosSchema.find().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error => console.error(error))
}

export const agregarUsuario = (req:Request, res:Response)=> {
  const p = new UsuariosSchema(
      {
          "id_usuario": req.body.id_usuario,
          "nombre": req.body.nombre,
          "apellido": req.body.apellido,
          "imagen": req.body.imagen,
          "correo": req.body.correo,
          "contrasena": req.body.contrasena,
          "status": req.body.status,
          "ubicacion": req.body.ubicacion,
          "biografia": req.body.biografia
        });
        p.save().then(saveResponse=>{
          res.send(saveResponse);
          res.end();
        }).catch(error=>{
          res.send({message:'hubo un error al guardar el usuario', error});
          res.end();
        });
}

export const actualizarUsuario = (req:Request, res:Response)=> {
  UsuariosSchema.updateOne({id_usuario: req.params.id_usuario}, {
      
      id_usuario: req.body.id_usuario,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      imagen: req.body.imagen,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      status: req.body.status,
      ubicacion: req.body.ubicacion,
      biografia: req.body.biografia

  }).then(updateResponse=>{
      res.send({message:'Usuario actualizado',updateResponse});
      res.end();
    }).catch(error=>{
      res.send({message:'hubo un error al actualizar el usuario', error});
      res.end();
    });
    //res.end();
}

export const eliminarUsuario = (req:Request, res:Response)=> {
  UsuariosSchema.deleteOne({id_usuario: req.params.id_usuario})
  .then(removeResult=>{
      res.send({message:'Usuario eliminado', removeResult});
      res.end();
  });
}
