import mongoose from "mongoose";
import { Sponsor_elegible } from "./sponsor_elegible.model";

const schema = new mongoose.Schema<Sponsor_elegible>({
    _id_sponsor_elegible: String,
    id_sponsor_elegible: Number,
    descripcion: String,
}
);
export const Sponsor_elegibleSchema = mongoose.model('sponsor_elegible', schema);