import { Repositorios } from "./repositorios.model";
import { BaseUsuarios } from "./usuarios.model";


export interface Stars{
    _id_estrella: string;
    id_estrella: number;
    id_usuario: Array<BaseUsuarios>;
    id_repositorio: Array<Repositorios>;
    fecha_estrella: Date;
}