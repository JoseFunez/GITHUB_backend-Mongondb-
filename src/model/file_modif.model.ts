import { Commits } from "./commits.model";



export interface File_modif{
    _id_file_modif: string;
    id_file_modif: number;
    id_commit: Array<Commits>;
    file_path: string;
    lines_added: string;
    lines_deleted: string;
    modif_type: string;
}