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
exports.eliminarOrganizacion = exports.actualizarOrganizacion = exports.agregarOrganizacion = exports.obtenerOrganizaciones = exports.obtenerOrganizacion = void 0;
const organizacion_schema_1 = require("../model/organizacion.schema");
const obtenerOrganizacion = (req, res) => {
    organizacion_schema_1.OrganizacionSchema.findOne({ id_organizacion: req.params.id_organizacion }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerOrganizacion = obtenerOrganizacion;
const obtenerOrganizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    organizacion_schema_1.OrganizacionSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerOrganizaciones = obtenerOrganizaciones;
const agregarOrganizacion = (req, res) => {
    const p = new organizacion_schema_1.OrganizacionSchema({
        "id_organizacion": req.body.id_organizacion,
        "id_usuario": req.body.id_usuario,
        "descripcion": req.body.descripcion,
        "fecha_creacion": req.body.fecha_creacion,
        "locacion": req.body.locacion,
        "website": req.body.website,
        "numero_miembros": req.body.numero_miembros
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarOrganizacion = agregarOrganizacion;
const actualizarOrganizacion = (req, res) => {
    organizacion_schema_1.OrganizacionSchema.updateOne({ id_organizacion: req.params.id_organizacion }, {
        id_organizacion: req.body.id_organizacion,
        id_usuario: req.body.id_usuario,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion,
        locacion: req.body.locacion,
        website: req.body.website,
        numero_miembros: req.body.numero_miembros
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarOrganizacion = actualizarOrganizacion;
const eliminarOrganizacion = (req, res) => {
    organizacion_schema_1.OrganizacionSchema.deleteOne({ id_organizacion: req.params.id_organizacion })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarOrganizacion = eliminarOrganizacion;
