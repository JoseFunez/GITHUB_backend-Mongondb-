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
exports.eliminarGist = exports.actualizarGist = exports.agregarGist = exports.obtenerGists = exports.obtenerGist = void 0;
const gist_schema_1 = require("../model/gist.schema");
const obtenerGist = (req, res) => {
    gist_schema_1.GistSchema.findOne({ id_gist: req.params.id_gist }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerGist = obtenerGist;
const obtenerGists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    gist_schema_1.GistSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerGists = obtenerGists;
const agregarGist = (req, res) => {
    const p = new gist_schema_1.GistSchema({
        "id_gist": req.body.id_gist,
        "id_usuario": req.body.id_usuario,
        "descripcion_gist": req.body.descripcion_gist,
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
exports.agregarGist = agregarGist;
const actualizarGist = (req, res) => {
    gist_schema_1.GistSchema.updateOne({ id_Gist: req.params.id_Gist }, {
        id_gist: req.body.id_gist,
        id_usuario: req.body.id_usuario,
        descripcion_gist: req.body.descripcion_gist,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarGist = actualizarGist;
const eliminarGist = (req, res) => {
    gist_schema_1.GistSchema.deleteOne({ id_gist: req.params.id_gist })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarGist = eliminarGist;
