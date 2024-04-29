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
exports.eliminarAlerta = exports.actualizarAlerta = exports.agregarAlerta = exports.obtenerAlertas = exports.obtenerAlerta = void 0;
const alerta_seguridad_schema_1 = require("../model/alerta_seguridad.schema");
const obtenerAlerta = (req, res) => {
    alerta_seguridad_schema_1.Alerta_seguridadSchema.findOne({ id_alerta: req.params.id_alerta }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerAlerta = obtenerAlerta;
const obtenerAlertas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    alerta_seguridad_schema_1.Alerta_seguridadSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerAlertas = obtenerAlertas;
const agregarAlerta = (req, res) => {
    const p = new alerta_seguridad_schema_1.Alerta_seguridadSchema({
        "id_alerta": req.body.id_alerta,
        "id_repositorio": req.body.id_repositorio,
        "descripcion": req.body.descripcion,
        "gravedad": req.body.gravedad,
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
exports.agregarAlerta = agregarAlerta;
const actualizarAlerta = (req, res) => {
    alerta_seguridad_schema_1.Alerta_seguridadSchema.updateOne({ id_alerta: req.params.id_alerta }, {
        id_alerta: req.body.id_alerta,
        id_repositorio: req.body.id_repositorio,
        descripcion: req.body.descripcion,
        gravedad: req.body.gravedad,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarAlerta = actualizarAlerta;
const eliminarAlerta = (req, res) => {
    alerta_seguridad_schema_1.Alerta_seguridadSchema.deleteOne({ id_alerta: req.params.id_alerta })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarAlerta = eliminarAlerta;
