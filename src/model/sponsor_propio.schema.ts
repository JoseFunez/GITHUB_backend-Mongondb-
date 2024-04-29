import mongoose from "mongoose";
import { Sponsor_elegible } from './sponsor_elegible.model';
import { Sponsor_propio } from "./sponsor_propio.model";
import { BaseUsuarios } from "./usuarios.model";

const schema = new mongoose.Schema<Sponsor_propio>({
    _id_sponsor_propio: String,
    id_sponsor_propio: Number,
    id_sponsor_elegible: Array<Sponsor_elegible>,
    id_usuario : Array<BaseUsuarios>,
}
);
export const Sponsor_propioSchema = mongoose.model('sponsor_propio', schema);
