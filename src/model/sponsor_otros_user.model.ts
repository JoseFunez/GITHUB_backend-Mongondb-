import { idProyecto } from "./proyectos.model";

export interface Sponsor_otros_user{
    _id_sponsor_otros_user: string;
    id_sponsor_otros_user: number;
    id_proyecto: Array<idProyecto>;
    lista_sponsor: string;
    fecha_creacion: Date;
}
