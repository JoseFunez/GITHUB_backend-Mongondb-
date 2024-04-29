import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Config } from "./config.model";

const schema = new mongoose.Schema<Config>({
    _id_config: String,
    id_config: Number,
    id_repositorio: Array<Repositorios>,
    tipo_acceso: String,
    fecha_creacion: Date,
}
);
export const ConfigSchema = mongoose.model('config', schema);