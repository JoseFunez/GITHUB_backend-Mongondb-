import { Repositorios } from "./repositorios.model";


export interface Secretos{
    _id_secrets: string;
    id_secrets: number;
    id_repositorio : Array<Repositorios>;
    nombre: string;
    valor: string;
    fecha_creacion: Date;
}