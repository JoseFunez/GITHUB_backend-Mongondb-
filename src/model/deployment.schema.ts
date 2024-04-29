import mongoose from "mongoose";
import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";
import { Deployment } from "./deployment.model";

const schema = new mongoose.Schema<Deployment>({
    _id_deploy: String,
    id_deploy: Number,
    id_usuario: Array<BaseUsuarios>,
    id_repositorio: Array<Repositorios>,
    entorno: String,
    date_deploy: Date,
    status: Date,
}
);
export const DeploymentSchema = mongoose.model('deployment', schema);