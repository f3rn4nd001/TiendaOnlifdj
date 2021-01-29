import React from 'react';

import '../styles/main.css';

class FormRegister extends React.Component {
  render() {
    return (
      <div>
        <form className="card shadow-lg col-md-4 ">
        <div className="form-group">
            <label >Nombre</label>
            <input type="text" className="form-control"    />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Apellido</label>
            <input type="email" className="form-control"   />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control"  aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"  />
          </div>
          <div className="form-group">
            <label>Confirmar Password</label>
            <input type="password" className="form-control"  />
          </div>
          <div className="text-center">
            <button type="submit" className="text-white btn btn-lg  colorPrincipal">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormRegister;
