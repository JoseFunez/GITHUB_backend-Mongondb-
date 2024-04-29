import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Tag } from "./tag.model";

const schema = new mongoose.Schema<Tag>({
    _id_tag: String,
    id_tag: Number,
    id_repositorio: Array<Repositorios>,
    titulo: String,
    contenido: String,
    fecha_creacion: Date,
}
);
export const TagSchema = mongoose.model('tags', schema);