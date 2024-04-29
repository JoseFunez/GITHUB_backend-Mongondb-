import { Repositorios } from "./repositorios.model";


export interface Labels{
    _id_label: string;
    id_label: number;
    id_repositorio : Array<Repositorios>;
    nombre: string;
    descripcion: string;
    fecha_creacion: Date;
    fecha_ultima_actualizacion: Date;
    nivel_prioridad: string;
    restricciones: string;
    scope: string;
}