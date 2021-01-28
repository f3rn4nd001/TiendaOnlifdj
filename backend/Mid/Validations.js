function createUserValidation(data,res){
    const errors = [];
    const {nombreUsu,email,apellidos,password,Confpassword,tipo,fotoPerfi}=(data);
  
    if(!nombreUsu){
       throw res.send({'success':false,message: 'El campo nombre de usuario no puede estar vacio'});
        errors.push({ text: 'El campo nombre de usuario no puede estar vacio'});
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
        throw res.send({message:'la contraseña tiene que se mayor a 4 digitos' ,'success':false,});
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
      }
      if(Confpassword.length<4){
        throw res.send({message:'la contraseña tiene que se mayor a 4 digitos' ,'success':false,});
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
      }
      if(password != Confpassword){
        throw res.send({message:' la contraseña no coinide' ,'success':false});
        errors.push({ text: ' la contraseña no coinide','success':false});
      }
      if(!tipo){
        throw res.send({'success':false,message: 'El campo tipo no puede estar vacio'});
        errors.push({ text: 'El campo tipo no puede estar vacio'});
      }
      if(!email){
        throw res.send({'success':false,message: 'El campo email no puede estar vacio'});
        errors.push({ text: 'El campo email no puede estar vacio'});
      }
      if(!apellidos){
        throw res.send({'success':false,message: 'El campo apellidos no puede estar vacio'});
        errors.push({ text: 'El campo apellidos no puede estar vacio'});
      }
}



module.exports={
    createUserValidation
}