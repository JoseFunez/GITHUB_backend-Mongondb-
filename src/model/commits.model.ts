import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Commits{
    _id_commit: string;
    id_commit: number;
    id_usuario: Array<BaseUsuarios>;
    id_repositorio: Array<Repositorios>;
    commit_message: string;
    commit_date: Date;
    changes_count: number;
}