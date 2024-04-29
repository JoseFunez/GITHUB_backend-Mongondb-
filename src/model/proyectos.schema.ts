import mongoose from "mongoose";
import { Proyectos } from './proyectos.model';
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Proyectos>({
    _id_proyecto: String,
    id_proyecto: Number,
    nombre: String,
    id_usuario: Array<BaseUsuarios>,
    descripcion_proyecto: String,
    fecha_creacion: Date,
}
);
export const ProyectosSchema = mongoose.model('proyectos', schema);