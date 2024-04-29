import mongoose from "mongoose";
import { Milestone } from './milestone.model';
import { Repositorios } from "./repositorios.model";

const schema = new mongoose.Schema<Milestone>({
    _id_milestone: String,
    id_milestone: Number,
    id_repositorio : Array<Repositorios>,
    nombre: String,
    descripcion: String,
    due_date: Date,
}
);
export const MilestoneSchema = mongoose.model('milestone', schema);