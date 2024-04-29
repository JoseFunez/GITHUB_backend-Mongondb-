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
exports.eliminarSponsor_otros_user = exports.actualizarSponsor_otros_user = exports.agregarSponsor_otros_user = exports.obtenerSponsor_otros_users = exports.obtenerSponsor_otros_user = void 0;
const sponsor_otros_user_schema_1 = require("../model/sponsor_otros_user.schema");
const obtenerSponsor_otros_user = (req, res) => {
    sponsor_otros_user_schema_1.Sponsor_otros_userSchema.findOne({ id_sponsor_otros_user: req.params.id_sponsor_otros_user }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerSponsor_otros_user = obtenerSponsor_otros_user;
const obtenerSponsor_otros_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sponsor_otros_user_schema_1.Sponsor_otros_userSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerSponsor_otros_users = obtenerSponsor_otros_users;
const agregarSponsor_otros_user = (req, res) => {
    const p = new sponsor_otros_user_schema_1.Sponsor_otros_userSchema({
        "id_sponsor_otros_user": req.body.id_sponsor_otros_user,
        "id_proyecto": req.body.id_proyecto,
        "lista_sponsor": req.body.lista_sponsor,
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
exports.agregarSponsor_otros_user = agregarSponsor_otros_user;
const actualizarSponsor_otros_user = (req, res) => {
    sponsor_otros_user_schema_1.Sponsor_otros_userSchema.updateOne({ id_sponsor_otros_user: req.params.id_sponsor_otros_user }, {
        id_sponsor_otros_user: req.body.id_sponsor_otros_user,
        id_proyecto: req.body.id_proyecto,
        lista_sponsor: req.body.lista_sponsor,
        fecha_creacion: req.body.fecha_creacion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarSponsor_otros_user = actualizarSponsor_otros_user;
const eliminarSponsor_otros_user = (req, res) => {
    sponsor_otros_user_schema_1.Sponsor_otros_userSchema.deleteOne({ id_sponsor_otros_user: req.params.id_sponsor_otros_user })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarSponsor_otros_user = eliminarSponsor_otros_user;
