import { Repositorios } from "./repositorios.model";


export interface Pull_request{
    _id_pull_request: string;
    id_pull_request: number;
    id_repositorio : Array<Repositorios>;
    titulo: string;
    description: string;
    estado: string;
    fecha_creacion: Date;
    fecha_cierre: Date;
    fecha_merge: Date;
    rama_base: string;
    numero_commits: number;
    review_status: string;
}