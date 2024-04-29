import { idEquipo } from "./equipo.model";


export interface Miembro_equipo{
    _id_miembro: string;
    id_miembro: number;
    id_usuario : Array<idEquipo>;
    rol: string;
}