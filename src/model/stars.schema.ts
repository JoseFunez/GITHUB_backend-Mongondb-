import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";
import { Stars } from "./stars.model";

const schema = new mongoose.Schema<Stars>({
    _id_estrella: String,
    id_estrella: Number,
    id_usuario: Array<BaseUsuarios>,
    id_repositorio: Array<Repositorios>,
    fecha_estrella: Date,
}
);
export const StarsSchema = mongoose.model('stars', schema);