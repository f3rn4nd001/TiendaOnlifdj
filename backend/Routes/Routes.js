const express =require('express');
const router = express.Router();
const ControllerUsuarios = require('../Controllers/ControllerUsuarios');
//---------
//Usuarios |
//---------
router.get('/Usuario/',ControllerUsuarios.Get);
//router.post('/Medico/',MedicoController.Post);

module.exports = router;