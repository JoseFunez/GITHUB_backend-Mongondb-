import mongoose from "mongoose";
import { Equipo } from './equipo.model';
import { idOrganizacion } from "./organizacion.model";

const schema = new mongoose.Schema<Equipo>({
    _id_equipo: String,
    id_equipo: Number,
    nombre_equipo: String,
    id_organizacion: Array<idOrganizacion>,
    descripcion: String,
    fecha_creacion: Date,
}
);
export const EquipoSchema = mongoose.model('equipo', schema);