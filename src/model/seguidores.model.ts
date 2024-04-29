import {BaseUsuarios, } from "./usuarios.model";


export interface Seguidores {
    _id_seguidor: string;
    id_seguidor: number;
    id_usuario: Array<BaseUsuarios>;
    fecha_seguimiento: Date;
    visibilidad: string;
}

