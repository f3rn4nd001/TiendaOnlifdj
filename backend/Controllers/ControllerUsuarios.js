const conecc = require('../Database/Database');

const ControllerUsuarios={}

ControllerUsuarios.Get = async (req, res) =>{
    await conecc.query("SELECT * FROM usuarios", function (err, result, fields) {
      res.json(result);
    });   
  }


ControllerUsuarios.CrearUsuario = async (req,res) =>{
  const errors = [];
  const guardado = [];
  const {nombreUsu,email,apellidos,password,Confpassword,tipo,fotoPerfi}=(req.body);
  
  if(!nombreUsu){
    throw res.send({'success':false,message: 'El campo nombre de usuario no puede estar vacio'});
    errors.push({ text: 'El campo nombre de usuario no puede estar vacio'});
  }
  if(typeof nombreUsu !== 'string'){
    throw res.send({'success':false,message: 'El nombre de usuario  tiene que ser letras'});
    errors.push({ text: 'El npopmbnombre de usuario re tiene que ser letras'});
  }
  if(!/^[a-z]+$/i.test(nombreUsu)){
    throw res.send({'success':false,message: 'El nombre de usuario  tiene que constar con leteras de la a-z',nombreUsu});
    errors.push({ text: 'El campo nombre de usuario  no puede estar vacio'});
  }
  if(!password){
    throw res.send({'success':false,message: 'El campo password no puede estar vacio'});
    errors.push({ text: 'El campo password no puede estar vacio'});
  }
  if(!Confpassword){
    throw res.send({'success':false,message: 'El campo confirmacion de contraseña no puede estar vacio'});
    errors.push({ text: 'El campo confirmacion de contraseña no puede estar vacio'});
  }
  if(password.length<4){
    res.send({message:'la contraseña tiene que se mayor a 4 digitos' ,'success':false,});
    errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
  }
  if(Confpassword.length<4){
    res.send({message:'la contraseña tiene que se mayor a 4 digitos' ,'success':false,});
    errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
  }
  if(password != Confpassword){
    res.send({message:' la contraseña no coinide' ,'success':false});
    errors.push({ text: ' la contraseña no coinide','success':false});
  }
  if(!tipo){
    res.send({'success':false,message: 'El campo tipo no puede estar vacio'});
    errors.push({ text: 'El campo tipo no puede estar vacio'});
  }
  if(!email){
    throw res.send({'success':false,message: 'El campo email no puede estar vacio'});
    errors.push({ text: 'El campo email no puede estar vacio'});
  }
  if(!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/i.test(email)){
    throw res.send({'success':false,message: 'asegurese que el email es correcto'});
    errors.push({ text: 'El campo email no puede estar vacio'});
  
  }
  if(!apellidos){
    res.send({'success':false,message: 'El campo apellidos no puede estar vacio'});
    errors.push({ text: 'El campo apellidos no puede estar vacio'});
  }
  if(typeof apellidos !== 'string'){
    throw res.send({'success':false,message: 'El apellidos tiene que ser letras'});
    errors.push({ text: 'El apellidos tiene que ser letras'});
  }

  if(!/^[a-z]+$/i.test(apellidos)){
    throw res.send({'success':false,message: 'El nombre tiene que constar con leteras de la a-z',apellidos});
    errors.push({ text: 'El campo apellidos no puede estar vacio'});
  }

  if (errors.length > 0) {
    console.log({
      errors,
    });
  }
  
  else{
  
    
        await conecc.query("INSERT INTO usuarios (nombreUsu,email,apellidos,password,tipo,fotoPerfi) VALUES (?,?,?,?,?,?)",[nombreUsu,email,apellidos,password,tipo,fotoPerfi], function (err, result, fields) {}); 
        await conecc.query("SELECT * FROM usuarios WHERE email = ? ",[email], function (err, result, fields) {
          if(result){
            res.json(["usuario guardado",result]);
          }
          else{
            res.json('usuario no encontrado')
          }  
        }); 
      }

  
}

module.exports=ControllerUsuarios;