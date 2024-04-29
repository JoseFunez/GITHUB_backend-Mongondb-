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
exports.eliminarDiscuss_coment = exports.actualizarDiscuss_coment = exports.agregarDiscuss_coment = exports.obtenerDiscuss_coments = exports.obtenerDiscuss_coment = void 0;
const discuss_coment_schema_1 = require("../model/discuss_coment.schema");
const obtenerDiscuss_coment = (req, res) => {
    discuss_coment_schema_1.Discuss_comentSchema.findOne({ id_comentario: req.params.id_comentario }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerDiscuss_coment = obtenerDiscuss_coment;
const obtenerDiscuss_coments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    discuss_coment_schema_1.Discuss_comentSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerDiscuss_coments = obtenerDiscuss_coments;
const agregarDiscuss_coment = (req, res) => {
    const p = new discuss_coment_schema_1.Discuss_comentSchema({
        "id_comentario": req.body.id_comentario,
        "id_usuario": req.body.id_usuario,
        "id_discusion": req.body.id_discusion,
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
exports.agregarDiscuss_coment = agregarDiscuss_coment;
const actualizarDiscuss_coment = (req, res) => {
    discuss_coment_schema_1.Discuss_comentSchema.updateOne({ id_comentario: req.params.id_comentario }, {
        id_comentario: req.body.id_comentario,
        id_usuario: req.body.id_usuario,
        id_discusion: req.body.id_discusion,
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
exports.actualizarDiscuss_coment = actualizarDiscuss_coment;
const eliminarDiscuss_coment = (req, res) => {
    discuss_coment_schema_1.Discuss_comentSchema.deleteOne({ id_comentario: req.params.id_comentario })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarDiscuss_coment = eliminarDiscuss_coment;
