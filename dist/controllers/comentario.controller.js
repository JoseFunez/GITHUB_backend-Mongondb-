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
exports.eliminarComentario = exports.agregarComentario = exports.obtenerComentarios = exports.obtenerComentario = void 0;
const comentario_schema_1 = require("../model/comentario.schema");
const obtenerComentario = (req, res) => {
    comentario_schema_1.ComentarioSchema.findOne({ id_comentario: req.params.id_comentario }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerComentario = obtenerComentario;
const obtenerComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    comentario_schema_1.ComentarioSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerComentarios = obtenerComentarios;
const agregarComentario = (req, res) => {
    const p = new comentario_schema_1.ComentarioSchema({
        "id_comentario": req.body.id_comentario,
        "id_usuario": req.body.id_usuario,
        "comentario": req.body.comentario,
        "fecha_comentario": req.body.fecha_comentario
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarComentario = agregarComentario;
const eliminarComentario = (req, res) => {
    comentario_schema_1.ComentarioSchema.deleteOne({ id_comentario: req.params.id_comentario })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarComentario = eliminarComentario;
