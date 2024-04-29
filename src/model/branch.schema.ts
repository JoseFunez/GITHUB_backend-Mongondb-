import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { Branch } from "./branch.model";

const schema = new mongoose.Schema<Branch>({
    _id_branch: String,
    id_branch: Number,
    id_repositorio: Array<Repositorios>,
    nombre: String,
    fecha_creacion: Date,
}
);
export const BranchSchema = mongoose.model('branch', schema);