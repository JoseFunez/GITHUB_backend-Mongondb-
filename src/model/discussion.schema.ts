import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";
import { Discussion } from "./discussion.model";

const schema = new mongoose.Schema<Discussion>({
    _id_discusion: String,
    id_discusion: Number,
    id_usuario: Array<BaseUsuarios>,
    id_repositorio: Array<Repositorios>,
    titulo: String,
    contenido: String,
    fecha_creacion: Date,
}
);
export const DiscussionSchema = mongoose.model('discussion', schema);