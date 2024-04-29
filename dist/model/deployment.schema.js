"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_deploy: String,
    id_deploy: Number,
    id_usuario: (Array),
    id_repositorio: (Array),
    entorno: String,
    date_deploy: Date,
    status: Date,
});
exports.DeploymentSchema = mongoose_1.default.model('deployment', schema);
