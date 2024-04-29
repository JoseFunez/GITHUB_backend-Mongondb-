import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Secretos } from "./secretos.model";

const schema = new mongoose.Schema<Secretos>({
    _id_secrets: String,
    id_secrets: Number,
    id_repositorio: Array<Repositorios>,
    nombre: String,
    valor: String,
    fecha_creacion: Date,
}
);
export const SecretosSchema = mongoose.model('secretos', schema);