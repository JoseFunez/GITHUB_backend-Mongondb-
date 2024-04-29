import {BaseUsuarios} from "./usuarios.model";

export interface idOrganizacion{
    _id_organizacion: string;
    id_organizacion: number;
}

export interface Organizacion extends idOrganizacion{
    id_usuario : Array<BaseUsuarios>;
    descripcion: string;
    fecha_creacion: Date;
    locacion: string;
    website: string;
    numero_miembros: number;
}