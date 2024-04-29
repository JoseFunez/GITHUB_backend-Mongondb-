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
exports.eliminarRegistro_paquete = exports.actualizarRegistro_paquete = exports.agregarRegistro_paquete = exports.obtenerRegistro_paquetes = exports.obtenerRegistro_paquete = void 0;
const registro_paquetes_schema_1 = require("../model/registro_paquetes.schema");
const obtenerRegistro_paquete = (req, res) => {
    registro_paquetes_schema_1.Registro_paqueteSchema.findOne({ id_registro: req.params.id_registro }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerRegistro_paquete = obtenerRegistro_paquete;
const obtenerRegistro_paquetes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    registro_paquetes_schema_1.Registro_paqueteSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerRegistro_paquetes = obtenerRegistro_paquetes;
const agregarRegistro_paquete = (req, res) => {
    const p = new registro_paquetes_schema_1.Registro_paqueteSchema({
        "id_registro": req.body.id_registro,
        "id_repositorio": req.body.id_repositorio,
        "nombre_paquete": req.body.nombre_paquete,
        "version_paquete": req.body.version_paquete,
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
exports.agregarRegistro_paquete = agregarRegistro_paquete;
const actualizarRegistro_paquete = (req, res) => {
    registro_paquetes_schema_1.Registro_paqueteSchema.updateOne({ id_registro: req.params.id_registro }, {
        id_registro: req.body.id_registro,
        id_repositorio: req.body.id_repositorio,
        nombre_paquete: req.body.nombre_paquete,
        version_paquete: req.body.version_paquete,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarRegistro_paquete = actualizarRegistro_paquete;
const eliminarRegistro_paquete = (req, res) => {
    registro_paquetes_schema_1.Registro_paqueteSchema.deleteOne({ id_registro: req.params.id_registro })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarRegistro_paquete = eliminarRegistro_paquete;
