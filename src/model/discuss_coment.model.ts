import { Discussion } from "./discussion.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Discuss_coment{
    _id_comentario: string;
    id_comentario: number;
    id_usuario: Array<BaseUsuarios>;
    id_discusion: Array<Discussion>;
    contenido: string;
    fecha_creacion: Date;
}