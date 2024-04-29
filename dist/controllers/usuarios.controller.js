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
exports.eliminarUsuario = exports.actualizarUsuario = exports.agregarUsuario = exports.obtenerUsuarios = exports.obtenerUsuario = exports.login = void 0;
const usuarios_schema_1 = require("../model/usuarios.schema");
// (Controlador de usuarios) login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // asd.456
    const usuario = yield usuarios_schema_1.UsuariosSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena }, { password: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.login = login;
const obtenerUsuario = (req, res) => {
    /*res.send('obtener el usuario: ' + req.params.id);
    res.end();*/
    usuarios_schema_1.UsuariosSchema.findOne({ id_usuario: req.params.id_usuario }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerUsuario = obtenerUsuario;
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*res.send('obtener todos los usuarios');
    res.end();*/
    usuarios_schema_1.UsuariosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerUsuarios = obtenerUsuarios;
const agregarUsuario = (req, res) => {
    const p = new usuarios_schema_1.UsuariosSchema({
        "id_usuario": req.body.id_usuario,
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "imagen": req.body.imagen,
        "correo": req.body.correo,
        "contrasena": req.body.contrasena,
        "status": req.body.status,
        "ubicacion": req.body.ubicacion,
        "biografia": req.body.biografia
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar el usuario', error });
        res.end();
    });
};
exports.agregarUsuario = agregarUsuario;
const actualizarUsuario = (req, res) => {
    usuarios_schema_1.UsuariosSchema.updateOne({ id_usuario: req.params.id_usuario }, {
        id_usuario: req.body.id_usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        imagen: req.body.imagen,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        status: req.body.status,
        ubicacion: req.body.ubicacion,
        biografia: req.body.biografia
    }).then(updateResponse => {
        res.send({ message: 'Usuario actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar el usuario', error });
        res.end();
    });
    //res.end();
};
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (req, res) => {
    usuarios_schema_1.UsuariosSchema.deleteOne({ id_usuario: req.params.id_usuario })
        .then(removeResult => {
        res.send({ message: 'Usuario eliminado', removeResult });
        res.end();
    });
};
exports.eliminarUsuario = eliminarUsuario;
