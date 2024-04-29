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
exports.eliminarPull_request = exports.actualizarPull_request = exports.agregarPull_request = exports.obtenerPull_requests = exports.obtenerPull_request = void 0;
const pull_request_schema_1 = require("../model/pull_request.schema");
const obtenerPull_request = (req, res) => {
    pull_request_schema_1.Pull_requestSchema.findOne({ id_pull_request: req.params.id_pull_request }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerPull_request = obtenerPull_request;
const obtenerPull_requests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    pull_request_schema_1.Pull_requestSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerPull_requests = obtenerPull_requests;
const agregarPull_request = (req, res) => {
    const p = new pull_request_schema_1.Pull_requestSchema({
        "id_pull_request": req.body.id_pull_request,
        "id_repositorio": req.body.id_repositorio,
        "titulo": req.body.titulo,
        "description": req.body.description,
        "estado": req.body.estado,
        "fecha_creacion": req.body.fecha_creacion,
        "fecha_cierre": req.body.fecha_cierre,
        "fecha_merge": req.body.fecha_merge,
        "rama_base": req.body.rama_base,
        "numero_commits": req.body.numero_commits,
        "review_status": req.body.review_status
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarPull_request = agregarPull_request;
const actualizarPull_request = (req, res) => {
    pull_request_schema_1.Pull_requestSchema.updateOne({ id_pull_request: req.params.id_pull_request }, {
        id_pull_request: req.body.id_pull_request,
        id_repositorio: req.body.id_repositorio,
        titulo: req.body.titulo,
        description: req.body.description,
        estado: req.body.estado,
        fecha_creacion: req.body.fecha_creacion,
        fecha_cierre: req.body.fecha_cierre,
        fecha_merge: req.body.fecha_merge,
        rama_base: req.body.rama_base,
        numero_commits: req.body.numero_commits,
        review_status: req.body.review_status
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarPull_request = actualizarPull_request;
const eliminarPull_request = (req, res) => {
    pull_request_schema_1.Pull_requestSchema.deleteOne({ id_pull_request: req.params.id_pull_request })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarPull_request = eliminarPull_request;
