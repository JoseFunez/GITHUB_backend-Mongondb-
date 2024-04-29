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
exports.eliminarDiscussion = exports.actualizarDiscussion = exports.agregarDiscussion = exports.obtenerDiscussions = exports.obtenerDiscussion = void 0;
const discussion_schema_1 = require("../model/discussion.schema");
const obtenerDiscussion = (req, res) => {
    discussion_schema_1.DiscussionSchema.findOne({ id_discusion: req.params.id_discusion }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerDiscussion = obtenerDiscussion;
const obtenerDiscussions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    discussion_schema_1.DiscussionSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerDiscussions = obtenerDiscussions;
const agregarDiscussion = (req, res) => {
    const p = new discussion_schema_1.DiscussionSchema({
        "id_discusion": req.body.id_discusion,
        "id_repositorio": req.body.id_repositorio,
        "id_usuario": req.body.id_usuario,
        "contenido": req.body.contenido,
        "titulo": req.body.titulo,
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
exports.agregarDiscussion = agregarDiscussion;
const actualizarDiscussion = (req, res) => {
    discussion_schema_1.DiscussionSchema.updateOne({ id_discusion: req.params.id_discusion }, {
        id_discusion: req.body.id_discusion,
        id_repositorio: req.body.id_repositorio,
        id_usuario: req.body.id_usuario,
        contenido: req.body.contenido,
        titulo: req.body.titulo,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarDiscussion = actualizarDiscussion;
const eliminarDiscussion = (req, res) => {
    discussion_schema_1.DiscussionSchema.deleteOne({ id_discusion: req.params.id_discusion })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarDiscussion = eliminarDiscussion;
