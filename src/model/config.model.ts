import { Repositorios } from "./repositorios.model";


export interface Config{
    _id_config: string;
    id_config: number;
    id_repositorio : Array<Repositorios>;
    tipo_acceso: string;
    fecha_creacion: Date;
}