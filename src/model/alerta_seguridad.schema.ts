import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Alerta_seguridad } from "./alerta_seguridad.model";

const schema = new mongoose.Schema<Alerta_seguridad>({
    _id_alerta: String,
    id_alerta: Number,
    id_repositorio : Array<Repositorios>,
    descripcion: String,
    gravedad: String,
    fecha_creacion: Date,
}
);
export const Alerta_seguridadSchema = mongoose.model('alerta_seguridad', schema);