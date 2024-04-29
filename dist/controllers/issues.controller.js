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
exports.eliminarIssue = exports.actualizarIssue = exports.agregarIssue = exports.obtenerIssues = exports.obtenerIssue = void 0;
const issues_schema_1 = require("../model/issues.schema");
const obtenerIssue = (req, res) => {
    issues_schema_1.IssuesSchema.findOne({ id_issues: req.params.id_issues }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerIssue = obtenerIssue;
const obtenerIssues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    issues_schema_1.IssuesSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerIssues = obtenerIssues;
const agregarIssue = (req, res) => {
    const p = new issues_schema_1.IssuesSchema({
        "id_issues": req.body.id_issues,
        "id_repositorio": req.body.id_repositorio,
        "titulo_issue": req.body.titulo_issue,
        "descripcion_issue": req.body.descripcion_issue,
        "estado_issue": req.body.estado_issue,
        "fecha_creacion_issue": req.body.fecha_creacion_issue,
        "ultima_fecha_actualizacion": req.body.ultima_fecha_actualizacion
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarIssue = agregarIssue;
const actualizarIssue = (req, res) => {
    issues_schema_1.IssuesSchema.updateOne({ id_issues: req.params.id_issues }, {
        id_issues: req.body.id_issues,
        id_repositorio: req.body.id_repositorio,
        titulo_issue: req.body.titulo_issue,
        descripcion_issue: req.body.descripcion_issue,
        estado_issue: req.body.estado_issue,
        fecha_creacion_issue: req.body.fecha_creacion_issue,
        ultima_fecha_actualizacion: req.body.ultima_fecha_actualizacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarIssue = actualizarIssue;
const eliminarIssue = (req, res) => {
    issues_schema_1.IssuesSchema.deleteOne({ id_issues: req.params.id_issues })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarIssue = eliminarIssue;
