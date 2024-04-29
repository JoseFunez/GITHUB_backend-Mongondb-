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
exports.eliminarLabel = exports.actualizarLabel = exports.agregarLabel = exports.obtenerLabels = exports.obtenerLabel = void 0;
const labels_schema_1 = require("../model/labels.schema");
const obtenerLabel = (req, res) => {
    labels_schema_1.LabelsSchema.findOne({ id_label: req.params.id_label }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerLabel = obtenerLabel;
const obtenerLabels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    labels_schema_1.LabelsSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerLabels = obtenerLabels;
const agregarLabel = (req, res) => {
    const p = new labels_schema_1.LabelsSchema({
        "id_label": req.body.id_label,
        "id_repositorio": req.body.id_repositorio,
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "fecha_creacion": req.body.fecha_creacion,
        "fecha_ultima_actualizacion": req.body.fecha_ultima_actualizacion,
        "nivel_prioridad": req.body.nivel_prioridad,
        "restricciones": req.body.restricciones,
        "scope": req.body.scope
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarLabel = agregarLabel;
const actualizarLabel = (req, res) => {
    labels_schema_1.LabelsSchema.updateOne({ id_label: req.params.id_label }, {
        id_label: req.body.id_label,
        id_repositorio: req.body.id_repositorio,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion,
        fecha_ultima_actualizacion: req.body.fecha_ultima_actualizacion,
        nivel_prioridad: req.body.nivel_prioridad,
        restricciones: req.body.restricciones,
        scope: req.body.scope
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarLabel = actualizarLabel;
const eliminarLabel = (req, res) => {
    labels_schema_1.LabelsSchema.deleteOne({ id_label: req.params.id_label })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarLabel = eliminarLabel;
