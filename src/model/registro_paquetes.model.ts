import { Repositorios } from "./repositorios.model";


export interface Registro_paquetes{
    _id_registro: string;
    id_registro: number;
    id_repositorio: Array<Repositorios>;
    nombre_paquete: string;
    version_paquete: string;
    fecha_creacion: Date;
}