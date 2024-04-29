import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Discussion{
    _id_discusion: string;
    id_discusion: number;
    id_usuario: Array<BaseUsuarios>;
    id_repositorio: Array<Repositorios>;
    titulo: string;
    contenido: string;
    fecha_creacion: Date;
}