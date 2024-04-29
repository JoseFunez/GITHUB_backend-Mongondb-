import mongoose from "mongoose";
import { Seguidores } from './seguidores.model';
import { BaseUsuarios } from "./usuarios.model";


const schema = new mongoose.Schema<Seguidores>({
    _id_seguidor: String,
    id_seguidor: Number,
    id_usuario: Array<BaseUsuarios>,
    fecha_seguimiento: Date,
    visibilidad: String
}
);
export const SeguidoresSchema = mongoose.model('seguidores', schema);