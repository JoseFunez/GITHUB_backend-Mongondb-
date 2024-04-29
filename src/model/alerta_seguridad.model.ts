import { Repositorios } from "./repositorios.model";


export interface Alerta_seguridad{
    _id_alerta: string;
    id_alerta: number;
    id_repositorio : Array<Repositorios>;
    descripcion: string;
    gravedad: string;
    fecha_creacion: Date;
}