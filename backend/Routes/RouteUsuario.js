const express =require('express');
const RoutesUsuario = express.Router();
const ControllerUsuarios = require('../Controllers/ControllerUsuarios');
//---------
//Usuarios |
//---------
RoutesUsuario.GetUsuario=(ControllerUsuarios.Get);
RoutesUsuario.RegistrarUsuario=(ControllerUsuarios.CrearUsuario)

module.exports = RoutesUsuario;