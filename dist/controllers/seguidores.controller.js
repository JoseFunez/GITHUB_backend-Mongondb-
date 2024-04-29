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
exports.eliminarSeguidor = exports.agregarSeguidor = exports.obtenerSeguidores = exports.obtenerSeguidor = void 0;
const seguidores_schema_1 = require("../model/seguidores.schema");
const obtenerSeguidor = (req, res) => {
    seguidores_schema_1.SeguidoresSchema.findOne({ id_seguidor: req.params.id_seguidor }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerSeguidor = obtenerSeguidor;
const obtenerSeguidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    seguidores_schema_1.SeguidoresSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerSeguidores = obtenerSeguidores;
const agregarSeguidor = (req, res) => {
    const p = new seguidores_schema_1.SeguidoresSchema({
        "id_seguidor": req.body.id_seguidor,
        "id_usuario": req.body.id_usuario,
        "fecha_seguimiento": req.body.fecha_seguimiento,
        "visibilidad": req.body.visibilidad
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarSeguidor = agregarSeguidor;
const eliminarSeguidor = (req, res) => {
    seguidores_schema_1.SeguidoresSchema.deleteOne({ id_seguidor: req.params.id_seguidor })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarSeguidor = eliminarSeguidor;
