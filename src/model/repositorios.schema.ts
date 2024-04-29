import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Repositorios>({
    _id_repositorio: String,
    id_repositorio: Number,
    id_usuario: Array<BaseUsuarios>,
    nombre_repositorio: String,
    fecha_creacion_repositorio: String,
    fecha_ultima_actualizacion: String,
    lenguaje_principal: String,
    
}
);

export const RepositoriosSchema = mongoose.model('repositorios', schema);