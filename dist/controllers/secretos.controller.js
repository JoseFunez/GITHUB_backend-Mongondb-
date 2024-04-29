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
exports.eliminarSecreto = exports.actualizarSecreto = exports.agregarSecreto = exports.obtenerSecretos = exports.obtenerSecreto = void 0;
const secretos_schema_1 = require("../model/secretos.schema");
const obtenerSecreto = (req, res) => {
    secretos_schema_1.SecretosSchema.findOne({ id_secrets: req.params.id_secrets }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerSecreto = obtenerSecreto;
const obtenerSecretos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    secretos_schema_1.SecretosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerSecretos = obtenerSecretos;
const agregarSecreto = (req, res) => {
    const p = new secretos_schema_1.SecretosSchema({
        "id_secrets": req.body.id_secrets,
        "id_repositorio": req.body.id_repositorio,
        "nombre": req.body.nombre,
        "valor": req.body.valor,
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
exports.agregarSecreto = agregarSecreto;
const actualizarSecreto = (req, res) => {
    secretos_schema_1.SecretosSchema.updateOne({ id_secrets: req.params.id_secrets }, {
        id_secrets: req.body.id_secrets,
        id_repositorio: req.body.id_repositorio,
        nombre: req.body.nombre,
        valor: req.body.valor,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarSecreto = actualizarSecreto;
const eliminarSecreto = (req, res) => {
    secretos_schema_1.SecretosSchema.deleteOne({ id_secrets: req.params.id_secrets })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarSecreto = eliminarSecreto;
