import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";
import { Contribuidores } from "./contribuidores.model";

const schema = new mongoose.Schema<Contribuidores>({
    _id_contribuidor: String,
    id_contribuidor: Number,
    id_usuario: Array<BaseUsuarios>,
    id_repositorio: Array<Repositorios>,
    cantidad_contribuciones: String,
    date_first_ctrb: Date,
    date_last_ctrb: Date,
}
);
export const ContribuidoresSchema = mongoose.model('contribuidores', schema);