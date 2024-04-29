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
exports.eliminarProyecto = exports.actualizarProyecto = exports.agregarProyecto = exports.obtenerProyectos = exports.obtenerProyecto = void 0;
const proyectos_schema_1 = require("../model/proyectos.schema");
const obtenerProyecto = (req, res) => {
    proyectos_schema_1.ProyectosSchema.findOne({ id_proyecto: req.params.id_proyecto }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerProyecto = obtenerProyecto;
const obtenerProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    proyectos_schema_1.ProyectosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerProyectos = obtenerProyectos;
const agregarProyecto = (req, res) => {
    const p = new proyectos_schema_1.ProyectosSchema({
        "id_proyecto": req.body.id_proyecto,
        "nombre": req.body.nombre,
        "id_usuario": req.body.id_usuario,
        "descripcion_proyecto": req.body.descripcion_proyecto,
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
exports.agregarProyecto = agregarProyecto;
const actualizarProyecto = (req, res) => {
    proyectos_schema_1.ProyectosSchema.updateOne({ id_proyecto: req.params.id_proyecto }, {
        id_proyecto: req.body.id_proyecto,
        nombre: req.body.nombre,
        id_usuario: req.body.id_usuario,
        descripcion_proyecto: req.body.descripcion_proyecto,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarProyecto = actualizarProyecto;
const eliminarProyecto = (req, res) => {
    proyectos_schema_1.ProyectosSchema.deleteOne({ id_proyecto: req.params.id_proyecto })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarProyecto = eliminarProyecto;
