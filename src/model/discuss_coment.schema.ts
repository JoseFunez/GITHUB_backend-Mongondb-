import mongoose from "mongoose";
import { BaseUsuarios } from "./usuarios.model";
import { Discussion } from "./discussion.model";
import { Discuss_coment } from "./discuss_coment.model";

const schema = new mongoose.Schema<Discuss_coment>({
    _id_comentario: String,
    id_comentario: Number,
    id_usuario: Array<BaseUsuarios>,
    id_discusion: Array<Discussion>,
    contenido: String,
    fecha_creacion: Date,
}
);
export const Discuss_comentSchema = mongoose.model('discuss_coment', schema);