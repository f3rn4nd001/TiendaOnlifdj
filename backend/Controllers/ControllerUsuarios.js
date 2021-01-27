const conecc = require('../Database/Database');

const ControllerUsuarios={}



ControllerUsuarios.Get = async (req, res) =>{
    await conecc.query("SELECT * FROM usuarios", function (err, result, fields) {
      res.json(result);
    });
          
  }
module.exports=ControllerUsuarios;