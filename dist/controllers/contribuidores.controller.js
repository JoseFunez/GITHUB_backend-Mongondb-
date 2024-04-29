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
exports.eliminarContribuidor = exports.actualizarContribuidor = exports.agregarContribuidor = exports.obtenerContribuidores = exports.obtenerContribuidor = void 0;
const contribuidores_schema_1 = require("../model/contribuidores.schema");
const obtenerContribuidor = (req, res) => {
    contribuidores_schema_1.ContribuidoresSchema.findOne({ id_contribuidor: req.params.id_contribuidor }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerContribuidor = obtenerContribuidor;
const obtenerContribuidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    contribuidores_schema_1.ContribuidoresSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerContribuidores = obtenerContribuidores;
const agregarContribuidor = (req, res) => {
    const p = new contribuidores_schema_1.ContribuidoresSchema({
        "id_contribuidor": req.body.id_contribuidor,
        "id_usuario": req.body.id_usuario,
        "id_repositorio": req.body.id_repositorio,
        "cantidad_contribuciones": req.body.cantidad_contribuciones,
        "date_first_ctrb": req.body.date_first_ctrb,
        "date_last_ctrb": req.body.date_last_ctrb
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarContribuidor = agregarContribuidor;
const actualizarContribuidor = (req, res) => {
    contribuidores_schema_1.ContribuidoresSchema.updateOne({ id_contribuidor: req.params.id_contribuidor }, {
        id_contribuidor: req.body.id_contribuidor,
        id_usuario: req.body.id_usuario,
        id_repositorio: req.body.id_repositorio,
        cantidad_contribuciones: req.body.cantidad_contribuciones,
        date_first_ctrb: req.body.date_first_ctrb,
        date_last_ctrb: req.body.date_last_ctrb
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarContribuidor = actualizarContribuidor;
const eliminarContribuidor = (req, res) => {
    contribuidores_schema_1.ContribuidoresSchema.deleteOne({ id_contribuidor: req.params.id_contribuidor })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarContribuidor = eliminarContribuidor;
