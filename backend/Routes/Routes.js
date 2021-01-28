const express =require('express');
const router = express.Router();
const RoutesUsuario =require('./RouteUsuario');
//---------
//Usuarios |
//---------
router.get('/Usuario/',RoutesUsuario.GetUsuario);
router.post('/Usuario/',RoutesUsuario.RegistrarUsuario);

module.exports = router;