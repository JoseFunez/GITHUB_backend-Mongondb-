import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Colaboradores } from "./colaboradores.model";

const schema = new mongoose.Schema<Colaboradores>({
    _id_colaborador: String,
    id_colaborador: Number,
    id_repositorio : Array<Repositorios>,
    nivel_permiso: String,
    fecha_union: String,
    ultima_fecha_acceso: Date,
    status: String,
    comentarios: String,
}
);
export const ColaboradoresSchema = mongoose.model('colaboradores', schema);