import {BaseUsuarios} from "./usuarios.model";


export interface Comentario{
    _id_comentario: string;
    id_comentario: number;
    id_usuario: Array<BaseUsuarios>;
    comentario: string;
    fecha_comentario: Date;
}