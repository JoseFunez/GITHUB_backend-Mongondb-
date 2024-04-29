import mongoose from "mongoose";
import { Comentario } from './comentario.model';
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Comentario>({
    
    _id_comentario: String,
    id_comentario: Number,
    id_usuario: Array<BaseUsuarios>,
    comentario: String,
    fecha_comentario: Date
}
);
export const ComentarioSchema = mongoose.model('comentario', schema);