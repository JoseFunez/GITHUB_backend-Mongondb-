import mongoose from "mongoose";
import { Labels } from './labels.model';
import { Repositorios } from "./repositorios.model";

const schema = new mongoose.Schema<Labels>({
    _id_label: String,
    id_label: Number,
    id_repositorio : Array<Repositorios>,
    nombre: String,
    descripcion: String,
    fecha_creacion: Date,
    fecha_ultima_actualizacion: Date,
    nivel_prioridad: String,
    restricciones: String,
    scope: String,
}
);
export const LabelsSchema = mongoose.model('labels', schema);