import mongoose from "mongoose";
import { Sponsor_otros_user } from './sponsor_otros_user.model';
import { idProyecto } from "./proyectos.model";

const schema = new mongoose.Schema<Sponsor_otros_user>({

    _id_sponsor_otros_user: String,
    id_sponsor_otros_user: Number,
    id_proyecto: Array<idProyecto>,
    lista_sponsor: String,
    fecha_creacion: Date,
}
);
export const Sponsor_otros_userSchema = mongoose.model('sponsor_otros_user', schema);