import mongoose from "mongoose";
import { Gist } from './gist.model';
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Gist>({
    _id_gist: String,
    id_gist: Number,
    id_usuario: Array<BaseUsuarios>,
    descripcion_gist: String,
    fecha_creacion: Date,
}
);
export const GistSchema = mongoose.model('gist', schema);