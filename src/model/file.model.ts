import { Repositorios } from "./repositorios.model";


export interface File{
    _id_file: string;
    id_file: number;
    id_repositorio : Array<Repositorios>;
    nombre: string;
    extension: string;
    tamanio: number;
    fecha_creacion: Date;
    date_last_modif: Date;
}