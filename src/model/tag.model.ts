import { Repositorios } from "./repositorios.model";


export interface Tag{
    _id_tag: string;
    id_tag: number;
    id_repositorio: Array<Repositorios>;
    titulo: string;
    contenido: string;
    fecha_creacion: Date;
}