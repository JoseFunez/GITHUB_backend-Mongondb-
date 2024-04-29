import {BaseUsuarios} from "./usuarios.model";

export interface Repositorios {
    _id_repositorio: string;
    id_repositorio: number;
    id_usuario: Array<BaseUsuarios>;
    nombre_repositorio: string;
    fecha_creacion_repositorio: string;
    fecha_ultima_actualizacion: string;
    lenguaje_principal: string;
}