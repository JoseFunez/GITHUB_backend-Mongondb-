import {BaseUsuarios} from "./usuarios.model";
import {Sponsor_elegible} from "./sponsor_elegible.model"

export interface Sponsor_propio{
    _id_sponsor_propio: string;
    id_sponsor_propio: number;
    id_sponsor_elegible: Array<Sponsor_elegible>;
    id_usuario : Array<BaseUsuarios>;
}
