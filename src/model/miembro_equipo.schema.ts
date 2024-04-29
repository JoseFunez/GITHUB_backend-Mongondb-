import mongoose from "mongoose";
import { Miembro_equipo } from './miembro_equipo.model';
import { idEquipo } from "./equipo.model";

const schema = new mongoose.Schema<Miembro_equipo>({
    _id_miembro: String,
    id_miembro: Number,
    id_usuario : Array<idEquipo>,
    rol: String,
}
);
export const Miembro_equipoSchema = mongoose.model('miembro_equipo', schema);