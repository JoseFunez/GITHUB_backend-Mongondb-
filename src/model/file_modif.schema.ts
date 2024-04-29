import mongoose from "mongoose";
import { File_modif } from "./file_modif.model";
import { Commits } from "./commits.model";

const schema = new mongoose.Schema<File_modif>({

    _id_file_modif: String,
    id_file_modif: Number,
    id_commit: Array<Commits>,
    file_path: String,
    lines_added: String,
    lines_deleted: String,
    modif_type: String,
}
);
export const File_modifSchema = mongoose.model('file_modif', schema);