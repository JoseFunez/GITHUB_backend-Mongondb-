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
exports.eliminarFile = exports.actualizarFile = exports.agregarFile = exports.obtenerFiles = exports.obtenerFile = void 0;
const file_schema_1 = require("../model/file.schema");
const obtenerFile = (req, res) => {
    file_schema_1.FileSchema.findOne({ id_file: req.params.id_file }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerFile = obtenerFile;
const obtenerFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    file_schema_1.FileSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerFiles = obtenerFiles;
const agregarFile = (req, res) => {
    const p = new file_schema_1.FileSchema({
        "id_file": req.body.id_file,
        "id_repositorio": req.body.id_repositorio,
        "nombre": req.body.nombre,
        "extension": req.body.extension,
        "tamanio": req.body.tamanio,
        "fecha_creacion": req.body.fecha_creacion,
        "date_last_modif": req.body.date_last_modif
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarFile = agregarFile;
const actualizarFile = (req, res) => {
    file_schema_1.FileSchema.updateOne({ id_file: req.params.id_file }, {
        id_file: req.body.id_file,
        id_repositorio: req.body.id_repositorio,
        nombre: req.body.nombre,
        extension: req.body.extension,
        tamanio: req.body.tamanio,
        fecha_creacion: req.body.fecha_creacion,
        date_last_modif: req.body.date_last_modif
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarFile = actualizarFile;
const eliminarFile = (req, res) => {
    file_schema_1.FileSchema.deleteOne({ id_file: req.params.id_file })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarFile = eliminarFile;
