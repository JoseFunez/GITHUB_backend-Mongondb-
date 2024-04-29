import mongoose from "mongoose";
import { Organizacion } from './organizacion.model';
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Organizacion>({
    _id_organizacion: String,
    id_organizacion: Number,
    id_usuario : Array<BaseUsuarios>,
    descripcion: String,
    fecha_creacion: Date,
    locacion: String,
    website: String,
    numero_miembros: Number,
}
);
export const OrganizacionSchema = mongoose.model('organizacion', schema);