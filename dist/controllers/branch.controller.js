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
exports.eliminarBranch = exports.actualizarBranch = exports.agregarBranch = exports.obtenerBranchs = exports.obtenerBranch = void 0;
const branch_schema_1 = require("../model/branch.schema");
const obtenerBranch = (req, res) => {
    branch_schema_1.BranchSchema.findOne({ id_branch: req.params.id_branch }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerBranch = obtenerBranch;
const obtenerBranchs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    branch_schema_1.BranchSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerBranchs = obtenerBranchs;
const agregarBranch = (req, res) => {
    const p = new branch_schema_1.BranchSchema({
        "id_branch": req.body.id_branch,
        "id_repositorio": req.body.id_repositorio,
        "nombre": req.body.nombre,
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
exports.agregarBranch = agregarBranch;
const actualizarBranch = (req, res) => {
    branch_schema_1.BranchSchema.updateOne({ id_branch: req.params.id_branch }, {
        id_branch: req.body.id_branch,
        id_repositorio: req.body.id_repositorio,
        nombre: req.body.nombre,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarBranch = actualizarBranch;
const eliminarBranch = (req, res) => {
    branch_schema_1.BranchSchema.deleteOne({ id_branch: req.params.id_branch })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarBranch = eliminarBranch;
