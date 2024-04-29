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
exports.eliminarDeploy = exports.actualizarDeploy = exports.agregarDeploy = exports.obtenerDeploys = exports.obtenerDeploy = void 0;
const deployment_schema_1 = require("../model/deployment.schema");
const obtenerDeploy = (req, res) => {
    deployment_schema_1.DeploymentSchema.findOne({ id_deploy: req.params.id_deploy }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerDeploy = obtenerDeploy;
const obtenerDeploys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    deployment_schema_1.DeploymentSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerDeploys = obtenerDeploys;
const agregarDeploy = (req, res) => {
    const p = new deployment_schema_1.DeploymentSchema({
        "id_deploy": req.body.id_deploy,
        "id_usuario": req.body.id_usuario,
        "id_repositorio": req.body.id_repositorio,
        "entorno": req.body.entorno,
        "date_deploy": req.body.date_deploy,
        "status": req.body.status
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarDeploy = agregarDeploy;
const actualizarDeploy = (req, res) => {
    deployment_schema_1.DeploymentSchema.updateOne({ id_deploy: req.params.id_deploy }, {
        id_deploy: req.body.id_deploy,
        id_usuario: req.body.id_usuario,
        id_repositorio: req.body.id_repositorio,
        entorno: req.body.entorno,
        date_deploy: req.body.date_deploy,
        status: req.body.status
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarDeploy = actualizarDeploy;
const eliminarDeploy = (req, res) => {
    deployment_schema_1.DeploymentSchema.deleteOne({ id_deploy: req.params.id_deploy })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarDeploy = eliminarDeploy;
