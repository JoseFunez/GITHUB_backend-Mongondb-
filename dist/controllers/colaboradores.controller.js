"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarColaborador = exports.actualizarColaborador = exports.agregarColaborador = exports.obtenerColaboradores = exports.obtenerColaborador = void 0;
const colaboradores_schema_1 = require("../model/colaboradores.schema");
const obtenerColaborador = (req, res) => {
    colaboradores_schema_1.ColaboradoresSchema.findOne({ id_colaborador: req.params.id_colaborador }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerColaborador = obtenerColaborador;
const obtenerColaboradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    colaboradores_schema_1.ColaboradoresSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerColaboradores = obtenerColaboradores;
const agregarColaborador = (req, res) => {
    const p = new colaboradores_schema_1.ColaboradoresSchema({
        "id_colaborador": req.body.id_colaborador,
        "id_repositorio": req.body.id_repositorio,
        "nivel_permiso": req.body.nivel_permiso,
        "fecha_union": req.body.fecha_union,
        "ultima_fecha_acceso": req.body.ultima_fecha_acceso,
        "status": req.body.Status,
        "comentarios": req.body.comentarios
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarColaborador = agregarColaborador;
const actualizarColaborador = (req, res) => {
    colaboradores_schema_1.ColaboradoresSchema.updateOne({ id_colaborador: req.params.id_colaborador }, {
        id_colaborador: req.body.id_colaborador,
        id_repositorio: req.body.id_repositorio,
        nivel_permiso: req.body.nivel_permiso,
        fecha_union: req.body.fecha_union,
        ultima_fecha_acceso: req.body.ultima_fecha_acceso,
        status: req.body.Status,
        comentarios: req.body.comentarios,
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarColaborador = actualizarColaborador;
const eliminarColaborador = (req, res) => {
    colaboradores_schema_1.ColaboradoresSchema.deleteOne({ id_colaborador: req.params.id_colaborador })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarColaborador = eliminarColaborador;
