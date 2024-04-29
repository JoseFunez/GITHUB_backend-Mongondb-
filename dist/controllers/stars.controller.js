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
exports.eliminarStar = exports.actualizarStar = exports.agregarStar = exports.obtenerStars = exports.obtenerStar = void 0;
const stars_schema_1 = require("../model/stars.schema");
const obtenerStar = (req, res) => {
    stars_schema_1.StarsSchema.findOne({ id_estrella: req.params.id_estrella }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerStar = obtenerStar;
const obtenerStars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    stars_schema_1.StarsSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerStars = obtenerStars;
const agregarStar = (req, res) => {
    const p = new stars_schema_1.StarsSchema({
        "id_estrella": req.body.id_estrella,
        "id_usuario": req.body.id_usuario,
        "id_repositorio": req.body.id_repositorio,
        "fecha_estrella": req.body.fecha_estrella,
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarStar = agregarStar;
const actualizarStar = (req, res) => {
    stars_schema_1.StarsSchema.updateOne({ id_estrella: req.params.id_estrella }, {
        id_estrella: req.body.id_estrella,
        id_usuario: req.body.id_usuario,
        id_repositorio: req.body.id_repositorio,
        fecha_estrella: req.body.fecha_estrella,
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarStar = actualizarStar;
const eliminarStar = (req, res) => {
    stars_schema_1.StarsSchema.deleteOne({ id_estrella: req.params.id_estrella })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarStar = eliminarStar;
