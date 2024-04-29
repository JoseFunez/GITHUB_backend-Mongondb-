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
exports.eliminarConfig = exports.actualizarConfig = exports.agregarConfig = exports.obtenerConfigs = exports.obtenerConfig = void 0;
const config_schema_1 = require("../model/config.schema");
const obtenerConfig = (req, res) => {
    config_schema_1.ConfigSchema.findOne({ id_config: req.params.id_config }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerConfig = obtenerConfig;
const obtenerConfigs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    config_schema_1.ConfigSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerConfigs = obtenerConfigs;
const agregarConfig = (req, res) => {
    const p = new config_schema_1.ConfigSchema({
        "id_config": req.body.id_config,
        "id_repositorio": req.body.id_repositorio,
        "tipo_acceso": req.body.tipo_acceso,
        "fecha_creacion": req.body.fecha_creacion,
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarConfig = agregarConfig;
const actualizarConfig = (req, res) => {
    config_schema_1.ConfigSchema.updateOne({ id_config: req.params.id_config }, {
        id_config: req.body.id_config,
        id_repositorio: req.body.id_repositorio,
        tipo_acceso: req.body.tipo_acceso,
        fecha_creacion: req.body.fecha_creacion,
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarConfig = actualizarConfig;
const eliminarConfig = (req, res) => {
    config_schema_1.ConfigSchema.deleteOne({ id_config: req.params.id_config })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarConfig = eliminarConfig;
