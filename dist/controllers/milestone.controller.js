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
exports.eliminarMilestone = exports.actualizarMilestone = exports.agregarMilestone = exports.obtenerMilestones = exports.obtenerMilestone = void 0;
const milestone_schema_1 = require("../model/milestone.schema");
const obtenerMilestone = (req, res) => {
    milestone_schema_1.MilestoneSchema.findOne({ id_milestone: req.params.id_milestone }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerMilestone = obtenerMilestone;
const obtenerMilestones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    milestone_schema_1.MilestoneSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerMilestones = obtenerMilestones;
const agregarMilestone = (req, res) => {
    const p = new milestone_schema_1.MilestoneSchema({
        "id_milestone": req.body.id_milestone,
        "id_repositorio": req.body.id_repositorios,
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "due_date": req.body.due_date
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarMilestone = agregarMilestone;
const actualizarMilestone = (req, res) => {
    milestone_schema_1.MilestoneSchema.updateOne({ id_milestone: req.params.id_milestone }, {
        id_milestone: req.body.id_milestone,
        id_repositorio: req.body.id_repositorios,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        due_date: req.body.due_date
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarMilestone = actualizarMilestone;
const eliminarMilestone = (req, res) => {
    milestone_schema_1.MilestoneSchema.deleteOne({ id_milestone: req.params.id_milestone })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarMilestone = eliminarMilestone;
