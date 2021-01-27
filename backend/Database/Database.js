const mysql =require('mysql');

   const conecc = mysql.createConnection({
    host: 'db4free.net',
    user: 'fdj1230987',
    password:'delunoalcero',
    database:'tiendaonli1'
  });
  
  conecc.connect(function(err) {

    if (err) {
      if (err) throw err;
      if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.error('DATABASE CONNECTION WAS cLOSED');
      }
      if(err.code === 'ER_CON_COUNT_ERROR'){
        console.error('DATABASE HAS TO MAHY CONNECTIONS');
      }
      if(err.code === 'ECONNREFUSED'){
        console.error('DATABASE CONNECTION WAS REFUSED');
      }
    }
    else{
    console.log("Connected!");}
  });
  module.exports=conecc;