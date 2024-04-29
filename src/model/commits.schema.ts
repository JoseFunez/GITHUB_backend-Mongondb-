import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";
import { Commits } from "./commits.model";

const schema = new mongoose.Schema<Commits>({

    _id_commit: String,
    id_commit: Number,
    id_usuario: Array<BaseUsuarios>,
    id_repositorio: Array<Repositorios>,
    commit_message: String,
    commit_date: Date,
    changes_count: Number,
}
);
export const CommitsSchema = mongoose.model('commits', schema);