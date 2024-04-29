import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Deployment{
    _id_deploy: string;
    id_deploy: number;
    id_usuario: Array<BaseUsuarios>;
    id_repositorio: Array<Repositorios>;
    entorno: string;
    date_deploy: Date;
    status: Date;
}