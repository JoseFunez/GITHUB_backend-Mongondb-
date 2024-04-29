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
exports.eliminarFile_modif = exports.actualizarFile_modif = exports.agregarFile_modif = exports.obtenerFile_modifs = exports.obtenerFile_modif = void 0;
const file_modif_schema_1 = require("../model/file_modif.schema");
const obtenerFile_modif = (req, res) => {
    file_modif_schema_1.File_modifSchema.findOne({ id_file_modif: req.params.id_file_modif }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerFile_modif = obtenerFile_modif;
const obtenerFile_modifs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    file_modif_schema_1.File_modifSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerFile_modifs = obtenerFile_modifs;
const agregarFile_modif = (req, res) => {
    const p = new file_modif_schema_1.File_modifSchema({
        "id_file_modif": req.body.id_file_modif,
        "id_commit": req.body.id_commit,
        "file_path": req.body.file_path,
        "lines_added": req.body.lines_added,
        "lines_deleted": req.body.lines_deleted,
        "modif_type": req.body.modif_type
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarFile_modif = agregarFile_modif;
const actualizarFile_modif = (req, res) => {
    file_modif_schema_1.File_modifSchema.updateOne({ id_file_modif: req.params.id_file_modif }, {
        id_file_modif: req.body.id_file_modif,
        id_commit: req.body.id_commit,
        file_path: req.body.file_path,
        lines_added: req.body.lines_added,
        lines_deleted: req.body.lines_deleted,
        modif_type: req.body.modif_type
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarFile_modif = actualizarFile_modif;
const eliminarFile_modif = (req, res) => {
    file_modif_schema_1.File_modifSchema.deleteOne({ id_file_modif: req.params.id_file_modif })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarFile_modif = eliminarFile_modif;
