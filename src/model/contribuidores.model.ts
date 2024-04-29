import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Contribuidores{
    _id_contribuidor: string;
    id_contribuidor: number;
    id_usuario: Array<BaseUsuarios>;
    id_repositorio: Array<Repositorios>;
    cantidad_contribuciones: string;
    date_first_ctrb: Date;
    date_last_ctrb: Date;
}