import { Repositorios } from "./repositorios.model";


export interface Issues{
    _id_issues: string;
    id_issues: number;
    id_repositorio : Array<Repositorios>;
    titulo_issue: string;
    descripcion_issue: string;
    estado_issue: number;
    fecha_creacion_issue: Date;
    ultima_fecha_actualizacion: Date;
}