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
exports.eliminarMiembro_equipo = exports.actualizarMiembro_equipo = exports.agregarMiembro_equipo = exports.obtenerMiembro_equipos = exports.obtenerMiembro_equipo = void 0;
const miembro_equipo_schema_1 = require("../model/miembro_equipo.schema");
const obtenerMiembro_equipo = (req, res) => {
    miembro_equipo_schema_1.Miembro_equipoSchema.findOne({ id_miembro: req.params.id_miembro }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerMiembro_equipo = obtenerMiembro_equipo;
const obtenerMiembro_equipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    miembro_equipo_schema_1.Miembro_equipoSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerMiembro_equipos = obtenerMiembro_equipos;
const agregarMiembro_equipo = (req, res) => {
    const p = new miembro_equipo_schema_1.Miembro_equipoSchema({
        "id_miembro": req.body.id_miembro,
        "id_usuario": req.body.id_equipo,
        "rol": req.body.rol
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarMiembro_equipo = agregarMiembro_equipo;
const actualizarMiembro_equipo = (req, res) => {
    miembro_equipo_schema_1.Miembro_equipoSchema.updateOne({ id_miembro: req.params.id_miembro }, {
        id_miembro: req.body.id_miembro,
        id_usuario: req.body.id_equipo,
        rol: req.body.rol
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarMiembro_equipo = actualizarMiembro_equipo;
const eliminarMiembro_equipo = (req, res) => {
    miembro_equipo_schema_1.Miembro_equipoSchema.deleteOne({ id_miembro: req.params.id_miembro })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarMiembro_equipo = eliminarMiembro_equipo;
