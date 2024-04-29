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
exports.eliminarRepositorio = exports.actualizarRepositorio = exports.agregarRepositorio = exports.obtenerRepositorios = exports.obtenerRepositorio = void 0;
const repositorios_schema_1 = require("../model/repositorios.schema");
const obtenerRepositorio = (req, res) => {
    /*res.send('obtener el usuario: ' + req.params.id);
    res.end();*/
    repositorios_schema_1.RepositoriosSchema.findOne({ id_repositorio: req.params.id_repositorio }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerRepositorio = obtenerRepositorio;
const obtenerRepositorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*res.send('obtener todos los usuarios');
    res.end();*/
    repositorios_schema_1.RepositoriosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerRepositorios = obtenerRepositorios;
const agregarRepositorio = (req, res) => {
    const p = new repositorios_schema_1.RepositoriosSchema({
        "id_repositorio": req.body.id_repositorio,
        "nombre_repositorio": req.body.nombre_repositorio,
        "id_usuario": req.body.id_usuario,
        "fecha_creacion_repositorio": req.body.fecha_creacion_repositorio,
        "fecha_ultima_actualizacion": req.body.fecha_ultima_actualizacion,
        "lenguaje_principal": req.body.lenguaje_principal
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar el repositorio', error });
        res.end();
    });
};
exports.agregarRepositorio = agregarRepositorio;
const actualizarRepositorio = (req, res) => {
    repositorios_schema_1.RepositoriosSchema.updateOne({ id_repositorio: req.params.id_repositorio }, {
        id_repositorio: req.body.id_repositorio,
        nombre_repositorio: req.body.nombre_repositorio,
        id_usuario: req.body.id_usuario,
        fecha_creacion_repositorio: req.body.fecha_creacion_repositorio,
        fecha_ultima_actualizacion: req.body.fecha_ultima_actualizacion,
        lenguaje_principal: req.body.lenguaje_principal
    }).then(updateResponse => {
        res.send({ message: 'repositorio actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar el repositorio', error });
        res.end();
    });
    //res.end();
};
exports.actualizarRepositorio = actualizarRepositorio;
const eliminarRepositorio = (req, res) => {
    repositorios_schema_1.RepositoriosSchema.deleteOne({ id_repositorio: req.params.id_repositorio })
        .then(removeResult => {
        res.send({ message: 'repositorio eliminado', removeResult });
        res.end();
    });
};
exports.eliminarRepositorio = eliminarRepositorio;
