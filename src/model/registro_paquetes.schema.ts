import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Registro_paquetes } from "./registro_paquetes.model";

const schema = new mongoose.Schema<Registro_paquetes>({
    _id_registro: String,
    id_registro: Number,
    id_repositorio: Array<Repositorios>,
    nombre_paquete: String,
    version_paquete: String,
    fecha_creacion: Date,
}
);
export const Registro_paqueteSchema = mongoose.model('registro_paquetes', schema);