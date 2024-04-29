import { Repositorios } from "./repositorios.model";


export interface Colaboradores{
    _id_colaborador: string;
    id_colaborador: number;
    id_repositorio : Array<Repositorios>;
    nivel_permiso: string;
    fecha_union: string;
    ultima_fecha_acceso: Date;
    status: string;
    comentarios: string;
}