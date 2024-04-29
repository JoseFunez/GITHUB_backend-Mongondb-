"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bd = 'GitHub_Pruebas';
const port = '27017';
const host = '0.0.0.0';
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect(`mongodb://${host}:${port}/${bd}`)
            .then(resut => console.log('se conecto a mongoDB'))
            .catch(error => console.log(error));
    }
}
exports.Database = Database;
