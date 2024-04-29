import {BaseUsuarios} from "./usuarios.model";

export interface idProyecto {
    _id_proyecto: string;
    id_proyecto: number;
}

export interface Proyectos extends idProyecto{
    nombre: string;
    id_usuario: Array<BaseUsuarios>;
    descripcion_proyecto: string;
    fecha_creacion: Date;
}