import React, { Component } from 'react';
import { BrowserRouter as Router,Route  } from 'react-router-dom';
import '../styles/index.css';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
export default class Navegador extends Component {
    render() {
        return (
            <html>
           
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <body >
                
              <div className="area"></div><nav className="main-menu">
                  
                <ul>
                    <li className="has-subnav">
                        
                    
                        <a href="/PIndexReact">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Inicio</span>
                                
                            </a>
                      
                    </li>
                   <li className="has-subnav main-menu">
                        <a >
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">
                                Stars Components
                            </span>
                        </a>
                        <div className="area2"></div>
                        <nav className="main-menu2 ">
                            <ul className="logout">
                                <li className="has-subnav main-menu">        
                                    <a href="/">
                                        <i className="fa fa-2x"></i>
                                        <span className="nav-text">
                                            notas
                                        </span>
                                    </a>
                                </li>
                                <li className="has-subnav main-menu"> 
                                    <a href="/chat">
                                        <i className="fa fa-2x"></i>
                                        <span className="nav-text">
                                           Chat
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className="has-subnav ">
                        <a href="/get">
                           <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                                Forms
                            </span>
                        </a>
                        
                    </li>
                    <li className="has-subnav">
                        <a href="/Productos">
                           <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">
                                Pages
                            </span>
                        </a>
                       
                    </li>
                    <li className="has-subnav ">
                        <a href="#">
                            <i className="fa fa-bar-chart-o fa-2x"></i>
                            <span className="nav-text">
                                Graphs and Statistics
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav ">
                        <a href="#">
                            <i className="fa fa-font fa-2x"></i>
                            <span className="nav-text">
                               Quotes
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav ">
                       <a href="#">
                           <i className="fa fa-table fa-2x"></i>
                            <span className="nav-text">
                                Tables
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav ">
                       <a href="sucursales">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <span className="nav-text">
                                sucursales
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav ">
                        <a href="/perfil">
                           <i className="fa "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></i>
                            <span className="nav-text">
                            Perfil
                            </span>
                        </a>
                    </li>
                   
                </ul>
            
                <ul className="logout">
                    <li>
                       <a href="/">
                             <i className="fa fa-group fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>  
                </ul>
            </nav>
            
            <div className="container">
            <Router> 
                
                <Route path="/PIndexReact"  />
                <Route path="/" exact />
                <Route path='/get'  ></Route>
                <Route path='/Producto'  ></Route>
                <Route path='/Perfil' ></Route>
                <Route path='/Productos'  ></Route>
                <Route path='/sucursales'  ></Route>
                
            </Router>
            </div>
            <nav className="menu">
              
              <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
              <label className="menu-open-button" for="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            
              </label>
             
              <a href="#" className="menu-item"> <i className="fa fa-bar-chart"></i> </a>
              <br></br>
                <a href="#" className="menu-item"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg> 
                </a>
                <a href="https://www.facebook.com/profile.php?id=100010475052919&viewas=100000686899395" target="_blank" className="menu-item "> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                </a>
              <a href="#" className="menu-item"> <i className="fa fa-cog"></i> </a>
              <a href="#" className="menu-item"> <i className="fa fa-ellipsis-h"></i> </a>
            </nav>
            
            </body>
            </html>
        )
    }
}
