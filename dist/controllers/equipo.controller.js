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
exports.eliminarEquipo = exports.actualizarEquipo = exports.agregarEquipo = exports.obtenerEquipos = exports.obtenerEquipo = void 0;
const equipo_schema_1 = require("../model/equipo.schema");
const obtenerEquipo = (req, res) => {
    equipo_schema_1.EquipoSchema.findOne({ id_equipo: req.params.id_equipo }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerEquipo = obtenerEquipo;
const obtenerEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    equipo_schema_1.EquipoSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerEquipos = obtenerEquipos;
const agregarEquipo = (req, res) => {
    const p = new equipo_schema_1.EquipoSchema({
        "id_equipo": req.body.id_equipo,
        "nombre_equipo": req.body.nombre_equipo,
        "id_organizacion": req.body.id_organizacion,
        "descripcion": req.body.descripcion,
        "fecha_creacion": req.body.fecha_creacion
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarEquipo = agregarEquipo;
const actualizarEquipo = (req, res) => {
    equipo_schema_1.EquipoSchema.updateOne({ id_equipo: req.params.id_equipo }, {
        id_equipo: req.body.id_equipo,
        nombre_equipo: req.body.nombre_equipo,
        id_organizacion: req.body.id_organizacion,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarEquipo = actualizarEquipo;
const eliminarEquipo = (req, res) => {
    equipo_schema_1.EquipoSchema.deleteOne({ id_equipo: req.params.id_equipo })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarEquipo = eliminarEquipo;
