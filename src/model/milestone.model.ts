import { Repositorios } from "./repositorios.model";


export interface Milestone{
    _id_milestone: string;
    id_milestone: number;
    id_repositorio : Array<Repositorios>;
    nombre: string;
    descripcion: string;
    due_date: Date;
}