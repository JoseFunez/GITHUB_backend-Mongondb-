import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Issues } from "./issues.model";

const schema = new mongoose.Schema<Issues>({
    _id_issues: String,
    id_issues: Number,
    id_repositorio : Array<Repositorios>,
    titulo_issue: String,
    descripcion_issue: String,
    estado_issue: Number,
    fecha_creacion_issue: Date,
    ultima_fecha_actualizacion: Date,
}
);
export const IssuesSchema = mongoose.model('issues', schema);