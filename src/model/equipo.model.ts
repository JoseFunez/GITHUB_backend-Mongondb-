import { idOrganizacion } from "./organizacion.model";

export interface idEquipo{
    _id_equipo: string;
    id_equipo: number;
    nombre_equipo: string;
}

export interface Equipo extends idEquipo{
    id_organizacion: Array<idOrganizacion>;
    descripcion: string;
    fecha_creacion: Date;
}