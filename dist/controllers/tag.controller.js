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
exports.eliminarTag = exports.actualizarTag = exports.agregarTag = exports.obtenerTags = exports.obtenerTag = void 0;
const tag_schema_1 = require("../model/tag.schema");
const obtenerTag = (req, res) => {
    tag_schema_1.TagSchema.findOne({ id_tag: req.params.id_tag }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerTag = obtenerTag;
const obtenerTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    tag_schema_1.TagSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerTags = obtenerTags;
const agregarTag = (req, res) => {
    const p = new tag_schema_1.TagSchema({
        "id_tag": req.body.id_tag,
        "id_repositorio": req.body.id_repositorio,
        "titulo": req.body.titulo,
        "contenido": req.body.contenido,
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
exports.agregarTag = agregarTag;
const actualizarTag = (req, res) => {
    tag_schema_1.TagSchema.updateOne({ id_tag: req.params.id_tag }, {
        id_tag: req.body.id_tag,
        id_repositorio: req.body.id_repositorio,
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarTag = actualizarTag;
const eliminarTag = (req, res) => {
    tag_schema_1.TagSchema.deleteOne({ id_tag: req.params.id_tag })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarTag = eliminarTag;
