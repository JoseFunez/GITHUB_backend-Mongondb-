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
exports.eliminarCommit = exports.actualizarCommit = exports.agregarCommit = exports.obtenerCommits = exports.obtenerCommit = void 0;
const commits_schema_1 = require("../model/commits.schema");
const obtenerCommit = (req, res) => {
    commits_schema_1.CommitsSchema.findOne({ id_commit: req.params.id_commit }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerCommit = obtenerCommit;
const obtenerCommits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    commits_schema_1.CommitsSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerCommits = obtenerCommits;
const agregarCommit = (req, res) => {
    const p = new commits_schema_1.CommitsSchema({
        "id_commit": req.body.id_commit,
        "id_usuario": req.body.id_usuario,
        "id_repositorio": req.body.id_repositorio,
        "commit_message": req.body.commit_message,
        "commit_date": req.body.commit_date,
        "changes_count": req.body.changes_count
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarCommit = agregarCommit;
const actualizarCommit = (req, res) => {
    commits_schema_1.CommitsSchema.updateOne({ id_commit: req.params.id_commit }, {
        id_commit: req.body.id_commit,
        id_usuario: req.body.id_usuario,
        id_repositorio: req.body.id_repositorio,
        commit_message: req.body.commit_message,
        commit_date: req.body.commit_date,
        changes_count: req.body.changes_count
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarCommit = actualizarCommit;
const eliminarCommit = (req, res) => {
    commits_schema_1.CommitsSchema.deleteOne({ id_commit: req.params.id_commit })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarCommit = eliminarCommit;
