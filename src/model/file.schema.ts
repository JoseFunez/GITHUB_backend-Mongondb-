import mongoose from "mongoose";
import { File } from './file.model';
import { Repositorios } from "./repositorios.model";

const schema = new mongoose.Schema<File>({
    _id_file: String,
    id_file: Number,
    id_repositorio: Array<Repositorios>,
    nombre: String,
    extension: String,
    tamanio: Number,
    fecha_creacion: Date,
    date_last_modif: Date,
}
);
export const FileSchema = mongoose.model('file', schema);