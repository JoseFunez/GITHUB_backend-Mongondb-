"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_discusion: String,
    id_discusion: Number,
    id_usuario: (Array),
    id_repositorio: (Array),
    titulo: String,
    contenido: String,
    fecha_creacion: Date,
});
exports.DiscussionSchema = mongoose_1.default.model('discussion', schema);
