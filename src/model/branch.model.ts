import { Repositorios } from "./repositorios.model";


export interface Branch{
    _id_branch: string;
    id_branch: number;
    id_repositorio : Array<Repositorios>;
    nombre: string;
    fecha_creacion: Date;
}