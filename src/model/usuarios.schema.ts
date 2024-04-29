import mongoose from "mongoose";
import { Usuarios } from './usuarios.model';
import { Repositorios } from "./repositorios.model";

const schema = new mongoose.Schema<Usuarios>({
    _id_usuario: String,
    id_usuario: Number,
    nombre: String,
    apellido: String,
    imagen: String,
    correo: String,
    contrasena: String,
    status: String,
    ubicacion: String,
    biografia: String,
    repositorios: Array<Repositorios>,
}
);
export const UsuariosSchema = mongoose.model('usuarios', schema);