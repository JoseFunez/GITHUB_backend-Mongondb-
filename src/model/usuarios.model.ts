import {Repositorios} from "./repositorios.model";


export interface BaseUsuarios {
    _id_usuario: string;
    id_usuario: number;
    nombre: string;
    apellido: string;
}

export interface Usuarios extends BaseUsuarios {
    imagen: string;
    correo: string;
    contrasena: string;
    status: string;
    ubicacion: string;
    biografia?: string;
    repositorios?: Array<Repositorios>;
  }