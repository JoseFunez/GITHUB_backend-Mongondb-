import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Pull_request } from "./pull_request.model";

const schema = new mongoose.Schema<Pull_request>({
    _id_pull_request: String,
    id_pull_request: Number,
    id_repositorio : Array<Repositorios>,
    titulo: String,
    description: String,
    estado: String,
    fecha_creacion: Date,
    fecha_cierre: Date,
    fecha_merge: Date,
    rama_base: String,
    numero_commits: Number,
    review_status: String,
}
);
export const Pull_requestSchema = mongoose.model('pull_request', schema);