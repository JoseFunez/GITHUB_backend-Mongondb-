import {BaseUsuarios} from "./usuarios.model";


export interface Gist{
    _id_gist: string;
    id_gist: number;
    id_usuario : Array<BaseUsuarios>;
    descripcion_gist: string;
    fecha_creacion: Date;
}

